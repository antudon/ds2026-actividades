"use strict";
async function obtenerUsuarios() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const usuarios = await response.json();
    return usuarios;
}
async function main() {
    try {
        const usuarios = await obtenerUsuarios();
        usuarios.forEach((u) => {
            console.log(`Nombre: ${u.name} | Email: ${u.email}`);
        });
    }
    catch (error) {
        console.error("Error al obtener usuarios:", error);
    }
}
main();
