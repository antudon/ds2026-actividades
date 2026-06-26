# c08 - Librería React

Proyecto desarrollado para la clase 8. Home de librería maquetada con React + TypeScript + React Bootstrap.

## Tecnologías

- **Vite** — bundler y entorno de desarrollo
- **React 18** + **TypeScript**
- **React Bootstrap 2** + **Bootstrap 5** — librería UI

## Componentes

| Componente | Descripción | useState |
|---|---|---|
| `<NavbarLibreria />` | Barra de navegación con búsqueda y carrito | ✅ `expanded` |
| `<BookCard />` | Card reutilizable para cada libro | ✅ `liked`, `likes` |
| `<Newsletter />` | Sección de suscripción con validación | ✅ `email`, `submitted`, `error` |
| `<Footer />` | Pie de página con links y redes | — |

## Funcionalidades

- 🔍 Filtro de libros por género (en `App.tsx` con `useState`)
- ❤️ Botón "Me gusta" en cada libro (toggle con contador)
- 📬 Formulario de newsletter con validación
- 📚 Categorías interactivas que filtran el catálogo
- Imágenes con fallback si la portada no carga

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

## Estructura

```
src/
├── components/
│   ├── NavbarLibreria.tsx
│   ├── BookCard.tsx
│   ├── Newsletter.tsx
│   └── Footer.tsx
├── data/
│   └── books.ts
├── App.tsx
├── main.tsx
└── index.css
```
