import type { Autor } from '../types/libro.types'

const autores: Autor[] = [
  { id: 1, nombre: 'Gabriel García Márquez', nacionalidad: 'Colombiana' },
  { id: 2, nombre: 'Jorge Luis Borges', nacionalidad: 'Argentina' },
  { id: 3, nombre: 'Julio Cortázar', nacionalidad: 'Argentina' },
]

let proximoId = 4

export function findAll(): Autor[] {
  return autores
}

export function findById(id: number): Autor | undefined {
  return autores.find(a => a.id === id)
}

export function create(datos: Omit<Autor, 'id'>): Autor {
  const nuevo: Autor = { id: proximoId++, ...datos }
  autores.push(nuevo)
  return nuevo
}

export function update(id: number, datos: Omit<Autor, 'id'>): Autor | undefined {
  const idx = autores.findIndex(a => a.id === id)
  if (idx === -1) return undefined
  autores[idx] = { id, ...datos }
  return autores[idx]
}

export function remove(id: number): boolean {
  const idx = autores.findIndex(a => a.id === id)
  if (idx === -1) return false
  autores.splice(idx, 1)
  return true
}
