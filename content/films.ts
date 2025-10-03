export type Film = {
    slug: string;
    titulo: string;
    diretores?: string;
    pais?: string;
    ano?: number;
    duracao?: string;
    sinopse?: string;
    imagem?: string;
    classificacao?: string;
    tags?: string[];
    // ID do vídeo no YouTube (ex: https://www.youtube.com/watch?v=VIDEO_ID)
    youtubeId: string;
    // opcional: data/hora de exibição
    screeningAt?: string; // ISO string
  };
  
export type Session = {
    data: string; // ISO string
    hora: string;
    sala: string;
    filmeSlug: string;
    tipo: 'mostra' | 'competicao';
    idioma: 'legendado' | 'dublado';
  };
  
  export const films: Film[] = [
    {
      slug: "queer",
      titulo: "QUEER",
      ano: 2025,
      diretores: "Luca Guadagnino",
      pais: "EUA",
      duracao: "131 min",
      sinopse:
        "Lee, um americano solitário na Cidade do México, se apaixona por um ex-soldado belo e elusivo. Viajando juntos pela selva, Lee vê, pela primeira vez, a possibilidade de um amor íntimo e infinito.",
      youtubeId: "s18Cu1NqX78",
      tags: ["drama", "lgbt"],
      imagem: "https://img.youtube.com/vi/s18Cu1NqX78/hqdefault.jpg",
      classificacao: "18",
      screeningAt: "2025-09-05T19:30:00-03:00",
    },
    {
      slug: "bleu",
      titulo: "Três Cores: Azul",
      ano: 1993,
      diretores: "Krzysztof Kieślowski",
      pais: "França",
      duracao: "98 min",
      sinopse:
        "Após Julie perder sua filha e seu marido, um famoso compositor, em um acidente de carro, ela tenta se afastar do mundo ao seu redor. Mas a vida e a música a trazem de volta e a curam.",
      youtubeId: "cVaqLZmMf-k",
      tags: ["drama"],
      imagem: "https://assets.mubicdn.net/images/film/414/image-w1280.jpg?1745490957",
      classificacao: "14",
      screeningAt: "",
    },
    {
      slug: "blanc",
      titulo: "Três Cores: Branco",
      ano: 1994,
      diretores: "Krzysztof Kieślowski",
      pais: "França, Polônia",
      duracao: "91 min",
      sinopse:
        "Após se divorciar e perder seu emprego, junto com sua residência legal na França, um imigrante polonês começa a reconstruir sua vida enquanto planeja um elaborado esquema de vingança contra sua ex-esposa.",
      youtubeId: "xECEAPfdqic",
      tags: ["comédia", "romance"],
      imagem: "https://assets.mubicdn.net/images/film/413/image-w1280.jpg?1745490867",
      classificacao: "14",
      screeningAt: "",
    },
    {
      slug: "rouge",
      titulo: "Três Cores: Vermelho",
      ano: 1994,
      diretores: "Krzysztof Kieślowski",
      pais: "França, Suíça",
      duracao: "99 min",
      sinopse:
        "Vermelho explora relacionamentos entre Valentine, uma modelo que quase atropela um cachorro, um juiz aposentado que espiona seus vizinhos e alguns outros que não sabem como estão conectados a tudo isso.",
      youtubeId: "h8NU3EYTbFg",
      tags: ["romance", "mistério"],
      imagem: "https://images.mubicdn.net/images/film/412/cache-47312-1745490939/image-w1280.jpg?size=800x",
      classificacao: "14",
      screeningAt: "",
    },
    {
      slug: "megalopolis",
      titulo: "MEGALOPOLIS",
      ano: 2024,
      diretores: "Francis Ford Coppola",
      pais: "EUA",
      duracao: "138 min",
      sinopse:
        "Projeto de paixão de Francis Ford Coppola, 40 anos em desenvolvimento, segue um arquiteto ambicioso sonhando em transformar a Big Apple em uma utopia. Esta espetacular obra de ficção científica é um trabalho de visão e ambição extraordinárias, com um elenco estelar incluindo Adam Driver, Aubrey Plaza, Laurence Fishburne, Giancarlo Esposito e Jason Schwartzman.",
      youtubeId: "WVZd5b--U6w",
      tags: ["ficção científica"],
      imagem: "https://img.youtube.com/vi/WVZd5b--U6w/hqdefault.jpg",
      classificacao: "16",
      screeningAt: "2025-09-06T18:00:00-03:00",
    }
    
  ];
  