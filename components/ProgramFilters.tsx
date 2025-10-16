"use client";

import { useState } from "react";

type FilterType = 'todos' | 'mostra' | 'competicao';

interface ProgramFiltersProps {
  onFilterChange: (filter: FilterType) => void;
  activeFilter: FilterType;
}

export default function ProgramFilters({ onFilterChange, activeFilter }: ProgramFiltersProps) {
  return (
    <div className="mb-10 flex flex-wrap gap-3">
      <button
        onClick={() => onFilterChange('todos')}
        className={`rounded-full ${
          activeFilter === 'todos'
            ? 'bg-musgo text-bebe'
            : 'bg-bebe text-musgo border border-musgo/20'
        } px-4 py-2 text-sm font-medium transition-colors`}
      >
        Todas as Sessões
      </button>
      <button
        onClick={() => onFilterChange('mostra')}
        className={`rounded-full ${
          activeFilter === 'mostra'
            ? 'bg-musgo text-bebe'
            : 'bg-bebe text-musgo border border-musgo/20'
        } px-4 py-2 text-sm font-medium transition-colors`}
      >
        Mostra
      </button>
      <button
        onClick={() => onFilterChange('competicao')}
        className={`rounded-full ${
          activeFilter === 'competicao'
            ? 'bg-musgo text-bebe'
            : 'bg-bebe text-musgo border border-musgo/20'
        } px-4 py-2 text-sm font-medium transition-colors`}
      >
        Competição
      </button>
    </div>
  );
}