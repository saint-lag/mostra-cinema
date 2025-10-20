// URLs das imagens no Vercel Blob
const BLOB_BASE_URL = 'https://public.blob.vercel-storage.com';

const posterUrls = {
  corDoCinema: `${BLOB_BASE_URL}/a-cor-do-cinema/A%20Cor%20do%20Cinema_Cartaz.png`,
  aRoda: `${BLOB_BASE_URL}/a-roda/A%20RODA%20(1).png`,
  cheia: `${BLOB_BASE_URL}/cheia/thumb.jpg`,
  destinoTracado: `${BLOB_BASE_URL}/destino/CART%20DEST%20TRAÇADO%20NOVO.jpg`,
  doneConceicao: `${BLOB_BASE_URL}/done/IMG_2098.jpg`,
  emNomeDaMae: `${BLOB_BASE_URL}/em-nome-da-mae/EM%20NOME%20DA%20MÃE.png`,
  inComodo: `${BLOB_BASE_URL}/in-comodo/in-comodo.png`,
  metaverso: `${BLOB_BASE_URL}/metaverso-em-desencanto/IMG_9726.PNG`,
  naRisca: `${BLOB_BASE_URL}/na-risca/na-risca.jpg`,
  sobreNos: `${BLOB_BASE_URL}/sobre-nos/Poster%20Sobre%20Nós.png`,
  tempestades: `${BLOB_BASE_URL}/tempestades/tempestade.jpeg`,
  umaMenina: `${BLOB_BASE_URL}/uma-menina-duas-mulheres-e-muitas-historias/uma-menina-duas-mulheres-e-muitas-historias.JPG`
};

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
      slug: "a-cor-do-cinema",
      titulo: "A COR DO CINEMA",
      diretores: "Mica Lopes e Vio Anchieta",
      pais: "Brasil",
      classificacao: "Livre",
      youtubeId: "",
      sinopse: "Em um setor historicamente dominado por pessoas brancas, onde estão os profissionais negros do cinema? A Cor do Cinema é um testemunho emocionante da força transformadora das histórias que contamos e das pessoas extraordinárias que as tornam possíveis.",
      imagem: posterUrls.corDoCinema,
    },
    {
      slug: "a-roda",
      titulo: "A RODA",
      diretores: "Guilherme Rodrigues",
      pais: "Brasil",
      classificacao: "Livre",
      youtubeId: "",
      sinopse: "Um dia após o outro, até um dia se tornar o outro.",
      imagem: posterUrls.aRoda,
      screeningAt: "2025-09-06T18:00:00-03:00",
      ano: 2024,
    },
    {
      slug: "cheia",
      titulo: "CHEIA",
      diretores: "Wayner Tristão",
      pais: "Brasil",
      classificacao: "Livre",
      youtubeId: "",
      sinopse: "As últimas cheias marcadas na parede medem a velocidade da vida. Lavando imagens e derretendo certezas.",
      imagem: posterUrls.cheia,
    },
    {
      slug: "destino-tracado",
      titulo: "DESTINO TRAÇADO",
      diretores: "Caio Berc",
      pais: "Brasil",
      classificacao: "Livre",
      youtubeId: "",
      sinopse: 'Mariana, uma jovem de 25 anos da Baixada Fluminense, vive uma rotina desgastante de currículos enviados e entrevistas sem sentido. Em meio à ansiedade e à pressão por "dar certo", ela sente que algo essencial está faltando — até que um sonho misterioso de sua avó, Dona Zelma, a leva até Mãe Tereza, uma taróloga cigana que vive em uma Kombi encantada.',
      imagem: posterUrls.destinoTracado,
    },
    {
      slug: "done-conceicao",
      titulo: "DONÉ CONCEIÇÃO",
      diretores: "Nil Mendonça e Alexy Eloi",
      pais: "Brasil",
      classificacao: "Livre",
      youtubeId: "",
      sinopse: "Em um poderoso testemunho de fé e resistência, o documentário narra a trajetória de Doné Conceição, líder espiritual de um terreiro profundamente marcado pela intolerância religiosa. Após anos enfrentando ataques e um incêndio que destruiu o local e apagou registros históricos, Doné e sua comunidade se veem obrigados a recomeçar. Por meio de relatos íntimos e emocionantes, frequentadores e filhos de santo relembram episódios de luta e superação, enquanto cenas observacionais e registros de arquivo revelam a beleza e a força de um espaço sagrado renascido.\nO documentário celebra os dez anos de resistência e resiliência de Doné Conceição, reforçando a importância da união, resiliência e luta contra o preconceito.",
      imagem: posterUrls.doneConceicao,
    },
    {
      slug: "em-nome-da-mae",
      titulo: "EM NOME DA MÃE",
      diretores: "Gabriela Lima, Bruno Santiago",
      pais: "Brasil",
      classificacao: "Livre",
      youtubeId: "",
      sinopse: "Após a morte da mãe, três irmãos tentam recriar uma tradição familiar, mas sem ela, o ritual rapidamente se desfaz em caos e tensão.",
      imagem: posterUrls.emNomeDaMae,
    },
    {
      slug: "in-comodo",
      titulo: "IN CÔMODO",
      diretores: "Débora Crusy",
      pais: "Brasil",
      classificacao: "14",
      youtubeId: "",
      sinopse: "Um homem após 3 anos de Pandemia.  Vive suas angústias e traumas devido a covid 19.",
      imagem: posterUrls.inComodo,
    },
    {
      slug: "metaverso-em-desencanto",
      titulo: "METAVERSO EM DESENCANTO",
      diretores: "Diogo Brandão",
      pais: "Brasil",
      classificacao: "16",
      youtubeId: "",
      sinopse: "Um surfista encontra uma garota na areia de uma praia carioca no que parece um banal filme de surf. Mas logo as coisas se mostram diferentes de um clichê romântico e um clima Noir se estabelece; ele é na realidade um avatar de alguém impossibilitado de sair de casa e ela é um avatar de uma mulher desfigurada. Intrigado pela moça, o avatar do surfista persegue o avatar da moça desfigurada até a casa dela, para tentar desvendar o mistério e acaba descobrindo que a mulher por trás do avatar feminino é na realidade vítima de uma família disfuncional ao extremo, refém de um patriarca insanamente violento, nessa mistura de gêneros com elementos de Sci-Fi, Giallo, suspense e horror.",
      imagem: posterUrls.metaverso,
    },
    {
      slug: "na-risca",
      titulo: "NA RISCA",
      diretores: "Mozá",
      pais: "Brasil",
      classificacao: "Livre",
      youtubeId: "",
      sinopse: "Traz a perspectiva de um jovem da Vila Canaã, Baixada Fluminense, sobre a sedução da barbearia em um cenário de vivência que flerta com o crime e as drogas. Como as barbearias podem impactar na sua vida e na vida dos jovens da sua comunidade?",
      imagem: posterUrls.naRisca,
    },
    {
      slug: "sobre-nos",
      titulo: "SOBRE NÓS",
      diretores: "Marina Maux",
      pais: "Brasil",
      classificacao: "12",
      youtubeId: "",
      sinopse: "Uma conversa entre duas mulheres se transforma em um mergulho nas complexidades do amor e do passado. Uma história íntima sobre encontros, despedidas e os sentimentos que permanecem.",
      imagem: posterUrls.sobreNos,
    },
    {
      slug: "tempestade-de-mentiras",
      titulo: "TEMPESTADE DE MENTIRAS",
      diretores: "Angela Santos",
      pais: "Brasil",
      classificacao: "Livre",
      youtubeId: "",
      sinopse: "Após perder o filho e a casa em uma tempestade, Dona Sebastiana, busca ajuda de um político da cidade, mas descobre que a falsidade é cruel. Um drama social sobre hipocrisia política e solidariedade comunitária.",
      imagem: posterUrls.tempestades,
    },
    {
      slug: "uma-menina-duas-mulheres-e-muitas-historias",
      titulo: "UMA MENINA DUAS MULHERES E MUITAS HISTÓRIAS",
      diretores: "Marcus Galiña",
      pais: "Brasil",
      classificacao: "Livre",
      youtubeId: "",
      sinopse: "O filme conta a história de Aninha e suas tias Cláudia e Cris, duas mulheres negras, professoras da rede pública, contadoras de histórias que sonham ser escritoras. Aninha mora com Tia Cláudia, e Tia Cris é sua vizinha de prédio. Elas estão sempre juntas: dão aulas, cozinham, conversam, passeiam, dirigem e Aninha está sempre com elas. A história se passa ao longo de um dia na vida das três: uma sexta-feira. Elas vão para a escola, depois passeiam no parque e, em seguida, voltam para casa onde continuam o papo na varanda. Aninha observa as tias, escuta todas as conversas, ouvimos alguns pensamentos seus, mas ela quase não fala, embora tudo observe com seus olhos expressivos. Enquanto as tias conversam sobre o desejo que ambas têm de serem escritoras, Aninha pega um papel e, lembrando-se das coisas que ouviu ao longo do dia, começa a desenhar personagens e partes das histórias que escutou. As tias percebem e, sorrateiramente, se aproximam para observar. Então os desenhos ganham vida, e as tias visualizam as cenas que elas mesmas narraram ao longo do dia. A iniciativa da criança terá papel decisivo no caminho destas duas mulheres que sonham escrever seus livros.",
      imagem: posterUrls.umaMenina,
    }
  ];
  