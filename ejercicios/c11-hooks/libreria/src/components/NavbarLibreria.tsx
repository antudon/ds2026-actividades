import { useState } from 'react';
import { Navbar, Nav, Container, Badge, Form, InputGroup, Button } from 'react-bootstrap';

const NavbarLibreria = () => {
  const [cartCount] = useState(0);
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      className="navbar-libreria"
      expanded={expanded}
      onToggle={setExpanded}
      sticky="top"
    >
      <Container fluid="xl">
        <Navbar.Brand href="#">
          Página <span>del Libro</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" style={{ borderColor: '#555' }}>
          <span style={{ color: '#ccc', fontSize: '1.2rem' }}>☰</span>
        </Navbar.Toggle>

        <Navbar.Collapse id="main-nav">
          <Nav className="me-auto ms-4 gap-1">
            <Nav.Link href="#destacados">Destacados</Nav.Link>
            <Nav.Link href="#categorias">Categorías</Nav.Link>
            <Nav.Link href="#novedades">Novedades</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>

          <div className="d-flex align-items-center gap-3 mt-2 mt-lg-0">
            <InputGroup style={{ width: '220px' }}>
              <Form.Control
                placeholder="Buscar libros..."
                style={{
                  borderRadius: 0,
                  border: 'none',
                  fontSize: '0.85rem',
                  background: '#2a2520',
                  color: '#ccc',
                }}
              />
              <Button
                style={{
                  borderRadius: 0,
                  background: '#8b4513',
                  border: 'none',
                  fontSize: '0.85rem',
                }}
              >
                🔍
              </Button>
            </InputGroup>

            <Nav.Link href="#" style={{ color: '#ccc', position: 'relative', padding: '0.3rem' }}>
              🛒
              {cartCount > 0 && (
                <Badge
                  bg="danger"
                  style={{ position: 'absolute', top: '-4px', right: '-4px', fontSize: '0.6rem' }}
                >
                  {cartCount}
                </Badge>
              )}
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarLibreria;
