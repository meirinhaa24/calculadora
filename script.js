function adicionarNaTela(valor) {
  document.getElementById("display").value += valor;
}

function limpar() {
  document.getElementById("display").value = "";
}

function calcular() {
  var display = document.getElementById("display").value;
  var resultado = eval(display);
  document.getElementById("display").value = resultado;
}