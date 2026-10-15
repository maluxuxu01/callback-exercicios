function verificarNota(nota, callback) {
  callback(nota);
}

function callbackStatus(nota) {
  if (nota >= 6) {
    console.log("Aprovado");
  } else {
    console.log("Recuperação");
  }
}

verificarNota(7.5, callbackStatus);
verificarNota(4.0, callbackStatus);