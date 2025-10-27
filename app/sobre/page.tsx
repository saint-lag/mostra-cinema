import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre - Mostra Momento",
  description: "Conheça mais sobre a Mostra de Cinema e sua história, objetivos e equipe.",
};

export default function SobrePage() {
  return (
    <div className="bg-bebe/30 min-h-screen">
      {/* Padrão decorativo sutíl no topo */}
      <div className="absolute top-0 left-0 w-full h-32 overflow-hidden opacity-10 z-0">
        <div className="w-full h-full bg-[url('/img/Desenhos.svg')] bg-repeat bg-[length:200px_200px]"></div>
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        {/* Título principal */}
        <div className="mb-12 text-center">
          <h1 
            className="text-terra font-bold mb-4"
            style={{ fontSize: "clamp(2rem, 3vw + 1rem, 3.5rem)" }}
          >
            Mostra Momento
          </h1>
          <div className="w-24 h-1 bg-lima mx-auto mb-6"></div>
          <p className="text-musgo max-w-2xl mx-auto text-lg">
            Celebrando o cinema e promovendo a cultura audiovisual em nossa região
          </p>
        </div>

        {/* Sobre a Mostra */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-md p-8 relative overflow-hidden">
            {/* Elementos decorativos */}
            <div className="absolute top-0 left-0 w-32 h-32 opacity-10 pointer-events-none">
              <Image 
                src="/img/Desenhos.svg"
                alt=""
                width={120}
                height={120}
                className="transform -translate-x-1/4 -translate-y-1/4"
                aria-hidden="true"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
              <Image 
                src="/img/Desenhos.svg"
                alt=""
                width={120}
                height={120}
                className="transform translate-x-1/4 translate-y-1/4 rotate-180"
                aria-hidden="true"
              />
            </div>

            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-terra mb-6 pb-2 border-b border-lima/30">
                Sobre a Mostra
              </h2>
              <p className="text-musgo mb-6 text-lg leading-relaxed">
                A <strong className="font-semibold">Mostra Um Momento em Caxias</strong> é um espaço de celebração do cinema feito em Duque de Caxias. Criada com o intuito de valorizar a produção audiovisual local, a mostra reúne curtas-metragens realizados por artistas da região, destacando a diversidade de olhares, histórias e experiências que compõem a cena caxiense e a Baixada Fluminense.

              </p>
              <p className="text-musgo mb-8">
                Em sua edição de 2025, a mostra acontece nos dias 25 e 26 de outubro, às 17h, na sala do CPH, adjacente à Biblioteca Pública Ferreira Gullar, na Vila Nossa Senhora das Graças, em Xerém. O evento é gratuito e aberto a todos, promovendo o encontro entre realizadores e público, e fortalecendo o sentimento de pertencimento através da arte.

              </p>
              <p className="text-musgo mb-8">
                Após as sessões presenciais, os filmes exibidos permanecerão disponíveis online por uma semana aqui no site, ampliando o acesso às produções e permitindo que mais pessoas conheçam o cinema feito em Duque de Caxias.

              </p>
              <p className="text-musgo mb-8">
                A Mostra Um Momento em Caxias acredita no poder do audiovisual como ferramenta de memória, expressão e comunidade — um convite para viver, juntos, o cinema que nasce e se transforma em Caxias.

              </p>
            </div>
          </div>
        </section>

      


        {/* CTA - Contato */}
        <section>
          <div className="bg-gradient-to-r from-musgo to-cipo rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Entre em Contato</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Tem alguma dúvida sobre a Mostra de Cinema ou deseja participar das próximas edições? 
              Estamos à disposição para atender você!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:mostramomento@gmail.com" className="bg-white text-musgo font-medium px-6 py-3 rounded-lg hover:bg-bebe transition-colors">
                mostramomento@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

