import { getFilms } from "@/content/films";
import { sessions, Session } from "@/content/sessions";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programação - Mostra de Cinema",
  description: "Confira a programação completa da Mostra de Cinema",
};

// Agrupar sessões por data
function agruparPorData(sessoes: Session[]) {
  const grupos = sessoes.reduce((acc: Record<string, Session[]>, session: Session) => {
    if (!acc[session.data]) {
      acc[session.data] = [];
    }
    acc[session.data].push(session);
    return acc;
  }, {} as Record<string, Session[]>);

  // Ordenar as sessões dentro de cada data por horário
  Object.keys(grupos).forEach(data => {
    grupos[data].sort((a: Session, b: Session) => a.hora.localeCompare(b.hora));
  });

  return grupos;
}

export default async function ProgramaPage() {
  const grupos = agruparPorData(sessions);
  const films = await getFilms();

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-6 text-4xl font-bold">Programação</h1>

      <div className="space-y-8">
        {Object.entries(grupos).map(([data, sessoes]) => {
          const dataFormatada = new Date(data).toLocaleDateString('pt-BR', {
            weekday: 'long',
            day: 'numeric',
            month: 'long'
          });

          return (
            <div key={data}>
              <h2 className="mb-4 text-2xl font-semibold capitalize">{dataFormatada}</h2>
              <div className="divide-y divide-gray-100">
                {sessoes.map((sessao) => {
                  const filme = films.find(f => f.slug === sessao.filmeSlug);
                  
                  if (!filme) return null;

                  return (
                    <div key={`${sessao.data}-${sessao.hora}-${filme.slug}`} className="py-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <Link href={`/filmes/${filme.slug}`} className="text-lg font-medium hover:underline">
                            {filme.titulo}
                          </Link>
                          <p className="text-sm text-gray-600">{sessao.sala} - {sessao.idioma}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{sessao.hora}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );}
