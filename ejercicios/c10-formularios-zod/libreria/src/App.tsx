import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home';
import { Catalogo } from './pages/Catalogo';
import { LibroDetalle } from './pages/LibroDetalle';
import { LibroNuevo } from './pages/LibroNuevo';
import { books as librosIniciales } from './data/books';
import type { Book } from './types/libro';

function App() {
  const [libros, setLibros] = useState<Book[]>(librosIniciales);

  const agregarLibro = (nuevo: Book) => {
    setLibros([...libros, nuevo]);
  };

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo libros={libros} />} />
        <Route path="/libros/:id" element={<LibroDetalle libros={libros} />} />
        <Route path="/libros/nuevo" element={<LibroNuevo onAgregar={agregarLibro} />} />
      </Routes>
    </Layout>
  );
}

export default App;
