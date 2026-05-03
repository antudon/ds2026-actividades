interface Usuario {
  id: number;
  name: string;
  email: string;
  phone: string;
}

async function obtenerUsuarios(): Promise<Usuario[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const usuarios: Usuario[] = await response.json();
  return usuarios;
}

async function main() {
  try {
    const usuarios = await obtenerUsuarios();
    usuarios.forEach((u) => {
      console.log(`Nombre: ${u.name} | Email: ${u.email}`);
    });
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
  }
}

main();