import { prisma } from "../src/config/prisma";

const libros = [
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", precio: 2990, imagen: "https://covers.openlibrary.org/b/id/8231856-L.jpg", disponible: true },
  { titulo: "Ficciones", autor: "Jorge Luis Borges", precio: 2290, imagen: "https://covers.openlibrary.org/b/id/8226144-L.jpg", disponible: true },
  { titulo: "Rayuela", autor: "Julio Cortázar", precio: 2790, imagen: "https://covers.openlibrary.org/b/id/8739188-L.jpg", disponible: false },
  { titulo: "El nombre de la rosa", autor: "Umberto Eco", precio: 3490, imagen: "https://covers.openlibrary.org/b/id/8739161-L.jpg", disponible: true },
  { titulo: "El Alquimista", autor: "Paulo Coelho", precio: 1990, imagen: "https://covers.openlibrary.org/b/id/8739135-L.jpg", disponible: true },
];

const autores = [
  { nombre: "Gabriel García Márquez", nacionalidad: "Colombiana" },
  { nombre: "Jorge Luis Borges", nacionalidad: "Argentina" },
  { nombre: "Julio Cortázar", nacionalidad: "Argentina" },
  { nombre: "Umberto Eco", nacionalidad: "Italiana" },
  { nombre: "Paulo Coelho", nacionalidad: "Brasileña" },
];

async function main() {
  await prisma.libro.createMany({ data: libros });
  await prisma.autor.createMany({ data: autores });
  console.log("Seed completado");
}

main().catch(console.error).finally(() => prisma.$disconnect());
