
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-lima/20 bg-musgo/95 backdrop-blur-sm">
      <div className="min-h-[12vh] mx-auto flex items-center max-w-7xl justify-between px-4 py-3">
        <Link href="/" className="flex items-center tracking-tight">
          <Image
            src="/img/Logo_2.svg"
            alt="Logo"
            width={120}
            height={40}
            className="h-8 sm:h-10 md:h-12 w-auto"
            priority
          />
        </Link>
        
        {/* Menu para mobile */}
        <button 
          className="md:hidden text-bebe p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          )}
        </button>

        {/* Menu para desktop */}
        <nav className="hidden md:flex text-bebe items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-lima transition-colors">INÍCIO</Link>
          <Link href="/programa" className="hover:text-lima transition-colors">PROGRAMAÇÃO</Link>
          <Link href="/sobre" className="hover:text-lima transition-colors">SOBRE</Link>
        </nav>
      </div>

      {/* Menu mobile expandido */}
      {menuOpen && (
        <div className="md:hidden bg-musgo border-t border-lima/20">
          <nav className="flex flex-col text-bebe py-4 px-4">
            <Link 
              href="/" 
              className="py-3 px-4 hover:bg-cipo/20 rounded-md transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              INÍCIO
            </Link>
            <Link 
              href="/programa" 
              className="py-3 px-4 hover:bg-cipo/20 rounded-md transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              PROGRAMAÇÃO
            </Link>
            <Link 
              href="/sobre" 
              className="py-3 px-4 hover:bg-cipo/20 rounded-md transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              SOBRE
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
