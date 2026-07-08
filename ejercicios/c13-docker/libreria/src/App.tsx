import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home';
import { Catalogo } from './pages/Catalogo';
import { LibroDetalle } from './pages/LibroDetalle';
import { LibroNuevo } from './pages/LibroNuevo';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/libros/:id" element={<LibroDetalle libros={[]} />} />
        <Route path="/libros/nuevo" element={<LibroNuevo onAgregar={() => {}} />} />
      </Routes>
    </Layout>
  );
}

export default App;
