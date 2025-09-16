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
      slug: "queer",
      title: "QUEER",
      year: 1979,
      director: "QUEER ",
      synopsis:
        "Lee, a solitary American in Mexico City, falls for a beautiful, elusive former soldier. Journeying together into the jungle, Lee sees, for the first time, the possibility of an intimate and infinite love.",
      youtubeId: "s18Cu1NqX78",
      tags: ["drama", "lgbt"],
      thumbnail: "https://img.youtube.com/vi/s18Cu1NqX78/hqdefault.jpg",
      screeningAt: "2025-09-05T19:30:00-03:00",
    },
    {
      slug: "megalopolis",
      title: "MEGALOPOLIS ",
      year: 2003,
      director: "Francis Ford Coppola",
      synopsis:
        "Francis Ford Coppola’s passion project, 40 years in the making, follows an upstart architect dreaming of turning the Big Apple into a utopia. This spectacular sci-fi opus is a work of extraordinary vision and ambition, featuring an all-star cast including Adam Driver, Aubrey Plaza, Laurence Fishburne, Giancarlo Esposito and Jason Schwartzman.",
      youtubeId: "WVZd5b--U6w",
      tags: ["sci-fi"],
      thumbnail: "https://img.youtube.com/vi/WVZd5b--U6w/hqdefault.jpg",
      screeningAt: "2025-09-06T18:00:00-03:00",
    },
  ];
  