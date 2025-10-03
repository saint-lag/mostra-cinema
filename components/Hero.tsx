import Link from "next/link";
import { Film } from "@/content/films";

export default function HeroProg({ film }: { film: Film }) {
  const bg = film.imagem ?? `https://img.youtube.com/vi/${film.youtubeId}/maxresdefault.jpg`;

  return (
    <section className="bg-bebe">
      {/* Imagem grande */}
      <div
        className="h-[5vh] min-h-[420px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      />

      {/* Bloco com título e ficha */}
      <div className="mx-auto max-w-screen-2xl px-10 py-10 bg-gradient-to-r from-musgo/10 to-lima/10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h1 
              className="text-4xl font-bold tracking-tight text-terra md:text-5xl"
              style={{ fontSize: "clamp(1.75rem, 2vw + 1rem, 2.5rem)" }}
            >
              {film.titulo}
            </h1>
            <p className="mt-2 text-sm text-musgo">
              {film.diretores ? `Direção: ${film.diretores}` : ""}
              {film.ano ? ` • ${film.ano}` : ""}
              {film.pais ? ` • ${film.pais}` : ""}
              {film.duracao ? ` • ${film.duracao}` : ""}
            </p>
            {film.tags?.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {film.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-lima/50 px-3 py-1 text-xs text-musgo">
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
            {film.classificacao && (
              <span className="mt-4 inline-block rounded bg-terra px-2 py-1 text-sm font-bold text-white">
                {film.classificacao}
              </span>
            )}
          </div>

          <Link
            href={`/filmes/${film.slug}`}
            className="rounded bg-cipo text-white px-6 py-3 text-sm font-medium hover:bg-cipo/90 transition-colors"
          >
            ▶ Assista Agora
          </Link>
        </div>
      </div>
    </section>
  );
}
