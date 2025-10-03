import Link from "next/link";
import { Film } from "@/content/films";
import Image from "next/image";

export default function FilmCard({ film }: { film: Film }) {
  return (
    <article className="group overflow-hidden rounded-lg bg-white shadow hover:shadow-md transition">
      <Link href={`/filmes/${film.slug}`} className="block">
        {/* Imagem */}
        <div className="overflow-hidden">
          <img
            src={
              film.imagem ??
              `https://img.youtube.com/vi/${film.youtubeId}/hqdefault.jpg`
            }
            alt={film.titulo}
            className="aspect-video w-full object-cover transition duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Infos curtas */}
        <div className="p-3">
          <h3 className="line-clamp-1 text-sm font-semibold text-terra">
            {film.titulo}
          </h3>
          <p className="mt-1 text-xs text-musgo">
            {film.ano ? film.ano : ""}
            {film.diretores ? ` • Dir. ${film.diretores}` : ""}
          </p>
          {film.classificacao && (
            <span className="mt-2 inline-block rounded bg-lima px-1.5 py-0.5 text-xs font-bold text-musgo">
              {film.classificacao}
            </span>
          )}
        </div>
      </Link>
    </article>
  );
}
