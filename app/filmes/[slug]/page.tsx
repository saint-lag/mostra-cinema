import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getFilms } from "@/content/films";
import VideoEmbed from "@/components/VideoEmbed";
import Link from "next/link";

export async function generateStaticParams() {
  const films = await getFilms();
  return films.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await props.params;
  const films = await getFilms();
  const metaFilm = films.find((f) => f.slug === slug);
  if (!metaFilm) return { title: "Filme não encontrado" };
  return {
    title: `${metaFilm.titulo} | Mostra de Cinema`,
    description: metaFilm.sinopse,
    openGraph: {
      title: metaFilm.titulo,
      description: metaFilm.sinopse,
      images: metaFilm.imagem ? [metaFilm.imagem] : undefined,
      type: "video.movie",
    },
  };
}

export default async function FilmPage(props: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await props.params;
  const filmFields = [
  ["diretores", "Diretores"],
  ["direcao", "Direção"],
  ["pais", "País"],
  ["ano", "Ano"],
  ["duracao", "Duração"],
  ["sinopse", "Sinopse"],
  ["imagem", "Imagem"],
  ["classificacao", "Classificação"],
  ["tags", "Tags"],
  ["youtubeId", "YouTube ID"],
  ["screeningAt", "Exibição"],
  ["cameras", "Câmeras"],
  ["som", "Som"],
  ["trilha", "Trilha Sonora"],
  ["producao", "Produção"],
  ["montagem", "Montagem"],
  ["edicao", "Edição"],
  ["elenco", "Elenco"],
  ["produtora", "Produtora"],
  ["arte", "Arte"],
  ["patrocinio", "Patrocínio"],
  ["apoio", "Apoio"],
  ["agradecimentos", "Agradecimentos"],
  ["stil", "Still"],
  ["makingOf", "Making Of"],
  ["narracao", "Narração"],
  ["animacao", "Animação"],
  ["maquiagem", "Maquiagem"],
  ["figurino", "Figurino"],
  ["cenografia", "Cenografia"],
  ["gaffer", "Gaffer"],
  ["logger", "Logger"],
  ["plato", "Platô"],
  ["microfone", "Microfone"],
  ["forografia", "Fotografia"], // parece um typo — deveria ser "fotografia"?
  ["roteiro", "Roteiro"],
  ["vfx", "VFX"],
  ["distribuicao", "Distribuição"]
];
  const films = await getFilms();
  const film = films.find((f) => f.slug === slug);
  if (!film) return notFound();

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <Link href="/" className="text-sm text-cipo hover:underline">&larr; Início</Link>

      <div className="mt-4 grid gap-8 md:grid-cols-3">
        {/* Coluna principal: player / imagem */}
        <div className="md:col-span-2">
          <div className="rounded-xl bg-lima/10 p-4">
            <VideoEmbed youtubeId={film.youtubeId} title={film.titulo} />
          </div>
          {film.sinopse ? (
            <section className="mt-8">
              <h2 className="mb-4 text-xl font-semibold text-musgo border-b border-lima pb-2">Sinopse</h2>
              <p className="text-musgo/90 leading-relaxed">{film.sinopse}</p>
            </section>
          ) : null}
        </div>

        {/* Coluna lateral: ficha técnica */}
        <aside className="space-y-6">
          <div className="rounded-xl border border-lima/40 p-6 bg-bebe/30">
            <h1 
              className="text-terra font-bold"
              style={{ fontSize: "clamp(1.5rem, 1vw + 1rem, 2rem)" }}
            >
              {film.titulo}
            </h1>
            
            {film.classificacao && (
              <div className="mt-3">
                <span className="inline-block rounded bg-terra px-2 py-1 text-sm font-bold text-white">
                  {film.classificacao}
                </span>
              </div>
            )}
            
            <div className="mt-4 space-y-2 text-musgo">
              {film.ano && (
                <p><span className="font-semibold">Ano:</span> {film.ano}</p>
              )}
              {film.diretores && (
                <p><span className="font-semibold">Direção:</span> {film.diretores}</p>
              )}
              {film.pais && (
                <p><span className="font-semibold">Distrito:</span> {film.pais}</p>
              )}
              {film.duracao && (
                <p><span className="font-semibold">Duração:</span> {film.duracao}</p>
              )}
              {film.diretores ? (
  <p><span className="font-semibold">Diretores:</span> {film.diretores}</p>
) : null}

{film.direcao ? (
  <p><span className="font-semibold">Direção:</span> {film.direcao}</p>
) : null}

{film.pais ? (
  <p><span className="font-semibold">País:</span> {film.pais}</p>
) : null}

{film.ano ? (
  <p><span className="font-semibold">Ano:</span> {film.ano}</p>
) : null}

{film.duracao ? (
  <p><span className="font-semibold">Duração:</span> {film.duracao}</p>
) : null}

{film.sinopse ? (
  <p><span className="font-semibold">Sinopse:</span> {film.sinopse}</p>
) : null}

{film.imagem ? (
  <p><span className="font-semibold">Imagem:</span> {film.imagem}</p>
) : null}

{film.classificacao ? (
  <p><span className="font-semibold">Classificação:</span> {film.classificacao}</p>
) : null}

{film.tags ? (
  <p><span className="font-semibold">Tags:</span> {film.tags.join(", ")}</p>
) : null}

{film.youtubeId ? (
  <p><span className="font-semibold">YouTube ID:</span> {film.youtubeId}</p>
) : null}

{film.screeningAt ? (
  <p><span className="font-semibold">Exibição:</span> {film.screeningAt}</p>
) : null}

{film.cameras ? (
  <p><span className="font-semibold">Câmeras:</span> {film.cameras}</p>
) : null}

{film.som ? (
  <p><span className="font-semibold">Som:</span> {film.som}</p>
) : null}

{film.trilha ? (
  <p><span className="font-semibold">Trilha Sonora:</span> {film.trilha}</p>
) : null}

{film.producao ? (
  <p><span className="font-semibold">Produção:</span> {film.producao}</p>
) : null}

{film.montagem ? (
  <p><span className="font-semibold">Montagem:</span> {film.montagem}</p>
) : null}

{film.edicao ? (
  <p><span className="font-semibold">Edição:</span> {film.edicao}</p>
) : null}

{film.elenco ? (
  <p><span className="font-semibold">Elenco:</span> {film.elenco}</p>
) : null}

{film.produtora ? (
  <p><span className="font-semibold">Produtora:</span> {film.produtora}</p>
) : null}

{film.arte ? (
  <p><span className="font-semibold">Arte:</span> {film.arte}</p>
) : null}

{film.patrocinio ? (
  <p><span className="font-semibold">Patrocínio:</span> {film.patrocinio}</p>
) : null}

{film.apoio ? (
  <p><span className="font-semibold">Apoio:</span> {film.apoio}</p>
) : null}

{film.agradecimentos ? (
  <p><span className="font-semibold">Agradecimentos:</span> {film.agradecimentos}</p>
) : null}

{film.still ? (
  <p><span className="font-semibold">Still:</span> {film.still}</p>
) : null}

{film.makingOf ? (
  <p><span className="font-semibold">Making Of:</span> {film.makingOf}</p>
) : null}

{film.narracao ? (
  <p><span className="font-semibold">Narração:</span> {film.narracao}</p>
) : null}

{film.animacao ? (
  <p><span className="font-semibold">Animação:</span> {film.animacao}</p>
) : null}

{film.maquiagem ? (
  <p><span className="font-semibold">Maquiagem:</span> {film.maquiagem}</p>
) : null}

{film.figurino ? (
  <p><span className="font-semibold">Figurino:</span> {film.figurino}</p>
) : null}

{film.cenografia ? (
  <p><span className="font-semibold">Cenografia:</span> {film.cenografia}</p>
) : null}

{film.gaffer ? (
  <p><span className="font-semibold">Gaffer:</span> {film.gaffer}</p>
) : null}

{film.logger ? (
  <p><span className="font-semibold">Logger:</span> {film.logger}</p>
) : null}

{film.plato ? (
  <p><span className="font-semibold">Platô:</span> {film.plato}</p>
) : null}

{film.microfone ? (
  <p><span className="font-semibold">Microfone:</span> {film.microfone}</p>
) : null}

{film.fotografia ? (
  <p><span className="font-semibold">Fotografia:</span> {film.fotografia}</p>
) : null}

{film.roteiro ? (
  <p><span className="font-semibold">Roteiro:</span> {film.roteiro}</p>
) : null}

{film.vfx ? (
  <p><span className="font-semibold">VFX:</span> {film.vfx}</p>
) : null}

{film.distribuicao ? (
  <p><span className="font-semibold">Distribuição:</span> {film.distribuicao}</p>
) : null}

            </div>
            
            {film.tags?.length ? (
              <div className="mt-4">
                <p className="text-sm font-semibold mb-2 text-musgo">Categorias:</p>
                <div className="flex flex-wrap gap-2">
                  {film.tags.map((t) => (
                    <span key={t} className="rounded-full bg-lima/50 px-3 py-1 text-xs text-musgo">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
            
            {film.screeningAt ? (
              <div className="mt-4 p-3 bg-lima/20 rounded-lg">
                <p className="text-sm font-semibold text-musgo">Exibição:</p>
                <p className="text-cipo">
                  {new Date(film.screeningAt).toLocaleString("pt-BR", {
                    dateStyle: "long",
                    timeStyle: "short"
                  })}
                </p>
              </div>
            ) : null}
          </div>

         
        </aside>
      </div>
    </main>
  );
}
