import Link from "next/link";
import { Film } from "@/content/films";

export default function MovieCard({ film }: { film: Film }) {
  return (
    <article className="group rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md ">
      <Link href={`/filmes/${film.slug}`} className="block">
        <div className="overflow-hidden rounded-xl">
          <img
            src={`https://img.youtube.com/vi/${film.youtubeId}/hqdefault.jpg`}
            alt={film.titulo}
            className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <h3 className="mt-3 text-lg font-semibold">
          {film.titulo} {film.ano ? `(${film.ano})` : ""}
        </h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
          {film.sinopse}
        </p>
        {film.diretores ? (
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            Direção: {film.diretores}
          </p>
        ) : null}
        {film.screeningAt ? (
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            Exibição: {new Date(film.screeningAt).toLocaleString("pt-BR")}
          </p>
        ) : null}
      </Link>
    </article>
  );
}
