import { films } from "@/content/films";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Sobre - Mostra de Cinema de Caxias",
  description: "Filmes selecionados com exibição via YouTube.",
};

export default function SobrePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: "url('/img/Desenhos.svg')",
        backgroundRepeat: "repeat",
        backgroundSize: "300px 300px", // ajuste conforme necessário
      }}
    >
      <main style={{ position: "relative", zIndex: 1 }}>
        <section
  style={{
    position: 'relative',
    background: 'linear-gradient(90deg, #f8fafc 0%, #e2e8f0 100%)',
    borderRadius: '1rem',
    padding: '2rem',
    marginTop: '2rem',
    boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
    overflow: 'hidden'
  }}
>
  {/* Elemento visual Desenhos.svg no fundo */}
  <img
    src="/img/Desenhos.svg"
    alt="Desenho decorativo"
    aria-hidden="true"
    style={{
      position: 'absolute',
      top: '-32px',
      left: '-32px',
      width: '120px',
      opacity: 0.18,
      zIndex: 0,
      pointerEvents: 'none'
    }}
  />
  <img
    src="/img/Desenhos.svg"
    alt="Desenho decorativo"
    aria-hidden="true"
    style={{
      position: 'absolute',
      bottom: '-32px',
      right: '-32px',
      width: '120px',
      opacity: 0.18,
      zIndex: 0,
      pointerEvents: 'none',
      transform: 'rotate(180deg)'
    }}
  />

  <div style={{ position: 'relative', zIndex: 1 }}>
    <h2 style={{ color: '#1e293b', fontSize: '2rem', marginBottom: '1rem' }}>
      Mostra Um Momento em Caxias
    </h2>
    <p style={{ color: '#334155', fontSize: '1.15rem', marginBottom: '1.5rem' }}>
      A <strong>Mostra Um Momento em Caxias</strong> é um evento anual que celebra o cinema produzido na região de Caxias, reunindo cineastas, artistas e o público em uma experiência única de valorização da cultura local. 
    </p>
    <ul style={{ color: '#475569', fontSize: '1rem', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
      <li>Exibição de curtas e longas-metragens regionais</li>
      <li>Debates com realizadores e convidados especiais</li>
      <li>Oficinas e atividades formativas para todas as idades</li>
      <li>Espaço para networking e troca de experiências</li>
    </ul>
    <p style={{ color: '#334155', fontSize: '1rem' }}>
      O evento busca fortalecer o cenário audiovisual de Caxias, incentivar novos talentos e aproximar a comunidade da arte cinematográfica. Participe e viva um momento inesquecível!
    </p>
  </div>
</section>
      </main>
    </div>
  );
}

