import bcrypt from "bcrypt";
import { prisma } from "../src/config/prisma";

const autores = [
  { nombre: "Gabriel Garcia Marquez", nacionalidad: "Colombiana" },
  { nombre: "Jorge Luis Borges", nacionalidad: "Argentina" },
  { nombre: "Julio Cortazar", nacionalidad: "Argentina" },
  { nombre: "Umberto Eco", nacionalidad: "Italiana" },
  { nombre: "Paulo Coelho", nacionalidad: "Brasilena" },
];

const categorias = [
  { nombre: "Literatura" },
  { nombre: "Misterio" },
  { nombre: "Ficcion" },
  { nombre: "Cuentos" },
];

const libros = [
  { titulo: "Cien anos de soledad", autor: "Gabriel Garcia Marquez", precio: 2990, imagen: "https://covers.openlibrary.org/b/id/8231856-L.jpg", disponible: true, cats: ["Literatura"] },
  { titulo: "Ficciones", autor: "Jorge Luis Borges", precio: 2290, imagen: "https://covers.openlibrary.org/b/id/8226144-L.jpg", disponible: true, cats: ["Cuentos", "Literatura"] },
  { titulo: "Rayuela", autor: "Julio Cortazar", precio: 2790, imagen: "https://covers.openlibrary.org/b/id/8739188-L.jpg", disponible: false, cats: ["Literatura"] },
  { titulo: "El nombre de la rosa", autor: "Umberto Eco", precio: 3490, imagen: "https://covers.openlibrary.org/b/id/8739161-L.jpg", disponible: true, cats: ["Misterio"] },
  { titulo: "El Alquimista", autor: "Paulo Coelho", precio: 1990, imagen: "https://covers.openlibrary.org/b/id/8739135-L.jpg", disponible: true, cats: ["Ficcion"] },
];

const usuarios = [
  { email: "admin@libreria.test", nombre: "Admin", rol: "ADMIN" as const, password: "Admin1234" },
  { email: "cliente@libreria.test", nombre: "Cliente", rol: "CLIENTE" as const, password: "Cliente1234" },
];

async function main() {
  await prisma.autor.createMany({ data: autores });
  await prisma.categoria.createMany({ data: categorias });
  for (const { autor, cats, ...datos } of libros) {
    await prisma.libro.create({
      data: {
        ...datos,
        autor: { connect: { nombre: autor } },
        categorias: { connect: cats.map(nombre => ({ nombre })) },
      },
    });
  }
  for (const { password, ...datos } of usuarios) {
    await prisma.usuario.upsert({
      where: { email: datos.email },
      update: {},
      create: { ...datos, passwordHash: await bcrypt.hash(password, 10) },
    });
  }
  console.log("Seed completado");
}

main().catch(console.error).finally(() => prisma.$disconnect());
