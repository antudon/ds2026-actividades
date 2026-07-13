import express from 'express'

const app = express()
const PORT = process.env.PORT ?? 3000

interface Libro {
  id: number
  titulo: string
  autor: string
  precio: number
  imagen: string
  disponible: boolean
}

const libros: Libro[] = [
  {
    id: 1,
    titulo: 'Cien años de soledad',
    autor: 'Gabriel García Márquez',
    precio: 2990,
    imagen: 'https://covers.openlibrary.org/b/id/8231856-L.jpg',
    disponible: true,
  },
  {
    id: 2,
    titulo: 'Ficciones',
    autor: 'Jorge Luis Borges',
    precio: 2290,
    imagen: 'https://covers.openlibrary.org/b/id/8226144-L.jpg',
    disponible: true,
  },
  {
    id: 3,
    titulo: 'Rayuela',
    autor: 'Julio Cortázar',
    precio: 2790,
    imagen: 'https://covers.openlibrary.org/b/id/8739188-L.jpg',
    disponible: false,
  },
]

app.get('/', (_req, res) => {
  res.json({ message: 'API Librería funcionando', status: 'ok' })
})

app.get('/libros', (_req, res) => {
  res.json(libros)
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
