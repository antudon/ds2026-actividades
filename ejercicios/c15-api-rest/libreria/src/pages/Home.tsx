import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import BookCard from '../components/BookCard/BookCard';
import { books, categories } from '../data/books';

export function Home() {
  const [activeGenre, setActiveGenre] = useState<string>('Todos');

  const genres = ['Todos', ...Array.from(new Set(books.map(b => b.genre)))];

  const filteredBooks = activeGenre === 'Todos'
    ? books
    : books.filter(b => b.genre === activeGenre);

  return (
    <>
      {/* Hero */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={7}>
              <p style={{
                color: '#c47a3a',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                fontSize: '0.8rem',
                marginBottom: '1rem',
              }}>
                📖 Tu próxima gran lectura te espera
              </p>
              <h1>
                Descubrí mundos
                <em> entre páginas</em>
              </h1>
              <p className="my-4" style={{ maxWidth: '480px' }}>
                Miles de títulos, autores consagrados y nuevas voces. Libros para todos los
                gustos, con envío a domicilio y precios que te van a sorprender.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Button className="hero-btn" href="#destacados">
                  Ver catálogo
                </Button>
                <Button
                  variant="outline-light"
                  style={{
                    borderRadius: 0,
                    fontWeight: 300,
                    letterSpacing: '0.05em',
                    fontSize: '0.85rem',
                    padding: '0.75rem 2rem',
                  }}
                  href="#categorias"
                >
                  Explorar géneros
                </Button>
              </div>
            </Col>
            <Col lg={5} className="d-none d-lg-flex justify-content-end">
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                transform: 'rotate(-3deg)',
                opacity: 0.85,
              }}>
                {books.slice(0, 4).map(book => (
                  <img
                    key={book.id}
                    src={book.cover}
                    alt={book.title}
                    style={{ width: '110px', height: '160px', objectFit: 'cover', boxShadow: '0 8px 20px rgba(0,0,0,0.4)' }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Categorías */}
      <section className="categories-section" id="categorias">
        <Container>
          <h2 className="section-title">Explorar por género</h2>
          <Row className="g-3">
            {categories.map(cat => (
              <Col key={cat.name} xs={6} sm={4} md={2}>
                <div
                  className="category-item"
                  onClick={() => {
                    setActiveGenre(cat.name);
                    document.getElementById('destacados')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className="category-icon">{cat.icon}</span>
                  <h6>{cat.name}</h6>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Catálogo */}
      <section style={{ padding: '4rem 0', background: 'var(--color-cream)' }} id="destacados">
        <Container>
          <div className="d-flex justify-content-between align-items-start flex-wrap gap-3 mb-4">
            <h2 className="section-title mb-0">Catálogo de libros</h2>
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
              <p style={{ fontSize: '1.2rem' }}>No hay libros en este género.</p>
            </div>
          )}
        </Container>
      </section>

      {/* Banner */}
      <section style={{ background: '#8b4513', padding: '3rem 2rem', textAlign: 'center' }}>
        <Container>
          <h3 style={{ fontFamily: 'var(--font-display)', color: '#f5f0e8', marginBottom: '0.5rem' }}>
            🚚 Envío gratis en compras mayores a .000
          </h3>
          <p style={{ color: '#f0d5bc', fontWeight: 300, marginBottom: 0 }}>
            Llegamos a todo el país · Entrega en 24 a 72 hs hábiles
          </p>
        </Container>
      </section>
    </>
  );
}
