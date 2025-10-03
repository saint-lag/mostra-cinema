import { films } from "@/content/films";
import Hero from "@/components/Hero";
import FilmCard from "@/components/FilmCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mostra de Cinema",
  description: "Filmes selecionados com exibição via YouTube.",
  openGraph: {
    title: "Mostra de Cinema",
    description: "Seleção de filmes com exibição via YouTube.",
    type: "website",
  },
};

export default function HomePage() {
  const destaque = films[0];
  return (
    <>
      {destaque ? <Hero film={destaque}/> : null}
      
      <section className="mx-auto max-w-screen-2xl px-4 py-12">
        <h2 
          className="mb-8 border-b border-lima pb-3 px-5 text-musgo font-semibold"
          style={{ fontSize: "clamp(1.5rem, 1vw + 1rem, 1.8rem)" }}
        >
          Filmes em Destaque
        </h2>

        <div className="grid grid-cols-2 gap-6 px-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {films.map((film) => (
            <FilmCard key={film.slug} film={film} />
          ))}
        </div>
      </section>
    </>
  );
}
