
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
              <a href="#" className="text-musgo hover:text-terra" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-musgo hover:text-terra" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-musgo hover:text-terra" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-10 border-t border-lima/20 pt-6 text-center">
          <p>© {new Date().getFullYear()} Mostra um Momento em Caxias — Exibição via YouTube.</p>
        </div>
      </div>
    </footer>
  );
}