export type Session = {
  id: string;
  data: string; // ISO string
  hora: string;
  sala: string;
  filmeSlug: string;
  tipo: 'mostra' | 'competicao';
  idioma: 'legendado' | 'dublado';
};

export const sessions: Session[] = [
  {
    id: "s1",
    data: "2025-09-05",
    hora: "19:30",
    sala: "Sala 1 - Cinema Municipal",
    filmeSlug: "queer",
    tipo: "mostra",
    idioma: "legendado"
  },
  {
    id: "s2",
    data: "2025-09-06",
    hora: "18:00",
    sala: "Sala 1 - Cinema Municipal",
    filmeSlug: "megalopolis",
    tipo: "mostra",
    idioma: "legendado"
  },
  {
    id: "s3",
    data: "2025-09-06",
    hora: "20:30",
    sala: "Sala 2 - Centro Cultural",
    filmeSlug: "bleu",
    tipo: "competicao",
    idioma: "legendado"
  },
  {
    id: "s4",
    data: "2025-09-07",
    hora: "16:00",
    sala: "Sala 2 - Centro Cultural",
    filmeSlug: "blanc",
    tipo: "competicao",
    idioma: "legendado"
  },
  {
    id: "s5",
    data: "2025-09-07",
    hora: "18:30",
    sala: "Sala 1 - Cinema Municipal",
    filmeSlug: "rouge",
    tipo: "competicao",
    idioma: "legendado"
  }
];