// app/layout.tsx
export const runtime = 'nodejs';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mostra de Cinema",
  description: "Seleção de filmes exibidos via YouTube.",
  openGraph: {
    title: "Mostra de Cinema",
    description: "Seleção de filmes exibidos via YouTube.",
    type: "website",
    url: "https://example.com", // ajuste se já tiver domínio
  },
  robots: { index: true, follow: true },
};

export const viewport = { width: "device-width", initialScale: 1, maximumScale: 1, themeColor: [
  { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  { media: '(prefers-color-scheme: dark)',  color: '#000000' },
],
colorScheme: 'light dark', }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className="min-h-screen bg-white text-zinc-900 antialiased font-sans">
        <div className="flex min-h-screen flex-col">
          <Header />

          <main className="flex-1">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
