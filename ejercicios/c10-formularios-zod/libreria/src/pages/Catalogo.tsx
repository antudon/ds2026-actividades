import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard/BookCard';
import type { Book } from '../types/libro';

interface Props {
  libros: Book[];
}

export function Catalogo({ libros }: Props) {
  const [activeGenre, setActiveGenre] = useState<string>('Todos');

  const genres = ['Todos', ...Array.from(new Set(libros.map(b => b.genre)))];

  const filteredBooks = activeGenre === 'Todos'
    ? libros
    : libros.filter(b => b.genre === activeGenre);

  return (
    <section style={{ padding: '4rem 0', background: 'var(--color-cream)' }}>
      <Container>
        <div className="d-flex justify-content-between align-items-start flex-wrap gap-3 mb-4">
          <h2 className="section-title mb-0">Catalogo completo</h2>
          <div className="d-flex align-items-center gap-3 flex-wrap">
            <div className="d-flex flex-wrap gap-2">
              {genres.map(genre => (
                <button
                  key={genre}
                  onClick={() => setActiveGenre(genre)}
                  style={{
                    background: activeGenre === genre ? '#1a1614' : 'white',
                    color: activeGenre === genre ? '#f5f0e8' : '#6b5e52',
                    border: '1px solid #ccc',
                    borderRadius: 0,
                    padding: '0.35rem 0.85rem',
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-body)',
                    letterSpacing: '0.03em',
                    transition: 'all 0.2s',
                  }}
                >
                  {genre}
                </button>
              ))}
            </div>
            <Link to="/libros/nuevo" style={{ textDecoration: 'none' }}>
              <button
                style={{
                  background: '#8b4513',
                  color: '#f5f0e8',
                  border: 'none',
                  borderRadius: 0,
                  padding: '0.35rem 0.85rem',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  fontWeight: 700,
                  letterSpacing: '0.03em',
                }}
              >
                + Agregar libro
              </button>
            </Link>
          </div>
        </div>
        <Row className="g-4">
          {filteredBooks.map(book => (
            <Col key={book.id} xs={12} sm={6} md={4} lg={3}>
              <BookCard book={book} />
            </Col>
          ))}
        </Row>
        {filteredBooks.length === 0 && (
          <div className="text-center py-5" style={{ color: 'var(--color-muted)' }}>
            <p style={{ fontSize: '1.2rem' }}>No hay libros en este genero.</p>
          </div>
        )}
      </Container>
    </section>
  );
}
