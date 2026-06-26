import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Por favor ingresá un email válido.');
      return;
    }
    setError('');
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="newsletter-section" id="contacto">
      <Container>
        <Row className="justify-content-center">
          <Col md={7} lg={5} className="text-center">
            <p style={{ color: '#c47a3a', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
              📬 Comunidad lectora
            </p>
            <h2 className="mb-2">Suscribite a nuestro newsletter</h2>
            <p style={{ color: '#aaa', fontWeight: 300, marginBottom: '2rem' }}>
              Recibí novedades, recomendaciones y descuentos exclusivos cada semana.
            </p>

            {submitted ? (
              <Alert
                style={{
                  background: 'rgba(139,69,19,0.25)',
                  border: '1px solid #8b4513',
                  color: '#f5f0e8',
                  borderRadius: 0,
                }}
              >
                ✅ ¡Gracias! Te suscribiste correctamente.
              </Alert>
            ) : (
              <Form onSubmit={handleSubmit}>
                <div className="d-flex gap-0">
                  <Form.Control
                    type="email"
                    className="newsletter-input"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    isInvalid={!!error}
                  />
                  <Button type="submit" className="newsletter-btn">
                    Suscribirme
                  </Button>
                </div>
                {error && (
                  <p style={{ color: '#e74c3c', fontSize: '0.82rem', marginTop: '0.5rem' }}>{error}</p>
                )}
              </Form>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
