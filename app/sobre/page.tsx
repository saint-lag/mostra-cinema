import { films } from "@/content/films";
import MovieCard from "@/components/MovieCard";
import Hero from "@/components/Hero";
import FilmCard from "@/components/FilmCard";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Sobre - Mostra de Cinema de Caxias",
  description: "Filmes selecionados com exibição via YouTube.",
};

export default function HomePage() {
  const destaque = films[0];
  return (
    <>
      <section className="mx-auto max-w-screen-2xl px-4 py-12">
      <h2 className="mb-4 border-b border-zinc-300 pb-2 text-xl font-semibold">
        Filmes em Foco
      </h2>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
        {films.map((film) => (
          <FilmCard key={film.slug} film={film} />
        ))}
      </div>
    </section>

    </>
  );
}
