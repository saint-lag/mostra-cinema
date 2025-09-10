import Link from "next/link";
import { Film } from "@/content/films";

export default function Hero({ film }: { film: Film }) {
  const bg =
    film.thumbnail ?? `https://img.youtube.com/vi/${film.youtubeId}/hqdefault.jpg`;

  return (
    <section className="relative isolate">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
        aria-hidden
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />

      {/* Content */}
      <div className="mx-auto max-w-6xl px-4 py-32 text-white md:py-44 lg:py-52">
        <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
          {film.title}
        </h1>
        {film.synopsis ? (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed opacity-90 md:text-xl">
            {film.synopsis}
          </p>
        ) : null}

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href={`/filmes/${film.slug}`}
            className="rounded-full bg-white px-6 py-3 text-base font-medium text-zinc-900 shadow hover:bg-zinc-100"
          >
            Assistir agora
          </Link>
          <a
            href="#programacao"
            className="rounded-full border border-white/60 px-6 py-3 text-base font-medium hover:bg-white/10"
          >
            Ver programação
          </a>
        </div>
      </div>
    </section>
  );
}
