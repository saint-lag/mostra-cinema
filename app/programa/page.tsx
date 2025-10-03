import { films } from "@/content/films";
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

export default function ProgramaPage() {
  const sessoesPorData = agruparPorData(sessions);
  const datas = Object.keys(sessoesPorData).sort();

  // Função para formatar a data
  const formatarData = (dataStr: string) => {
    const data = new Date(dataStr);
    return data.toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-8">
        <h1 
          className="text-terra font-bold mb-2"
          style={{ fontSize: "clamp(2rem, 3vw + 1rem, 3rem)" }}
        >
          Programação
        </h1>
        <p className="text-musgo max-w-3xl">
          Confira abaixo todas as sessões da Mostra de Cinema. 
          As exibições ocorrem em diferentes locais e horários.
          Clique em um filme para mais detalhes.
        </p>
      </div>

      {/* Filtros */}
      <div className="mb-10 flex flex-wrap gap-3">
        <button className="rounded-full bg-musgo text-bebe px-4 py-2 text-sm font-medium">
          Todas as Sessões
        </button>
        <button className="rounded-full bg-bebe text-musgo border border-musgo/20 px-4 py-2 text-sm font-medium">
          Mostra
        </button>
        <button className="rounded-full bg-bebe text-musgo border border-musgo/20 px-4 py-2 text-sm font-medium">
          Competição
        </button>
      </div>

      {/* Programação por dia */}
      <div className="space-y-12">
        {datas.map((data) => (
          <section key={data} className="border-t border-lima/30 pt-6">
            <h2 className="text-xl font-semibold text-terra mb-6">
              {formatarData(data)}
            </h2>

            <div className="space-y-4">
              {sessoesPorData[data].map((sessao) => {
                const filme = films.find(f => f.slug === sessao.filmeSlug);
                if (!filme) return null;

                return (
                  <div 
                    key={sessao.id}
                    className="bg-bebe/40 rounded-lg p-5 hover:bg-bebe transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-16 h-16 bg-musgo/10 rounded overflow-hidden">
                          {filme.imagem && (
                            <img 
                              src={filme.imagem} 
                              alt={filme.titulo} 
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                        <div>
                          <h3 className="font-medium text-musgo">
                            <Link 
                              href={`/filmes/${filme.slug}`}
                              className="hover:text-terra transition-colors"
                            >
                              {filme.titulo}
                            </Link>
                          </h3>
                          <p className="text-sm text-musgo/80">
                            {filme.diretores} • {filme.duracao}
                            {filme.classificacao && (
                              <span className="ml-2 inline-block bg-terra text-white rounded px-1 text-xs">
                                {filme.classificacao}
                              </span>
                            )}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-cipo mr-2"></span>
                          <span>{sessao.hora}</span>
                        </div>
                        <div>
                          <span className="text-musgo/80">{sessao.sala}</span>
                        </div>
                        <div>
                          <span className="px-2 py-1 bg-lima/30 rounded text-xs uppercase">
                            {sessao.tipo}
                          </span>
                          <span className="ml-2 px-2 py-1 bg-lima/20 rounded text-xs">
                            {sessao.idioma}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
