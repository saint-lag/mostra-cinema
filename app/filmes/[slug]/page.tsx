import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { films } from "@/content/films";
import VideoEmbed from "@/components/VideoEmbed";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return films.map((f) => ({ slug: f.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const film = films.find((f) => f.slug === params.slug);
  if (!film) return { title: "Filme não encontrado" };
  return {
    title: `${film.title} | Mostra de Cinema`,
    description: film.synopsis,
    openGraph: {
      title: film.title,
      description: film.synopsis,
      images: film.thumbnail ? [film.thumbnail] : undefined,
      type: "video.movie",
    },
  };
}

export default function FilmPage({ params }: Props) {
  const film = films.find((f) => f.slug === params.slug);
  if (!film) return notFound();

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <a href="/" className="text-sm text-blue-600 hover:underline">&larr; Início</a>

      
      <div className="mt-4 grid gap-8 md:grid-cols-3">
        {/* Coluna principal: player / imagem */}
        <div className="md:col-span-2">
          <div className="rounded-2xl bg-zinc-200 p-2 dark:bg-zinc-900">
            <VideoEmbed youtubeId={film.youtubeId} title={film.title} />
          </div>
          {film.synopsis ? (
            <section className="prose prose-zinc mt-6 max-w-none dark:prose-invert">
              <h2>Sinopse</h2>
              <p>{film.synopsis}</p>
            </section>
          ) : null}
        </div>

        {/* Coluna lateral: ficha curta */}
        <aside className="space-y-4">
          <div className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800">
            <h1 className="text-2xl font-bold">{film.title}</h1>
            <p className="mt-1 text-sm text-zinc-900 dark:text-zinc-800">
              {film.year ? `${film.year} • ` : ""}
              {film.director ? `Direção: ${film.director}` : ""}
            </p>
            {film.tags?.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {film.tags.map((t) => (
                  <span key={t} className="rounded-full border border-zinc-900 px-3 py-1 text-xs dark:border-zinc-800">
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
            {film.screeningAt ? (
              <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-900">
                Exibição: {new Date(film.screeningAt).toLocaleString("pt-BR")}
              </p>
            ) : null}
          </div>

          <a
            href={`https://www.youtube-nocookie.com/watch?v=${film.youtubeId}`}
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl bg-zinc-900 px-5 py-3 text-center text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Abrir no YouTube
          </a>
        </aside>
      </div>
    </main>
  );
}
