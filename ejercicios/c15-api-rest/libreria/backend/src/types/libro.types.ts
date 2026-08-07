export interface Libro {
  id: number
  titulo: string
  autor: string
  precio: number
  imagen: string
  disponible: boolean
}

export interface Autor {
  id: number
  nombre: string
  nacionalidad: string
}
