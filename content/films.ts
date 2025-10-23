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
  producao?: string;
  montagem?: string;
  edicao?: string;
  elenco?: string[];
};

// Função para obter os filmes com URLs dos posters
export async function getFilms(): Promise<Film[]> {
  await initializePosterUrls();
  
  return [
    {
      slug: "a-cor-do-cinema",
      titulo: "A COR DO CINEMA",
      diretores: "Mica Lopes e Vio Anchieta",
      pais: "Brasil",
      classificacao: "Livre",
      youtubeId: "",
      sinopse: "Em um setor historicamente dominado por pessoas brancas, onde estão os profissionais negros do cinema? A Cor do Cinema é um testemunho emocionante da força transformadora das histórias que contamos e das pessoas extraordinárias que as tornam possíveis.",
      imagem: getPosterUrl('a-cor-do-cinema', 1),
      cameras: "",
      som: "",
      producao: "",
      montagem: "",
      edicao: "",
      elenco: [],
    },
    {
      slug: "a-roda",
      titulo: "A RODA",
      diretores: "Guilherme Rodrigues",
      pais: "Brasil",
      classificacao: "Livre",
      youtubeId: "",
      sinopse: "Um dia após o outro, até um dia se tornar o outro.",
      imagem: getPosterUrl('a-roda'),
      screeningAt: "2025-09-06T18:00:00-03:00",
      ano: 2024,
      cameras: "",
      som: "",
      producao: "",
      montagem: "",
      edicao: "",
      elenco: [],
    },
    {
      slug: "cheia",
      titulo: "CHEIA",
      diretores: "Wayner Tristão",
      pais: "Brasil",
      classificacao: "Livre",
      youtubeId: "",
      sinopse: "As últimas cheias marcadas na parede medem a velocidade da vida. Lavando imagens e derretendo certezas.",
      imagem: getPosterUrl('cheia', 1),
      cameras: "",
      som: "",
      producao: "",
      montagem: "",
      edicao: "",
      elenco: [],
    },
    {
      slug: "destino-tracado",
      titulo: "DESTINO TRAÇADO",
      diretores: "Caio Berc",
      pais: "Brasil",
      classificacao: "Livre",
      youtubeId: "",
      sinopse: 'Mariana, uma jovem de 25 anos da Baixada Fluminense, vive uma rotina desgastante de currículos enviados e entrevistas sem sentido. Em meio à ansiedade e à pressão por "dar certo", ela sente que algo essencial está faltando — até que um sonho misterioso de sua avó, Dona Zelma, a leva até Mãe Tereza, uma taróloga cigana que vive em uma Kombi encantada.',
      imagem: getPosterUrl('destino'),
      cameras: "",
      som: "",
      producao: "",
      montagem: "",
      edicao: "",
      elenco: [],
    },
    {
      slug: "done-conceicao",
      titulo: "DONÉ CONCEIÇÃO",
      diretores: "Nil Mendonça e Alexy Eloi",
      pais: "Brasil",
      classificacao: "Livre",
      youtubeId: "",
      sinopse: "Em um poderoso testemunho de fé e resistência, o documentário narra a trajetória de Doné Conceição, líder espiritual de um terreiro profundamente marcado pela intolerância religiosa. Após anos enfrentando ataques e um incêndio que destruiu o local e apagou registros históricos, Doné e sua comunidade se veem obrigados a recomeçar. Por meio de relatos íntimos e emocionantes, frequentadores e filhos de santo relembram episódios de luta e superação, enquanto cenas observacionais e registros de arquivo revelam a beleza e a força de um espaço sagrado renascido.\nO documentário celebra os dez anos de resistência e resiliência de Doné Conceição, reforçando a importância da união, resiliência e luta contra o preconceito.",
      imagem: getPosterUrl('done', 1),
      cameras: "",
      som: "",
      producao: "",
      montagem: "",
      edicao: "",
      elenco: [],
    },
    {
      slug: "em-nome-da-mae",
      titulo: "EM NOME DA MÃE",
      diretores: "Gabriela Lima, Bruno Santiago",
      pais: "Brasil",
      classificacao: "Livre",
      youtubeId: "",
      sinopse: "Após a morte da mãe, três irmãos tentam recriar uma tradição familiar, mas sem ela, o ritual rapidamente se desfaz em caos e tensão.",
      imagem: getPosterUrl('em-nome-da-mae', 2),
      cameras: "",
      som: "",
      producao: "",
      montagem: "",
      edicao: "",
      elenco: [],
    },
    {
      slug: "in-comodo",
      titulo: "IN CÔMODO",
      diretores: "Débora Crusy",
      pais: "Brasil",
      classificacao: "14",
      youtubeId: "",
      sinopse: "Um homem após 3 anos de Pandemia.  Vive suas angústias e traumas devido a covid 19.",
      imagem: getPosterUrl('in-comodo'),
      cameras: "",
      som: "",
      producao: "",
      montagem: "",
      edicao: "",
      elenco: [],
    },
    {
      slug: "metaverso-em-desencanto",
      titulo: "METAVERSO EM DESENCANTO",
      diretores: "Diogo Brandão",
      pais: "Brasil",
      classificacao: "16",
      youtubeId: "",
      sinopse: "Um surfista encontra uma garota na areia de uma praia carioca no que parece um banal filme de surf. Mas logo as coisas se mostram diferentes de um clichê romântico e um clima Noir se estabelece; ele é na realidade um avatar de alguém impossibilitado de sair de casa e ela é um avatar de uma mulher desfigurada. Intrigado pela moça, o avatar do surfista persegue o avatar da moça desfigurada até a casa dela, para tentar desvendar o mistério e acaba descobrindo que a mulher por trás do avatar feminino é na realidade vítima de uma família disfuncional ao extremo, refém de um patriarca insanamente violento, nessa mistura de gêneros com elementos de Sci-Fi, Giallo, suspense e horror.",
      imagem: getPosterUrl('metaverso-em-desencanto', 4),
      cameras: "",
      som: "",
      producao: "",
      montagem: "",
      edicao: "",
      elenco: [],
    },
    {
      slug: "na-risca",
      titulo: "NA RISCA",
      diretores: "Mozá",
      pais: "Brasil",
      classificacao: "Livre",
      youtubeId: "",
      sinopse: "Traz a perspectiva de um jovem da Vila Canaã, Baixada Fluminense, sobre a sedução da barbearia em um cenário de vivência que flerta com o crime e as drogas. Como as barbearias podem impactar na sua vida e na vida dos jovens da sua comunidade?",
      imagem: getPosterUrl('na-risca', 2),
      cameras: "",
      som: "",
      producao: "",
      montagem: "",
      edicao: "",
      elenco: [],
    },
    {
      slug: "sobre-nos",
      titulo: "SOBRE NÓS",
      diretores: "Marina Maux",
      pais: "Brasil",
      classificacao: "12",
      youtubeId: "",
      sinopse: "Uma conversa entre duas mulheres se transforma em um mergulho nas complexidades do amor e do passado. Uma história íntima sobre encontros, despedidas e os sentimentos que permanecem.",
      imagem: getPosterUrl('sobre-nos', 2),
      cameras: "",
      som: "",
      producao: "",
      montagem: "",
      edicao: "",
      elenco: [],
    },
    {
      slug: "tempestade-de-mentiras",
      titulo: "TEMPESTADE DE MENTIRAS",
      diretores: "Angela Santos",
      pais: "Brasil",
      classificacao: "Livre",
      youtubeId: "",
      sinopse: "Após perder o filho e a casa em uma tempestade, Dona Sebastiana, busca ajuda de um político da cidade, mas descobre que a falsidade é cruel. Um drama social sobre hipocrisia política e solidariedade comunitária.",
      imagem: getPosterUrl('tempestade', 1),
      cameras: "",
      som: "",
      producao: "",
      montagem: "",
      edicao: "",
      elenco: [],
    },
    {
      slug: "uma-menina-duas-mulheres-e-muitas-historias",
      titulo: "UMA MENINA DUAS MULHERES E MUITAS HISTÓRIAS",
      diretores: "Marcus Galiña",
      pais: "Brasil",
      classificacao: "Livre",
      youtubeId: "",
      sinopse: "O filme conta a história de Aninha e suas tias Cláudia e Cris, duas mulheres negras, professoras da rede pública, contadoras de histórias que sonham ser escritoras. Aninha mora com Tia Cláudia, e Tia Cris é sua vizinha de prédio. Elas estão sempre juntas: dão aulas, cozinham, conversam, passeiam, dirigem e Aninha está sempre com elas. A história se passa ao longo de um dia na vida das três: uma sexta-feira. Elas vão para a escola, depois passeiam no parque e, em seguida, voltam para casa onde continuam o papo na varanda. Aninha observa as tias, escuta todas as conversas, ouvimos alguns pensamentos seus, mas ela quase não fala, embora tudo observe com seus olhos expressivos. Enquanto as tias conversam sobre o desejo que ambas têm de serem escritoras, Aninha pega um papel e, lembrando-se das coisas que ouviu ao longo do dia, começa a desenhar personagens e partes das histórias que escutou. As tias percebem e, sorrateiramente, se aproximam para observar. Então os desenhos ganham vida, e as tias visualizam as cenas que elas mesmas narraram ao longo do dia. A iniciativa da criança terá papel decisivo no caminho destas duas mulheres que sonham escrever seus livros.",
      imagem: getPosterUrl('uma-menina-duas-mulheres-muitas-historias', 0),
      cameras: "",
      som: "",
      producao: "Antonio Carlos de Oliveira",
      montagem: "",
      edicao: "",
      elenco: [],
    },
    {
        slug: "ervas",
        titulo: "ERVAS",
        diretores: "Itajaci Rogério Amaral",
        pais: "Duque de Caxias",
        classificacao: "Livre",
        youtubeId: "",
        sinopse: "A linguagem estética do próprio cotidiano, a câmera interage com o interlocutor e a narrativa é decolonial onde mostra outras formas de conhecimentos de cura afro-indígenas ancestral, que resiste a industria farmacêutica e a busca eclética dessa cura com as ervas.",
        imagem: getPosterUrl('ervas', 0),
        cameras: "Nath Costa, Itajaci Rogério Amaral, Heliane Ferreira",
        som: "Silene Orlando Ribeiro",
        producao: "Silene Orlando Ribeiro, Itajaci Rogério Amaral, Heliane Ferreira; Filme produzido na Oficina \"Eaí, Vamos Fazer um Filme?\" realizada no Gomeia Galpão Criativo, em Duque de Caxias, Rio de Janeiro,  em outubro de 2022.Patrocínio da Secretaria de Estado de Cultura e Economia Criativa do Rio de Janeiro, através do edital Retomada Cultural 2. #SececRJ​ #CulturaPresente​ #retomadaculturalrj2​ ",
        montagem: "Heraldo HB",
        edicao: "",
        elenco: [],
      },
      {
        slug: "e-zoo",
        titulo: "E-ZOO",
        diretores: "",
        pais: "Brasil",
        classificacao: "Livre",
        youtubeId: "",
        sinopse: "",
        imagem: getPosterUrl('e-zoo', 1),
        cameras: "",
        som: "",
        producao: "",
        montagem: "",
        edicao: "",
        elenco: [],
      }
  ];
}
