function prepararPedido(callback) {
  console.log("Preparando pedido...");

  setTimeout(callback, 2000);
}

function pedidoPronto() {
  console.log("Pedido pronto!");
}

prepararPedido(pedidoPronto);