import Link from "next/link";
import { Film } from "@/content/films";

export default function FilmCard({ film }: { film: Film }) {
  return (
    <article className="group overflow-hidden rounded-lg bg-white shadow hover:shadow-md transition">
      <Link href={`/filmes/${film.slug}`} className="block">
        {/* Thumbnail */}
        <div className="overflow-hidden">
          <img
            src={
              film.thumbnail ??
              `https://img.youtube.com/vi/${film.youtubeId}/hqdefault.jpg`
            }
            alt={film.title}
            className="aspect-video w-full object-cover transition duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Infos curtas */}
        <div className="p-3">
          <h3 className="line-clamp-1 text-sm font-semibold text-zinc-900">
            {film.title}
          </h3>
          <p className="mt-1 text-xs text-zinc-600">
            {film.year ? film.year : ""}
            {film.director ? ` • Dir. ${film.director}` : ""}
          </p>
        </div>
      </Link>
    </article>
  );
}
