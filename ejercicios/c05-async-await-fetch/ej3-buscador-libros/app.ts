interface LibroOL {
  title: string;
  author_name?: string[];
  first_publish_year?: number;
}

interface RespuestaAPI {
  docs: LibroOL[];
}

async function buscarLibros(query: string): Promise<LibroOL[]> {
  const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`);
  if (!response.ok) throw new Error("Error al buscar libros");
  const data: RespuestaAPI = await response.json();
  return data.docs.slice(0, 10);
}

async function main() {
  const btn = document.getElementById("btnBuscar") as HTMLButtonElement;
  const input = document.getElementById("input") as HTMLInputElement;
  const resultados = document.getElementById("resultados") as HTMLDivElement;
  const error = document.getElementById("error") as HTMLParagraphElement;

  btn.addEventListener("click", async () => {
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
        const card = document.createElement("div");
        card.style.border = "1px solid #ccc";
        card.style.margin = "8px";
        card.style.padding = "8px";
        card.innerHTML = `
          <strong>${libro.title}</strong><br/>
          Autor: ${libro.author_name ? libro.author_name[0] : "Desconocido"}<br/>
          Año: ${libro.first_publish_year ?? "No disponible"}
        `;
        resultados.appendChild(card);
      });
    } catch (e) {
      error.style.display = "block";
      error.textContent = "Error al buscar libros.";
    }
  });
}

main();
