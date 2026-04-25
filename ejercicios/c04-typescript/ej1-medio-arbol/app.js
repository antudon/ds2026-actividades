function generarAsteriscos(n: number): string {
  let resultado: string = "";
  for (let i = 0; i < n; i++) {
    resultado += "*";
  }
  return resultado;
}

const btn = document.querySelector('#btn') as HTMLButtonElement;
btn.addEventListener('click', () => {
  const input = document.querySelector('#altura') as HTMLInputElement;
  const altura: number = parseInt(input.value);
  const error = document.querySelector('#error') as HTMLParagraphElement;
  const resultado = document.querySelector('#resultado') as HTMLPreElement;

  if (!altura || altura < 1) {
    error.textContent = "Ingresa un numero valido mayor a 0";
    resultado.textContent = "";
    return;
  }

  error.textContent = "";
  let arbol: string = "";
  for (let i = 1; i <= altura; i++) {
    arbol += generarAsteriscos(i) + "\n";
  }

  resultado.textContent = arbol;
});
