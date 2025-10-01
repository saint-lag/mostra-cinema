import Link from "next/link";
import { Film } from "@/content/films";

export default function Hero() {
  const bg = `public/img/foto_perfil.svg`;

  return (
    <section className="bg-white">
      {/* Imagem grande */}
      <div
        className="min-h-[420px] bg-cover bg-no-repeat min-h-[110vh]"
        style={{ backgroundImage: "url('/img/foto_perfil.svg')", backgroundPosition: "center" }}
      />

      {/* Bloco branco com título e ficha */}
      <div className="mx-auto max-w-screen-2xl px-4 py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          {/* <div>
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
          </Link>*/}
        </div> 
      </div>
    </section>
  );
}
