#!/usr/bin/env node

/**
 * Builds a static manifest of poster URLs from Vercel Blob.
 *
 * This script runs during `npm run build` (via the `prebuild` hook) to make
 * sure the app has a deterministic list of poster URLs baked into the build.
 *
 * Required environment variable:
 *   - BLOB_READ_WRITE_TOKEN (or BLOB_READ_TOKEN with list permission)
 */

import { mkdir, writeFile } from 'node:fs/promises';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { list } from '@vercel/blob';

async function hydrateEnv() {
  if (process.env.BLOB_READ_WRITE_TOKEN || process.env.BLOB_READ_TOKEN) {
    return;
  }

  const candidates = [
    '.env.local',
    '.env.development',
    '.env',
  ];

  for (const file of candidates) {
    const absolute = path.join(process.cwd(), file);
    try {
      const content = await readFile(absolute, 'utf8');
      content
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter((line) => line && !line.startsWith('#'))
        .forEach((line) => {
          const match = line.match(/^([A-Z0-9_]+)=(.*)$/);
          if (!match) return;
          const [, key, rawValue] = match;
          if (process.env[key]) return;

          const unquoted = rawValue.startsWith('"') && rawValue.endsWith('"')
            ? rawValue.slice(1, -1)
            : rawValue;
          process.env[key] = unquoted;
        });
    } catch (error) {
      // Ignore missing env files
    }

    if (process.env.BLOB_READ_WRITE_TOKEN || process.env.BLOB_READ_TOKEN) {
      break;
    }
  }
}

await hydrateEnv();

const token =
  process.env.BLOB_READ_WRITE_TOKEN ?? process.env.BLOB_READ_TOKEN ?? '';

if (!token) {
  console.error(
    '❌  Missing BLOB_READ_WRITE_TOKEN (or BLOB_READ_TOKEN) environment variable.'
  );
  console.error(
    '    The poster manifest cannot be generated without a token that can list blobs.'
  );
  process.exit(1);
}

const OUTPUT_RELATIVE_PATH = path.join('content', 'poster-manifest.json');
const OUTPUT_PATH = path.join(process.cwd(), OUTPUT_RELATIVE_PATH);

try {
  console.log('⏳  Fetching poster blobs from Vercel Blob...');

  const { blobs } = await list({
    token,
    prefix: 'posters',
  });

  if (!blobs.length) {
    console.warn(
      '⚠️  No blobs found under the `posters` prefix. Generated manifest will be empty.'
    );
  } else {
    console.log(`✅  Found ${blobs.length} poster blob(s).`);
  }

  const manifest = blobs.reduce((acc, blob) => {
    const segments = blob.pathname.split('/').filter(Boolean);

    if (segments[0] !== 'posters') {
      return acc;
    }

    const filmSlug = segments[1];
    if (!filmSlug) {
      return acc;
    }

    if (!acc[filmSlug]) {
      acc[filmSlug] = [];
    }

    acc[filmSlug].push(blob.url);
    return acc;
  }, /** @type {Record<string, string[]>} */ ({}));

  // Ensure deterministic ordering for stable builds.
  Object.values(manifest).forEach((urls) => urls.sort());

  await mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
  await writeFile(
    OUTPUT_PATH,
    JSON.stringify(manifest, null, 2) + '\n',
    'utf8'
  );

  console.log(`💾  Poster manifest written to ${OUTPUT_RELATIVE_PATH}`);
} catch (error) {
  console.error('❌  Failed to build poster manifest:', error);
  process.exit(1);
}
