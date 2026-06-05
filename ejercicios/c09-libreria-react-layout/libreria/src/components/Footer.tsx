import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer-libreria">
      <Container>
        <Row className="mb-4">
          <Col md={4} className="mb-4 mb-md-0">
            <div className="footer-brand">
              Página <span>del Libro</span>
            </div>
            <p style={{ marginTop: '0.75rem', lineHeight: 1.7 }}>
              Tu librería online de confianza. Más de 10.000 títulos disponibles con
              envío a todo el país.
            </p>
            <div style={{ marginTop: '1rem', fontSize: '1.2rem', display: 'flex', gap: '0.75rem' }}>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
            </div>
          </Col>

          <Col md={2} sm={6} className="mb-4 mb-md-0">
            <div className="footer-title">Explorar</div>
            <a href="#">Novedades</a>
            <a href="#">Más vendidos</a>
            <a href="#">Ofertas</a>
            <a href="#">Por autor</a>
          </Col>

          <Col md={2} sm={6} className="mb-4 mb-md-0">
            <div className="footer-title">Géneros</div>
            <a href="#">Literatura</a>
            <a href="#">Misterio</a>
            <a href="#">Ciencia Ficción</a>
            <a href="#">Infantil</a>
          </Col>

          <Col md={3} sm={6}>
            <div className="footer-title">Información</div>
            <a href="#">Sobre nosotros</a>
            <a href="#">Cómo comprar</a>
            <a href="#">Envíos</a>
            <a href="#">Devoluciones</a>
            <a href="#">Contacto</a>
          </Col>
        </Row>

        <hr className="footer-divider" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center" style={{ fontSize: '0.8rem' }}>
          <span>© {new Date().getFullYear()} Página del Libro. Todos los derechos reservados.</span>
          <span style={{ marginTop: '0.5rem' }}>
            Hecho con ❤️ para amantes de los libros
          </span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
