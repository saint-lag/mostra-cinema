
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40  border-zinc-200 bg-black backdrop-blur ">
      <div className="mx-auto flex max-w-6xl justify-between px-4 py-3">
        <Link href="/" className="text-xl text-white font-semibold tracking-tight">
          MOSTRA<span className="opacity-70">·CINEMA DE CAXIAS</span>
        </Link>

        <nav className="flex text-white items-center gap-5 text-sm">
          <Link href="/" className="hover:underline">INÍCIO</Link>
          <Link href="/programa" className="hover:underline">PROGRAMAÇÃO</Link>
          <Link href="/sobre" className="hover:underline">SOBRE</Link>
        </nav>
      </div>
    </header>
  );
}
