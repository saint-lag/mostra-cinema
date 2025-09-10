
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-black backdrop-blur ">
      <div className="mx-auto flex max-w-6xl justify-between px-4 py-3">
        <Link href="/" className="text-xl text-white font-semibold tracking-tight">
          Mostra<span className="opacity-70">·Cinema</span>
        </Link>

        <nav className="flex text-white items-center gap-5 text-sm">
          <Link href="/" className="hover:underline">Início</Link>
          <Link href="/filmes" className="hover:underline">Programação</Link>
          <Link href="/sobre" className="hover:underline">Sobre</Link>
          {/* Sem login */}
        </nav>
      </div>
    </header>
  );
}
