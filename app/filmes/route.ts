// app/filmes/route.ts
import { NextResponse } from 'next/server'
import { films } from '@/content/films'

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tag = searchParams.get('tag');
  const slug = searchParams.get('slug');
  
  // Filtrar por tag se especificada
  if (tag) {
    const filtrados = films.filter(film => 
      film.tags && film.tags.includes(tag)
    );
    return NextResponse.json({ filmes: filtrados });
  }
  
  // Buscar filme específico por slug
  if (slug) {
    const filme = films.find(f => f.slug === slug);
    if (!filme) {
      return NextResponse.json(
        { error: 'Filme não encontrado' },
        { status: 404 }
      );
    }
    return NextResponse.json(filme);
  }
  
  // Retornar todos os filmes
  return NextResponse.json({ filmes: films });
}
