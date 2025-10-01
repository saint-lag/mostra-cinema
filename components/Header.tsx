
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const bg = '/public/img/Logo_2.svg'
  return (
    <header className=" sticky top-0 z-40 items-center justify-center border-zinc-200 bg-black backdrop-blur ">
      <div className="min-h-[12vh] mx-auto flex max-w-6xl justify-between px-4 py-3">
        <Link href="/" className="flex items-center tracking-tight">
          <Image
            src="/img/Logo_2.svg"
            alt="Logo"
            width={0}
            height={0}
            style={{ width: "auto", height: "5.5vh" }} // altura fixa, largura ajusta
          />
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
