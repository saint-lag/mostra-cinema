"use client";

import { useState } from "react";
import { Session } from "@/content/sessions";
import { Film } from "@/content/films";
import ProgramFilters from "@/components/ProgramFilters";
import Link from "next/link";

type ProgramaClientProps = {
  sessions: Session[];
  films: Film[];
  agruparPorData: (sessoes: Session[]) => Record<string, Session[]>;
  filtrarPorTipo: (sessoes: Session[], tipo: 'todos' | 'mostra' | 'competicao') => Session[];
};

export default function ProgramaClient({ 
  sessions, 
  films, 
  agruparPorData, 
  filtrarPorTipo 
}: ProgramaClientProps) {
  const [activeFilter, setActiveFilter] = useState<'todos' | 'mostra' | 'competicao'>('todos');
  
  // Filtrar sessões com base no filtro ativo
  const sessoesFiltradas = filtrarPorTipo(sessions, activeFilter);
  const sessoesPorData = agruparPorData(sessoesFiltradas);
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
      <ProgramFilters 
        activeFilter={activeFilter} 
        onFilterChange={setActiveFilter} 
      />

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
                            <Link href={`/filmes/${filme.slug}`} className="hover:text-terra">
                              {filme.titulo}
                            </Link>
                          </h3>
                          <div className="text-sm text-musgo/70 mt-1">
                            {filme.diretores && <span>{filme.diretores}</span>}
                            {filme.ano && <span> • {filme.ano}</span>}
                            {filme.duracao && <span> • {filme.duracao}</span>}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="text-musgo font-medium">{sessao.hora}</div>
                        <div className="text-sm text-musgo/70">{sessao.sala}</div>
                        <div className="mt-2">
                          <span className={`text-xs font-medium px-2 py-1 rounded ${
                            sessao.tipo === 'competicao' 
                              ? 'bg-terra/10 text-terra' 
                              : 'bg-lima/20 text-musgo'
                          }`}>
                            {sessao.tipo === 'competicao' ? 'Competição' : 'Mostra'}
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

        {datas.length === 0 && (
          <div className="text-center py-10 text-musgo/70">
            Não há sessões disponíveis para os filtros selecionados.
          </div>
        )}
      </div>
    </main>
  );
}