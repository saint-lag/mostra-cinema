// app/layout.tsx
export const runtime = 'nodejs';
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Carregando a fonte Muro localmente
const muro = localFont({
  src: [
    {
      path: '../public/fonts/Muro/Muro.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Muro/Muro.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Muro/Muro.otf',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-muro',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Mostra de Cinema',
    default: 'Mostra de Cinema',
  },
  description: "Seleção de filmes exibidos via YouTube.",
  openGraph: {
    title: "Mostra de Cinema",
    description: "Seleção de filmes exibidos via YouTube.",
    type: "website",
    url: "https://exemplo.com.br",
    siteName: "Mostra de Cinema",
    locale: "pt_BR",
  },
  robots: { index: true, follow: true },
};

export const viewport = { 
  width: "device-width", 
  initialScale: 1, 
  maximumScale: 1, 
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#e1ffe2' },
    { media: '(prefers-color-scheme: dark)', color: '#425a12' },
  ],
  colorScheme: 'light' 
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`h-full ${muro.variable}`}>
      <body className="min-h-screen bg-white text-musgo antialiased font-sans">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
