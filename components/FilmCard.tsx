import Link from "next/link";
import { Film } from "@/content/films";
import Image from "next/image";

const PLACEHOLDER_POSTER = "/img/Logo_1.png";
const IMAGE_UNOPTIMIZED =
  process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true";

export default function FilmCard({ film }: { film: Film }) {
  const posterSrc =
    film.imagem ??
    (film.youtubeId
      ? `https://img.youtube.com/vi/${film.youtubeId}/hqdefault.jpg`
      : PLACEHOLDER_POSTER);

  return (
    <article className="group overflow-hidden rounded-lg bg-white shadow transition hover:shadow-md">
      <Link href={`/filmes/${film.slug}`} className="block">
        {/* Imagem */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={posterSrc}
            alt={film.titulo}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
            sizes="(min-width: 1280px) 18vw, (min-width: 1024px) 22vw, (min-width: 768px) 28vw, (min-width: 640px) 42vw, 90vw"
            unoptimized={IMAGE_UNOPTIMIZED}
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
