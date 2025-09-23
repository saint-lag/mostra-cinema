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
    thumbnailB?: string; // Big 
  };
  
  export const films: Film[] = [
    {
      slug: "queer",
      title: "QUEER",
      year: 2025,
      director: "Luca Guadagnino ",
      synopsis:
        "Lee, a solitary American in Mexico City, falls for a beautiful, elusive former soldier. Journeying together into the jungle, Lee sees, for the first time, the possibility of an intimate and infinite love.",
      youtubeId: "s18Cu1NqX78",
      tags: ["drama", "lgbt"],
      thumbnailB: "https://images.squarespace-cdn.com/content/v1/60455d6a513f6b5c4dccdb4c/a7e00972-f8a9-4b36-b1b5-6fedef30e0a4/queer.jpg",
      thumbnail: "https://img.youtube.com/vi/s18Cu1NqX78/hqdefault.jpg",
      screeningAt: "2025-09-05T19:30:00-03:00",
    },
    {
      slug: "bleu",
      title: "Trois Couleurs : Bleu",
      year: 1993,
      director: "Krzysztof Kieślowski ",
      synopsis:
        "After Julie loses her daughter and her husband, a famous composer, in a car accident, she tries to remove herself from the world around her. But life and music brings her back and heals her.",
      youtubeId: "cVaqLZmMf-k",
      tags: ["drama"],
      thumbnailB: "",
      thumbnail: "https://assets.mubicdn.net/images/film/414/image-w1280.jpg?1745490957",
      screeningAt: "",
    },
    {
      slug: "blanc",
      title: "Trois coleurs : Blanc",
      year: 1994,
      director: "Krzysztof Kieślowski ",
      synopsis:
        "After getting divorced and losing his job, along with his legal residency in France, a Polish immigrant begins to rebuild his life while plotting an elaborate revenge scheme against his former wife.",
      youtubeId: "xECEAPfdqic",
      tags: ["comedy", "romance"],
      thumbnailB: "",
      thumbnail: "https://assets.mubicdn.net/images/film/413/image-w1280.jpg?1745490867",
      screeningAt: "",
    },
    {
      slug: "rouge",
      title: "Trois Couleurs : Rouge ",
      year: 1994,
      director: "Krzysztof Kieślowski",
      synopsis:
        "Red explores relationships between Valentine, a model who almost runs over a dog, a retired judge who spies on his neighbours' and a few others who are unaware of how they're connected to all of this.",
      youtubeId: "h8NU3EYTbFg",
      tags: ["romance", "mistery"],
      thumbnail: "https://images.mubicdn.net/images/film/412/cache-47312-1745490939/image-w1280.jpg?size=800x",
      screeningAt: "",
    },
    {
      slug: "megalopolis",
      title: "MEGALOPOLIS ",
      year: 2024,
      director: "Francis Ford Coppola",
      synopsis:
        "Francis Ford Coppola’s passion project, 40 years in the making, follows an upstart architect dreaming of turning the Big Apple into a utopia. This spectacular sci-fi opus is a work of extraordinary vision and ambition, featuring an all-star cast including Adam Driver, Aubrey Plaza, Laurence Fishburne, Giancarlo Esposito and Jason Schwartzman.",
      youtubeId: "WVZd5b--U6w",
      tags: ["sci-fi"],
      thumbnail: "https://img.youtube.com/vi/WVZd5b--U6w/hqdefault.jpg",
      screeningAt: "2025-09-06T18:00:00-03:00",
    }
    
  ];
  