import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import { libroSchema } from '../schemas/libroSchema';
import type { LibroValidado } from '../schemas/libroSchema';
import type { Book } from '../types/libro';

interface Props {
  onAgregar: (libro: Book) => void;
}

const IMG_PLACEHOLDER = 'https://placehold.co/300x400/1a1614/f5f0e8?text=Nuevo+Libro';

export function LibroNuevo({ onAgregar }: Props) {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<LibroValidado>({
    resolver: zodResolver(libroSchema),
    defaultValues: { disponible: true },
  });

  const onSubmit = (data: LibroValidado) => {
    const nuevo: Book = {
      id: Date.now(),
      title: data.titulo,
      author: data.autor,
      price: data.precio,
      cover: IMG_PLACEHOLDER,
      genre: 'Sin genero',
      rating: 3,
      featured: false,
    };
    onAgregar(nuevo);
    navigate('/catalogo');
  };

  return (
    <section style={{ padding: '4rem 0', background: 'var(--color-cream)', minHeight: '60vh' }}>
      <Container style={{ maxWidth: 480 }}>
        <h2 style={{ fontFamily: 'var(--font-display)', marginBottom: '2rem' }}>Agregar nuevo libro</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              {...register('titulo')}
              isInvalid={!!errors.titulo}
              placeholder="Ej: Cien anos de soledad"
            />
            <Form.Control.Feedback type="invalid">
              {errors.titulo?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Autor</Form.Label>
            <Form.Control
              {...register('autor')}
              isInvalid={!!errors.autor}
              placeholder="Ej: Gabriel Garcia Marquez"
            />
            <Form.Control.Feedback type="invalid">
              {errors.autor?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              {...register('precio')}
              isInvalid={!!errors.precio}
              placeholder="Ej: 2990"
            />
            <Form.Control.Feedback type="invalid">
              {errors.precio?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Check
            className="mb-4"
            label="Disponible"
            {...register('disponible')}
          />

          <Button
            type="submit"
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
            Agregar libro
          </Button>
        </Form>
      </Container>
    </section>
  );
}
