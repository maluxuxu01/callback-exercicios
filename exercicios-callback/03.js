function somar(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}

function calcular(a, b, operacao) {
  const resultado = operacao(a, b);
  console.log(`O resultado da operação é: ${resultado}`);
}

calcular(10, 5, somar); 
calcular(10, 5, multiplicar);