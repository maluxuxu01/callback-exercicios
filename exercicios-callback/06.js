
const processarNumero = (numero, callback) => callback(numero);

const mostrarTriplo = num => console.log(`O triplo de ${num} é: ${num * 3}`);

processarNumero(3, mostrarTriplo);
processarNumero(7, mostrarTriplo);
processarNumero(12, mostrarTriplo);