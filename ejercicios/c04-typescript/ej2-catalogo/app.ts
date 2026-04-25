interface Libro {
  isbn: string;
  titulo: string;
  autor: string;
  precio: number;
  disponible: boolean;
  genero?: string;
}

const catalogo: Libro[] = [
  { isbn: "001", titulo: "El Aleph", autor: "Borges", precio: 1500, disponible: true, genero: "Ficcion" },
  
  { isbn: "002", titulo: "Ficciones", autor: "Borges", precio: 1200, disponible: false, genero: "Ficcion" },
  { isbn: "003", titulo: "Rayuela", autor: "Cortazar", precio: 1800, disponible: true, genero: "Novela" },
  
  { isbn: "004", titulo: "Cien anios de soledad", autor: "Garcia Marquez", precio: 2000, disponible: true, genero: "Novela" },
  { isbn: "005", titulo: "La sombra del viento", autor: "Zafon", precio: 900, disponible: false, genero: "Misterio" }
];

function buscarPorAutor(autor: string): Libro[] {
  return catalogo.filter(libro => libro.autor.toLowerCase().includes(autor.toLowerCase()));
}


function librosDisponibles(): Libro[] {
  return catalogo.filter(libro => libro.disponible);

}

function precioPromedio(libros: Libro[]): number {
  if (libros.length === 0) return 0;
  const suma = libros.reduce((acc, libro) => acc + libro.precio, 0);
  return suma / libros.length;
}

function renderizar(libros: Libro[]): void {
  const listado = document.querySelector('#listado') as HTMLUListElement;
  const stats = document.querySelector('#stats') as HTMLParagraphElement;
  listado.innerHTML = "";
  libros.forEach(libro => {
    const li = document.createElement('li');
    li.textContent = libro.titulo + " - " + libro.autor + " - $" + libro.precio + " - " + (libro.disponible ? "Disponible" : "No disponible");
    listado.appendChild(li);
  });
  stats.textContent = "Cantidad: " + libros.length + " | Precio promedio: $" + precioPromedio(libros).toFixed(2);
}

document.querySelector('#filtrar')!.addEventListener('click', () => {
  const input = document.querySelector('#filtroAutor') as HTMLInputElement;
  renderizar(buscarPorAutor(input.value));
});

document.querySelector('#mostrarDisponibles')!.addEventListener('click', () => {
 
 
    renderizar(librosDisponibles());
});

document.querySelector('#mostrarTodos')!.addEventListener('click', () => {
 
    renderizar(catalogo);
});

renderizar(catalogo);