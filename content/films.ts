import { list } from '@vercel/blob';
import manifest from './poster-manifest.json';

type PosterMap = Record<string, string[]>;

// Initialize client with token
const token = process.env.BLOB_READ_WRITE_TOKEN;

// Dados gerados estaticamente durante a build
const manifestFromBuild = manifest as PosterMap;

const skipBlobFetch = process.env.SKIP_BLOB_FETCH === 'true';

// URLs estáticas dos posters (serão preenchidas durante a build)
let staticPosterUrls: PosterMap | null =
  Object.keys(manifestFromBuild).length > 0 ? manifestFromBuild : null;

// Função para obter poster específico
export function getPosterUrl(filmId: string, index: number = 0): string | undefined {
  if (!staticPosterUrls) {
    throw new Error(
      'Poster URLs não foram inicializadas durante a build. Execute `npm run build` para gerar o manifest, defina o token BLOB ou habilite SKIP_BLOB_FETCH=true durante o desenvolvimento.'
    );
  }
  return staticPosterUrls[filmId]?.[index];
}

// Função para inicializar as URLs dos posters durante a build
export async function initializePosterUrls() {
  // Retorna o cache se já tiver sido carregado
  if (staticPosterUrls) return staticPosterUrls;

  if (skipBlobFetch) {
    staticPosterUrls =
      Object.keys(manifestFromBuild).length > 0 ? manifestFromBuild : {};
    return staticPosterUrls;
  }

  if (!token) {
    console.warn('BLOB_READ_WRITE_TOKEN não encontrado nas variáveis de ambiente');
    staticPosterUrls = {};
    return staticPosterUrls;
  }

  try {
    console.log('Fetching all posters during build...');
    const { blobs } = await list({
      token,
      prefix: 'posters'
    });

    console.log(`Found ${blobs.length} posters`);
    
    // Cria o objeto de URLs estáticas
    const urls: PosterMap = {};
    
    blobs.forEach(blob => {
      // O diretório do filme é a primeira parte do caminho após posters/
      const pathParts = blob.pathname.split('/');
      if (pathParts.length >= 2) {
        const dirName = pathParts[1]; // pega o nome do diretório após 'posters/'
        
        if (!urls[dirName]) {
          urls[dirName] = [];
        }
        urls[dirName].push(blob.url);
      }
    });

    // Ordena as URLs de cada filme
    Object.values(urls).forEach(urlArray => {
      urlArray.sort(); // Garante ordem consistente
    });

    console.log('Posters por filme:', 
      Object.fromEntries(
        Object.entries(urls).map(([key, urlArray]) => [key, urlArray.length])
      )
    );

    // Armazena no cache estático
    staticPosterUrls = urls;
    return urls;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.warn('Não foi possível buscar posters do Vercel Blob:', message);
    staticPosterUrls = {};
    return staticPosterUrls;
  }
}

export type Film = {
  slug: string;
  titulo: string;
  diretores?: string;
  direcao?: string;
  pais?: string;
  ano?: number;
  duracao?: string;
  sinopse?: string;
  imagem?: string;
  classificacao?: string;
  tags?: string[];
  youtubeId: string;
  screeningAt?: string;
  cameras?: string;
  som?: string;
  trilha?: string;
  producao?: string;
  montagem?: string;
  edicao?: string;
  elenco?: string;
  produtora?: string;
  arte?: string;
  patrocinio?: string;
  apoio?: string;
  agradecimentos?: string;
  still?: string;
  makingOf?: string;
  narracao?: string;
  animacao?: string;
  maquiagem?: string;
  figurino?: string;
  cenografia?: string;
  gaffer?: string;
  logger?: string;
  plato?: string;
  microfone?: string;
  fotografia?: string;
  roteiro?: string;
  vfx?: string;
  distribuicao?: string;
};

