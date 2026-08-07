import { Container, Row, Col } from 'react-bootstrap';

export function Footer() {
  return (
    <footer className="footer-libreria">
      <Container>
        <Row className="mb-4">
          <Col md={4} className="mb-4 mb-md-0">
            <div className="footer-brand">
              Pagina <span>del Libro</span>
            </div>
            <p style={{ marginTop: '0.75rem', lineHeight: 1.7 }}>
              Tu libreria online de confianza. Mas de 10.000 titulos disponibles con envio a todo el pais.
            </p>
          </Col>
          <Col md={2} sm={6} className="mb-4 mb-md-0">
            <div className="footer-title">Explorar</div>
            <a href="#">Novedades</a>
            <a href="#">Mas vendidos</a>
            <a href="#">Ofertas</a>
          </Col>
          <Col md={2} sm={6} className="mb-4 mb-md-0">
            <div className="footer-title">Generos</div>
            <a href="#">Literatura</a>
            <a href="#">Misterio</a>
            <a href="#">Clasicos</a>
          </Col>
          <Col md={3} sm={6}>
            <div className="footer-title">Informacion</div>
            <a href="#">Sobre nosotros</a>
            <a href="#">Como comprar</a>
            <a href="#">Envios</a>
            <a href="#">Contacto</a>
          </Col>
        </Row>
        <hr className="footer-divider" />
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center" style={{ fontSize: '0.8rem' }}>
          <span>Pagina del Libro. Todos los derechos reservados.</span>
          <span style={{ marginTop: '0.5rem' }}>Hecho con amor para amantes de los libros</span>
        </div>
      </Container>
    </footer>
  );
}
