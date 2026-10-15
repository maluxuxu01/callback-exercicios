function mostrarBoasVindas() {
  console.log("Seja muito bem-vindo ao sistema!");
}

function mostrarDespedida() {
  console.log("Até logo! Esperamos ver você em breve.");
}

function executarMensagem(callback) {
  callback();
}

executarMensagem(mostrarBoasVindas);

executarMensagem(mostrarDespedida);