const input = document.getElementById("input");
const btnBuscar = document.getElementById("btnBuscar");
const resultados = document.getElementById("resultados");
const error = document.getElementById("error");

async function buscarLibros(query) {
  const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`);
  if (!response.ok) throw new Error("Error al buscar libros");
  const data = await response.json();
  return data.docs.slice(0, 10);
}

async function main() {
  btnBuscar.addEventListener("click", async () => {
    const query = input.value.trim();
    resultados.innerHTML = "";
    error.style.display = "none";

    if (!query) {
      error.style.display = "block";
      error.textContent = "Por favor ingresá un término de búsqueda.";
      return;
    }

    try {
      const libros = await buscarLibros(query);
      libros.forEach((libro) => {
        const col = document.createElement("div");
        col.className = "col-md-4 mb-4";
        col.innerHTML = `
          <div class="card h-100">
            <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Libro">
            <div class="card-body">
              <h5 class="card-title">${libro.title}</h5>
              <p class="card-text">${libro.author_name ? libro.author_name[0] : "Desconocido"}</p>
              <p class="card-text"><small>${libro.first_publish_year ?? "Año no disponible"}</small></p>
              <a href="libro.html" class="btn btn-primary">Ver más</a>
            </div>
          </div>
        `;
        resultados.appendChild(col);
      });
    } catch (e) {
      error.style.display = "block";
      error.textContent = "Error al buscar libros.";
    }
  });
}

main();