export type Film = {
    slug: string;
    title: string;
    year?: number;
    director?: string;
    synopsis?: string;
    // ID do vídeo no YouTube (ex: https://www.youtube.com/watch?v=VIDEO_ID)
    youtubeId: string;
    // tags/mostra/programação, se quiser exibir filtros depois
    tags?: string[];
    // opcional: data/hora de exibição
    screeningAt?: string; // ISO string
    thumbnail?: string;   // opcional: capa (usada na listagem)
  };
  
  export const films: Film[] = [
    {
      slug: "um-classico",
      title: "Um Clássico",
      year: 1979,
      director: "Fulana de Tal",
      synopsis:
        "Uma viagem poética através do tempo e memória, acompanhando a história de uma família.",
      youtubeId: "dQw4w9WgXcQ",
      tags: ["drama", "clássico"],
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      screeningAt: "2025-09-05T19:30:00-03:00",
    },
    {
      slug: "documentario-raro",
      title: "Documentário Raro",
      year: 2003,
      director: "Ciclano",
      synopsis:
        "Registro histórico de um movimento cultural esquecido, com imagens inéditas.",
      youtubeId: "9bZkp7q19f0",
      tags: ["documentário"],
      thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg",
      screeningAt: "2025-09-06T18:00:00-03:00",
    },
  ];
  