// Função para obter os filmes com URLs dos posters
export async function getFilms(): Promise<Film[]> {
  await initializePosterUrls();
  
  return [
    {
      slug: "a-cor-do-cinema",
      titulo: "A COR DO CINEMA",
      diretores: "Mica Lopes e Vio Anchieta",
      direcao: "Mica Lopes, Vio Anchieta, Laura Gonna",
      pais: "Duque de Caxias",
      classificacao: "Livre",
      youtubeId: "TpZbGTo23go",
      sinopse: "Em um setor historicamente dominado por pessoas brancas, onde estão os profissionais negros do cinema? A Cor do Cinema é um testemunho emocionante da força transformadora das histórias que contamos e das pessoas extraordinárias que as tornam possíveis.",
      imagem: getPosterUrl('a-cor-do-cinema', 1),
      cameras: "Jomboh e MaCla Oliveira",
      som: "Italo Pereira",
      producao: "Mica Lopes, Larissa Pereira, Gabrieli Oliveira",
      montagem: "",
      edicao: "Vio Anchieta",
      elenco: "Lais Fonseca, Marcilucy de Andrade, Vanessa Noronha, Yan Muniz, Maria Salles, Marina de Souza, Marcos Henrique Carneiro, Paulo Jorge Roque, Renan Nascimento, Samuel Araújo, Suelem dos Santos e Tainá de Almeida",
      arte: "Ivy Magalhães",
      still:"Pedro Couto",
      makingOf: "Rhayane Ramos",
      agradecimentos: "Ghetto Colletiv e Núcleo de Audiovisual (NUCA), Antonio Kuschnir, Guida, Ju Angelino, Ramon Lid e Vandl Art"
    },
    {
      slug: "a-roda",
      titulo: "A RODA",
      diretores: "Guilherme Rodrigues",
      pais: "Imbariê",
      classificacao: "Livre",
      youtubeId: "ow2ssb3O7iY",
      sinopse: "Um dia após o outro, até um dia se tornar o outro.",
      imagem: getPosterUrl('a-roda'),
      screeningAt: "2025-09-06T18:00:00-03:00",
      ano: 2024,
      cameras: "Guilherme Rodrigues",
      som: "",
      producao: "",
      montagem: "Guilherme Rodrigues",
      edicao: "",
      elenco: "",
    },
    {
      slug: "cheia",
      titulo: "CHEIA",
      diretores: "Wayner Tristão",
      pais: "Duque de Caxias",
      classificacao: "Livre",
      youtubeId: "tVmce9uVz7U",
      sinopse: "As últimas cheias marcadas na parede medem a velocidade da vida. Lavando imagens e derretendo certezas.",
      imagem: getPosterUrl('cheia', 1),
      cameras: "",
      som: "Hubert, WT",
      producao: "Lucas Bonini, Isis Dequech, Garupa Filmes",
      montagem: "Wayner Tristão",
      edicao: "",
      elenco: "",
      narracao: "Vanessa Malheiros",
      trilha: "Lola Moore",
      animacao: "Wayner Tristão e Savio Sena",
    },
    {
      slug: "destino-tracado",
      titulo: "DESTINO TRAÇADO",
      diretores: "Caio Berc",
      direcao: "Lucca Barata, Marcele Almeida, Cláudio Benites",
      pais: "Duque de Caxias",
      classificacao: "Livre",
      youtubeId: "mLD0eVmTcdU",
      sinopse: 'Mariana, uma jovem de 25 anos da Baixada Fluminense, vive uma rotina desgastante de currículos enviados e entrevistas sem sentido. Em meio à ansiedade e à pressão por "dar certo", ela sente que algo essencial está faltando — até que um sonho misterioso de sua avó, Dona Zelma, a leva até Mãe Tereza, uma taróloga cigana que vive em uma Kombi encantada.',
      imagem: getPosterUrl('destino'),
      cameras: "Davi Torres, Gabriel Ferrão, Mayara Santos, Giovanna Sabino",
      som: "Gabriel Crisóstomo",
      microfone: "Carla Nunes",
      producao: "Nathallie Sabino, Levi Alves, Gleice Hellen, Nicolas Villela",
      plato: "Mayra Vianna",
      montagem: "",
      edicao: "",
      elenco: "Anna Moreira - Mariana, Aislann Sousa - Lucas, Ana Màrtins - Mãe Tereza, Eve Penha - Dona Zelma",
      gaffer: "Ryan de Farias, Johnny Barbosa",
      logger: "Daniel Mufasa",
      arte: "Clara Castro Rosa, Manuela de Araújo, Jully Santana, Aline Lofrano",
      cenografia: "Lucas Araújo",
      figurino: "Carol Coêlho",
      maquiagem: "Aline Lofrano / Taisa Alves",
      makingOf: "Alanna Ayres",
      still: "Lettícia Sydnei"
    },
    {
      slug: "done-conceicao",
      titulo: "DONÉ CONCEIÇÃO",
      diretores: "Nil Mendonça e Alexy Eloi",
      direcao: "Nil Mendonça, Alexy Eloi, Théo Costa",
      roteiro: "Théo Costa e Nil Mendonça",
      pais: "Imbariê",
      classificacao: "Livre",
      youtubeId: "mZZyBnDBclA",
      sinopse: "Em um poderoso testemunho de fé e resistência, o documentário narra a trajetória de Doné Conceição, líder espiritual de um terreiro profundamente marcado pela intolerância religiosa. Após anos enfrentando ataques e um incêndio que destruiu o local e apagou registros históricos, Doné e sua comunidade se veem obrigados a recomeçar. Por meio de relatos íntimos e emocionantes, frequentadores e filhos de santo relembram episódios de luta e superação, enquanto cenas observacionais e registros de arquivo revelam a beleza e a força de um espaço sagrado renascido.\nO documentário celebra os dez anos de resistência e resiliência de Doné Conceição, reforçando a importância da união, resiliência e luta contra o preconceito. Produzido da Oficina de Cinema da Escola Livre de Artes da Baixada Fluminense, realizada no Gomeia Galpão Criativo, dinamizada pelo Cineclube Mate Com Angu.#BaixadaFilma",
      imagem: getPosterUrl('done', 1),
      fotografia: "Rafaela Gomes",
      cameras: "Natália Anjos, Luciana Leal e Rafaela Gomes",
      som: "Alice Machado e Erick Siqueira",
      still: "Natália Anjos",
      producao: "William Lopes, Théo Costa, Danton Muniz, Fabio Ferreira de Moura, Kiko Haikal, George Silva de Souza",
      montagem: "Guilherme Leopoldo",
      edicao: "",
      elenco: "Entrevistados: Doné Conceição, Gaipê Renato de Odé, Ekedy Daniele de Freqüem, Ekedy Mônica de Nãnan",
      arte: "Natália Anjos e Luciana Leal",
      agradecimentos: "Restaurante Amarelinho da Taquara"
    },
    {
      slug: "em-nome-da-mae",
      titulo: "EM NOME DA MÃE",
      diretores: "Gabriela Lima, Bruno Santiago",
      pais: "Duque de Caxias",
      classificacao: "Livre",
      youtubeId: "XdjfWYraKCw",
      sinopse: "Após a morte da mãe, três irmãos tentam recriar uma tradição familiar, mas sem ela, o ritual rapidamente se desfaz em caos e tensão.",
      imagem: getPosterUrl('em-nome-da-mae', 2),
      cameras: "BillyD",
      som: "Ruan Abdon",
      producao: "Alejander Coelho, Andressa Costa, Nil Mendonça",
      montagem: "Jomboh / Herbert Cardoso",
      edicao: "",
      elenco: "",
      roteiro: "Bruno Santiago",
      fotografia: "Isadora Regina Passos Costa, Mateus Januária Santanna",
      still: "Natália Anjo",
      arte: "Danilo Moraes",
      figurino: "Camylle Victoria Lemos",
      maquiagem: "Gustavo Alcantara  (Gus)"
    },
    {
      slug: "in-comodo",
      titulo: "IN CÔMODO",
      diretores: "Débora Crusy",
      pais: "Duque de Caxias",
      classificacao: "14",
      youtubeId: "IqYtyl8157o",
      sinopse: "Um homem após 3 anos de Pandemia.  Vive suas angústias e traumas devido a covid 19.",
      imagem: getPosterUrl('in-comodo'),
      cameras: "",
      som: "Ray Amorim",
      producao: "Patrick lima, Thais da Silva, Marilene Oliveira",
      montagem: "",
      edicao: "",
      elenco: "",
      roteiro: "Uel Fragha"
    },
    {
      slug: "metaverso-em-desencanto",
      titulo: "METAVERSO EM DESENCANTO",
      diretores: "Diogo Brandão",
      pais: "Brasil",
      classificacao: "16",
      youtubeId: "g9nIQIDLvAA",
      sinopse: "Um surfista encontra uma garota na areia de uma praia carioca no que parece um banal filme de surf. Mas logo as coisas se mostram diferentes de um clichê romântico e um clima Noir se estabelece; ele é na realidade um avatar de alguém impossibilitado de sair de casa e ela é um avatar de uma mulher desfigurada. Intrigado pela moça, o avatar do surfista persegue o avatar da moça desfigurada até a casa dela, para tentar desvendar o mistério e acaba descobrindo que a mulher por trás do avatar feminino é na realidade vítima de uma família disfuncional ao extremo, refém de um patriarca insanamente violento, nessa mistura de gêneros com elementos de Sci-Fi, Giallo, suspense e horror.",
      imagem: getPosterUrl('metaverso-em-desencanto', 4),
      cameras: "Gabriel Guimarães",
      som: "Tiago Ribeiro, Éric Brandão",
      producao: "Oficina do Diabo, Diogo Brandão, Sofia Süssekind",
      montagem: "Felipe Monteiro",
      edicao: "",
      elenco: "Beatriz Malecha, Felipe Fagundes, Rachel Enierre, Alexandre David, Diogo Brandão",
      arte: "Diogo Brandão, Samuel Rufino, Victoria Rebuzzi",
      fotografia: "Eduardo Kurt",
      trilha: "Daniel Benflos",
      vfx: "Eduardo Kurt e Oficina do Diabo",
      agradecimentos: "Colônia de Pescadores Z-13, localizada no Posto 6, ao lado do Forte de Copacabana pelo acolhimento"
    },
    {
      slug: "na-risca",
      titulo: "NA RISCA",
      diretores: "Mozá",
      pais: "Xerém",
      classificacao: "Livre",
      youtubeId: "vrRyB-ikd8c",
      sinopse: "Traz a perspectiva de um jovem da Vila Canaã, Baixada Fluminense, sobre a sedução da barbearia em um cenário de vivência que flerta com o crime e as drogas. Como as barbearias podem impactar na sua vida e na vida dos jovens da sua comunidade?",
      imagem: getPosterUrl('na-risca', 2),
      cameras: "Suzana Castro, João Queiroz",
      som: "Arthur Gama, Daniel Jack Moraes",
      producao: "Andressa Costa, Lara Mira",
      produtora: "EBAV",
      montagem: "Arthur Gama, Alehandro Duarte",
      edicao: "",
      elenco: "Michael Robson Coutinho dos Santos, Marllon Jefola, MC TH, Jonathan, Vital, João Victor Vieira (Jxao), Phelipe Cardoso, Fabiano Fernandes das Neves, Marcelo Andrade, Dinair Gomes, Sabat, Max dos Santos, José Fernando da Rocha, Marcia Sabatini da Rocha ",
      arte: "Greg",
      roteiro: "Mozá, Andressa Costa, Arthur Gama, Suzana Castro, Greg",
      trilha: "JXAO, Sabat",
      patrocinio: "EBAV, Instituto Zeca Pagodinho",
      apoio: "Isis Neta, Luciano Machado, Nova Canaã Material de Construção",
      agradecimentos: "Marcia Sabatini da Rocha, José Fernando da Rocha, Giovanni Sabatini da Rocha, Marlon Jefola, Carolina Oliveira, Mateus Alexis, Lucas Bittencourt, Marlene Bittencourt, Phelipe Cardoso, Luciano Machado, Elaine Pereira dos Santos, Canaan Burguer, Pablo Bittencourt, Marcelo Andrade, Phelipe Cardoso, Fabiano Fernandes, João Victor Vieira, Jonathan Vital",
    },
    {
      slug: "sobre-nos",
      titulo: "SOBRE NÓS",
      diretores: "Marina Maux",
      direcao: "Marina Maux, Guilherme Leopoldo",
      pais: "Duque de Caxias",
      gaffer: "Carol Brandão, Raíssa Nunes",
      fotografia: "Gabriel Vitiello, Suzana Castro",
      still: "Vitória Santana",
      classificacao: "12",
      youtubeId: "-enK3Qm8bWw",
      sinopse: "Uma conversa entre duas mulheres se transforma em um mergulho nas complexidades do amor e do passado. Uma história íntima sobre encontros, despedidas e os sentimentos que permanecem.",
      imagem: getPosterUrl('sobre-nos', 2),
      cameras: "",
      som: "Lucio Perpétuos, Victor Garcez",
      producao: "Laura Gonna, Mica Lopes",
      montagem: "Guilherme Leopoldo",
      edicao: "",
      elenco: "Fernanda: Gabz, Sueli: Leticia Vieira, Garçom: Marcos Carneiro",
      fotografia: "Macla Oliveira",
      arte: "Mariana Anddrade",
      distribuicao: "Luana Ferreira"
    },
    {
      slug: "tempestade-de-mentiras",
      titulo: "TEMPESTADE DE MENTIRAS",
      diretores: "Angela Santos",
      direcao: "Angela Santos, Flávia Santos, Victor Manuel",
      pais: "Duque de Caxias",
      classificacao: "Livre",
      youtubeId: "TyVbPVXBSyw",
      sinopse: "Após perder o filho e a casa em uma tempestade, Dona Sebastiana, busca ajuda de um político da cidade, mas descobre que a falsidade é cruel. Um drama social sobre hipocrisia política e solidariedade comunitária.",
      imagem: getPosterUrl('tempestade', 1),
      cameras: "",
      som: "Andressa Costa, Erick Siqueira, Vito Besouro",
      producao: "Flávia Santos, Itajací Araújo, Fabio Ferreira de Moura",
      montagem: "Higor Cabral",
      edicao: "",
      elenco: "Sílvia de Mendonça - Sebastiana, Nill Mendonça - Lindaura, Rui Santos - Aroldo, Vito Besouro - Assessor, Erick Siqueira - Feirante, Adrian Gabriel - João, Marina Mendonça - Amiga do João",
      figurantes: "Danilo Moraes, Lucilene Ferreira, Rafaela Gomes",
      roteiro: "Angela Santos, Luciana Leal, Vanusa Silva, Flávia Santos",
      fotografia: "Letícia Batista",
      still: "Gabriel Cortes",
      arte: "Luciana Leal, Vanusa Silva",
      figurino: "Vanusa Silva, Luciana Leal",
      trilha: "Maria Rita - Santa Chuva", 
      agradecimentos: "Baianas Bar, João da banca de temperos, Trabalhadores da Feira de Caxias, Azim Moollan e Rafael Mazza",
      apoio: "Espiralar Filmes"
    },
    {
      slug: "uma-menina-duas-mulheres-e-muitas-historias",
      titulo: "UMA MENINA DUAS MULHERES E MUITAS HISTÓRIAS",
      diretores: "Marcus Galiña",
      direcao: "Marcus Galiña, Mazo",
      roteiro: "Cláudia Cruz, Cristina Santos e Marcus Galiña",
      pais: "Duque de Caxias",
      still: "Isis dos Anjos",
      classificacao: "Livre",
      youtubeId: "-8nelxUcu90",
      sinopse: "O filme conta a história de Aninha e suas tias Cláudia e Cris, duas mulheres negras, professoras da rede pública, contadoras de histórias que sonham ser escritoras. Aninha mora com Tia Cláudia, e Tia Cris é sua vizinha de prédio. Elas estão sempre juntas: dão aulas, cozinham, conversam, passeiam, dirigem e Aninha está sempre com elas. A história se passa ao longo de um dia na vida das três: uma sexta-feira. Elas vão para a escola, depois passeiam no parque e, em seguida, voltam para casa onde continuam o papo na varanda. Aninha observa as tias, escuta todas as conversas, ouvimos alguns pensamentos seus, mas ela quase não fala, embora tudo observe com seus olhos expressivos. Enquanto as tias conversam sobre o desejo que ambas têm de serem escritoras, Aninha pega um papel e, lembrando-se das coisas que ouviu ao longo do dia, começa a desenhar personagens e partes das histórias que escutou. As tias percebem e, sorrateiramente, se aproximam para observar. Então os desenhos ganham vida, e as tias visualizam as cenas que elas mesmas narraram ao longo do dia. A iniciativa da criança terá papel decisivo no caminho destas duas mulheres que sonham escrever seus livros.",
      imagem: getPosterUrl('uma-menina-duas-mulheres-muitas-historias', 0),
      cameras: "Léo Fox",
      som: "Léo Fox",
      producao: "Antonio Carlos de Oliveira",
      montagem: "",
      edicao: "Mazo",
      elenco: "Ana Luiza, Intérprete de Libras: Thaís Helena M. Pereira",
      animacao: "Allan Mordred",
      trilha: "Estudio ARKA 399, Arranjos - Rick Souza, Percussão - Kbeça"
    },
    {
        slug: "ervas",
        titulo: "ERVAS",
        diretores: "Itajaci Rogério Amaral",
        pais: "Duque de Caxias",
        classificacao: "Livre",
        youtubeId: "_p9nX51XaDo",
        sinopse: "A linguagem estética do próprio cotidiano, a câmera interage com o interlocutor e a narrativa é decolonial onde mostra outras formas de conhecimentos de cura afro-indígenas ancestral, que resiste a industria farmacêutica e a busca eclética dessa cura com as ervas.",
        imagem: getPosterUrl('ervas', 0),
        cameras: "Nath Costa, Itajaci Rogério Amaral, Heliane Ferreira",
        som: "Silene Orlando Ribeiro",
        producao: "Silene Orlando Ribeiro, Itajaci Rogério Amaral, Heliane Ferreira; Filme produzido na Oficina \"Eaí, Vamos Fazer um Filme?\" realizada no Gomeia Galpão Criativo, em Duque de Caxias, Rio de Janeiro,  em outubro de 2022.Patrocínio da Secretaria de Estado de Cultura e Economia Criativa do Rio de Janeiro, através do edital Retomada Cultural 2. #SececRJ​ #CulturaPresente​ #retomadaculturalrj2​ ",
        montagem: "Heraldo HB",
        edicao: "",
        elenco: "",
      },
      {
        slug: "e-zoo",
        titulo: "E-ZOO",
        diretores: "Karol Schittini",
        pais: "Brasil",
        classificacao: "Livre",
        youtubeId: "Z0vSq9KlxOQ",
        sinopse: "",
        imagem: getPosterUrl('e-zoo', 1),
        cameras: "Karol Schittini, Rosa Maria Spínola, Joás Santos, Carolita Borba",
        som: "Sami Kontola",
        producao: "Tupiniquim Produções",
        montagem: "",
        edicao: "Joás Santos e Thiago Sobral",
        elenco: "Vozes em Off das crianças: Clara Flor Maravilhas, Cléo Guzzo, Eloá  Longuinho, Erik Garcia, Ester Sobral, Helena Nunes, Violeta Nunes, Yuri Lagub",
        trilha: "Ricardo D'Garcia"
      }
  ];
}
