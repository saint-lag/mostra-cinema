
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-lima/20 bg-musgo/5 py-10 text-sm text-musgo">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h3 className="font-semibold text-terra mb-3">Mostra de Cinema</h3>
            <p className="max-w-md">
              Um evento anual que celebra o cinema produzido na região de Caxias, 
              reunindo cineastas, artistas e o público em uma experiência única.
            </p>
          </div>

          <div className="space-y-1">
            <h3 className="font-semibold text-terra mb-3">Navegação</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-terra transition-colors">Início</Link></li>
              <li><Link href="/programa" className="hover:text-terra transition-colors">Programação</Link></li>
              <li><Link href="/sobre" className="hover:text-terra transition-colors">Sobre</Link></li>
            </ul>
          </div>

          <div className="space-y-1">
            <h3 className="font-semibold text-terra mb-3">Redes Sociais</h3>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/mostramomento" className="text-musgo hover:text-terra" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-10 border-t border-lima/20 pt-6 text-center">
          <p>© {new Date().getFullYear()} Mostra um Momento em Caxias</p>
        </div>
      </div>
    </footer>
  );
}
