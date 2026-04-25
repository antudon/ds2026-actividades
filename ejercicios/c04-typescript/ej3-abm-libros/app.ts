interface Libro {
  isbn: string;
  titulo: string;
  autor: string;
  precio: number;
  disponible: boolean;
}

let catalogo: Libro[] = [
  { isbn: "001", titulo: "El Aleph", autor: "Borges", precio: 1500, disponible: true },
  { isbn: "002", titulo: "Rayuela", autor: "Cortazar", precio: 1800, disponible: true },
  { isbn: "003", titulo: "Ficciones", autor: "Borges", precio: 1200, disponible: false }
];

function renderizar(): void {
  const listado = document.querySelector('#listado') as HTMLUListElement;
  const stats = document.querySelector('#stats') as HTMLParagraphElement;
  listado.innerHTML = "";
  catalogo.forEach(libro => {
    const li = document.createElement('li');
    li.textContent = libro.titulo + " - " + libro.autor + " - $" + libro.precio;
    const btn = document.createElement('button');
    btn.textContent = "Eliminar";
    btn.addEventListener('click', () => eliminarLibro(libro.isbn));
    li.appendChild(btn);
    listado.appendChild(li);
  });
  const total = catalogo.length;
  const promedio = total > 0 ? catalogo.reduce((acc, l) => acc + l.precio, 0) / total :