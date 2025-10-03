import Link from "next/link";
import { Film } from "@/content/films";

export default function HeroProg({ film }: { film: Film }) {
  const bg =
    film.thumbnailB ?? `https://img.youtube.com/vi/${film.youtubeId}/hqdefault.jpg`;

  return (
    <section className="bg-white">
      {/* Imagem grande */}
      <div
        className="h-[5vh] min-h-[420px] bg-cover "
        style={{ backgroundImage: `url(${bg})` }}
      />

      {/* Bloco branco com título e ficha */}
      <div className="mx-auto max-w-screen-2xl px-10 py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">
              {film.title}
            </h1>
            <p className="mt-2 text-sm text-zinc-600">
              {film.director ? `Directed by ${film.director}` : ""}
              {film.year ? ` • ${film.year}` : ""}
              {film.tags?.length ? ` • ${film.tags.join(", ")}` : ""}
            </p>
          </div>

          <Link
            href={`/filmes/${film.slug}`}
            className="rounded border border-zinc-400 px-4 py-2 text-sm font-medium hover:bg-zinc-100"
          >
            ▶ Assista
          </Link>
        </div>
      </div>
    </section>
  );
}
