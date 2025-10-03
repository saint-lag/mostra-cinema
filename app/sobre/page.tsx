import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre - Mostra de Cinema",
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
            Mostra de Cinema
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
                A <strong className="font-semibold">Mostra Um Momento em Caxias</strong> é um evento anual que celebra o cinema produzido na região, reunindo cineastas, artistas e o público em uma experiência única de valorização da cultura local.
              </p>
              
              <p className="text-musgo mb-8">
                Criada em 2019, a Mostra surgiu da necessidade de criar um espaço para a exibição e discussão da produção audiovisual local, incentivando novos talentos e fortalecendo a identidade cultural da região através do cinema.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-cipo font-semibold mb-3">O que oferecemos:</h3>
                  <ul className="text-musgo space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-terra">•</span>
                      <span>Exibição de curtas e longas-metragens regionais</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-terra">•</span>
                      <span>Debates com realizadores e convidados especiais</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-terra">•</span>
                      <span>Oficinas e atividades formativas para todas as idades</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-terra">•</span>
                      <span>Espaço para networking e troca de experiências</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-cipo font-semibold mb-3">Nossos objetivos:</h3>
                  <ul className="text-musgo space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-terra">•</span>
                      <span>Fortalecer o cenário audiovisual de Caxias</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-terra">•</span>
                      <span>Incentivar novos talentos e produções</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-terra">•</span>
                      <span>Aproximar a comunidade da arte cinematográfica</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-terra">•</span>
                      <span>Promover o intercâmbio cultural entre artistas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Equipe */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-terra mb-8 text-center">
            Nossa Equipe
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Membro da Equipe 1 */}
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-32 h-32 rounded-full bg-lima/20 mx-auto mb-4 overflow-hidden">
                <Image 
                  src="/img/imagem_perfil.jpg" 
                  alt="Foto de Ana Silva" 
                  width={128} 
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-musgo font-semibold text-lg mb-1">Sophia Nogino</h3>
              <p className="text-terra font-medium mb-3">Diretora</p>
              <p className="text-musgo/80 text-sm">
                Cineasta e produtora cultural com mais de 15 anos de experiência no setor audiovisual.
              </p>
            </div>
            
            {/* Membro da Equipe 2 */}
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-32 h-32 rounded-full bg-lima/20 mx-auto mb-4 overflow-hidden">
                <Image 
                  src="/img/foto_perfil.svg" 
                  alt="Foto de Carlos Santos" 
                  width={128} 
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-musgo font-semibold text-lg mb-1">Carlos Santos</h3>
              <p className="text-terra font-medium mb-3">Curador</p>
              <p className="text-musgo/80 text-sm">
                Professor de cinema e pesquisador com foco em produção audiovisual brasileira.
              </p>
            </div>
            
            {/* Membro da Equipe 3 */}
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-32 h-32 rounded-full bg-lima/20 mx-auto mb-4 overflow-hidden">
                <Image 
                  src="/img/perfil.png" 
                  alt="Foto de Mariana Oliveira" 
                  width={128} 
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-musgo font-semibold text-lg mb-1">Mariana Oliveira</h3>
              <p className="text-terra font-medium mb-3">Produção</p>
              <p className="text-musgo/80 text-sm">
                Produtora de eventos culturais especializada em festivais e mostras de cinema.
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
              <a href="mailto:contato@mostradecinema.com.br" className="bg-white text-musgo font-medium px-6 py-3 rounded-lg hover:bg-bebe transition-colors">
                contato@mostradecinema.com.br
              </a>
              <a href="tel:+5599999999999" className="bg-bebe/30 text-white font-medium px-6 py-3 rounded-lg hover:bg-bebe/50 transition-colors">
                (99) 99999-9999
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

