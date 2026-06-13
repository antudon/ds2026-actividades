import { useParams, Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import type { Book } from '../types/libro';

interface Props {
  libros: Book[];
}

export function LibroDetalle({ libros }: Props) {
  const { id } = useParams<{ id: string }>();
  const libro = libros.find(b => b.id === Number(id));

  if (!libro) {
    return (
      <Container style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h2>Libro no encontrado</h2>
        <Link to="/catalogo">
          <Button style={{ background: '#1a1614', border: 'none', borderRadius: 0, marginTop: '1rem' }}>
            Volver al catalogo
          </Button>
        </Link>
      </Container>
    );
  }

  return (
    <section style={{ padding: '4rem 0', background: 'var(--color-cream)', minHeight: '60vh' }}>
      <Container>
        <Link to="/catalogo" style={{ color: '#8b4513', fontSize: '0.9rem' }}>
          &larr; Volver al catalogo
        </Link>
        <div className="d-flex flex-column flex-md-row gap-5 mt-4">
          <img
            src={libro.cover}
            alt={libro.title}
            style={{ width: '200px', height: '300px', objectFit: 'cover', boxShadow: '0 8px 20px rgba(0,0,0,0.2)' }}
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://placehold.co/200x300/1a1614/f5f0e8?text=Sin+imagen';
            }}
          />
          <div>
            <span className="genre-badge">{libro.genre}</span>
            <h1 style={{ fontFamily: 'var(--font-display)', marginTop: '0.5rem' }}>{libro.title}</h1>
            <p style={{ color: '#8b4513', fontSize: '1rem', marginBottom: '1rem' }}>{libro.author}</p>
            <p style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>
              
            </p>
            <Button
              style={{
                background: '#1a1614',
                border: 'none',
                borderRadius: 0,
                padding: '0.75rem 2rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              Agregar al carrito
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
