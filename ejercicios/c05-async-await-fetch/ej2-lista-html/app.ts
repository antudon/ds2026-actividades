interface Usuario {
  id: number;
  name: string;
  email: string;
  phone: string;
}

async function obtenerUsuarios(): Promise<Usuario[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) throw new Error("Error al obtener usuarios");
  const usuarios: Usuario[] = await response.json();
  return usuarios;
}

async function main() {
  const cargando = document.getElementById("cargando") as HTMLParagraphElement;
  const error = document.getElementById("error") as HTMLParagraphElement;
  const lista = document.getElementById("lista") as HTMLUListElement;

  try {
    const usuarios = await obtenerUsuarios();
    cargando.style.display = "none";
    usuarios.forEach((u) => {
      const li = document.createElement("li");
      li.textContent = `${u.name} - ${u.email}`;
      lista.appendChild(li);
    });
  } catch (e) {
    cargando.style.display = "none";
    error.style.display = "block";
    error.textContent = "Error al cargar los usuarios.";
  }
}

main();