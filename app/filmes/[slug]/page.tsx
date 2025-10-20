import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { films } from "@/content/films";
import VideoEmbed from "@/components/VideoEmbed";
import Link from "next/link";

export function generateStaticParams() {
  return films.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await props.params;
  const metaFilm = films.find((f) => f.slug === slug);
  if (!metaFilm) return { title: "Filme não encontrado" };
  return {
    title: `${metaFilm.titulo} | Mostra de Cinema`,
    description: metaFilm.sinopse,
    openGraph: {
      title: metaFilm.titulo,
      description: metaFilm.sinopse,
      images: metaFilm.imagem ? [metaFilm.imagem] : undefined,
      type: "video.movie",
    },
  };
}

export default async function FilmPage(props: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await props.params;
  const film = films.find((f) => f.slug === slug);
  if (!film) return notFound();

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <Link href="/" className="text-sm text-cipo hover:underline">&larr; Início</Link>

      <div className="mt-4 grid gap-8 md:grid-cols-3">
        {/* Coluna principal: player / imagem */}
        <div className="md:col-span-2">
          <div className="rounded-xl bg-lima/10 p-4">
            <VideoEmbed youtubeId={film.youtubeId} title={film.titulo} />
          </div>
          {film.sinopse ? (
            <section className="mt-8">
              <h2 className="mb-4 text-xl font-semibold text-musgo border-b border-lima pb-2">Sinopse</h2>
              <p className="text-musgo/90 leading-relaxed">{film.sinopse}</p>
            </section>
          ) : null}
        </div>

        {/* Coluna lateral: ficha técnica */}
        <aside className="space-y-6">
          <div className="rounded-xl border border-lima/40 p-6 bg-bebe/30">
            <h1 
              className="text-terra font-bold"
              style={{ fontSize: "clamp(1.5rem, 1vw + 1rem, 2rem)" }}
            >
              {film.titulo}
            </h1>
            
            {film.classificacao && (
              <div className="mt-3">
                <span className="inline-block rounded bg-terra px-2 py-1 text-sm font-bold text-white">
                  {film.classificacao}
                </span>
              </div>
            )}
            
            <div className="mt-4 space-y-2 text-musgo">
              {film.ano && (
                <p><span className="font-semibold">Ano:</span> {film.ano}</p>
              )}
              {film.diretores && (
                <p><span className="font-semibold">Direção:</span> {film.diretores}</p>
              )}
              {film.pais && (
                <p><span className="font-semibold">País:</span> {film.pais}</p>
              )}
              {film.duracao && (
                <p><span className="font-semibold">Duração:</span> {film.duracao}</p>
              )}
            </div>
            
            {film.tags?.length ? (
              <div className="mt-4">
                <p className="text-sm font-semibold mb-2 text-musgo">Categorias:</p>
                <div className="flex flex-wrap gap-2">
                  {film.tags.map((t) => (
                    <span key={t} className="rounded-full bg-lima/50 px-3 py-1 text-xs text-musgo">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
            
            {film.screeningAt ? (
              <div className="mt-4 p-3 bg-lima/20 rounded-lg">
                <p className="text-sm font-semibold text-musgo">Exibição:</p>
                <p className="text-cipo">
                  {new Date(film.screeningAt).toLocaleString("pt-BR", {
                    dateStyle: "long",
                    timeStyle: "short"
                  })}
                </p>
              </div>
            ) : null}
          </div>

          <a
            href={`https://www.youtube-nocookie.com/watch?v=${film.youtubeId}`}
            target="_blank"
            rel="noreferrer"
            className="block rounded-xl bg-cipo px-5 py-3 text-center text-sm font-medium text-white hover:bg-cipo/90 transition-colors"
          >
            Assistir no YouTube
          </a>
        </aside>
      </div>
    </main>
  );
}
