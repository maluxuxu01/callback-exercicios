function gerarMensagem() {
    return "Ação confirmada!";
}

function confirmarAcao(callback) {
    const texto = callback();
    console.log(texto);
}

confirmarAcao(gerarMensagem);