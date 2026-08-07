import type { Libro } from '../types/libro.types'

const libros: Libro[] = [
  { id: 1, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', precio: 2990, imagen: 'https://covers.openlibrary.org/b/id/8231856-L.jpg', disponible: true },
  { id: 2, titulo: 'Ficciones', autor: 'Jorge Luis Borges', precio: 2290, imagen: 'https://covers.openlibrary.org/b/id/8226144-L.jpg', disponible: true },
  { id: 3, titulo: 'Rayuela', autor: 'Julio Cortázar', precio: 2790, imagen: 'https://covers.openlibrary.org/b/id/8739188-L.jpg', disponible: false },
]

let proximoId = 4

export function findAll(disponible?: boolean): Libro[] {
  if (disponible === undefined) return libros
  return libros.filter(l => l.disponible === disponible)
}

export function findById(id: number): Libro | undefined {
  return libros.find(l => l.id === id)
}

export function create(datos: Omit<Libro, 'id'>): Libro {
  const nuevo: Libro = { id: proximoId++, ...datos }
  libros.push(nuevo)
  return nuevo
}

export function update(id: number, datos: Omit<Libro, 'id'>): Libro | undefined {
  const idx = libros.findIndex(l => l.id === id)
  if (idx === -1) return undefined
  libros[idx] = { id, ...datos }
  return libros[idx]
}

export function remove(id: number): boolean {
  const idx = libros.findIndex(l => l.id === id)
  if (idx === -1) return false
  libros.splice(idx, 1)
  return true
}
