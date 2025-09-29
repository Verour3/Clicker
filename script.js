let numeroDeCliques = 0; // começa com zero cliques

function atualizarTela() {
  document.getElementById("contador").innerText = numeroDeCliques; // mostra na tela o valor atual
}

function aumentar() {
  numeroDeCliques++; // incrementa o número de cliques
  atualizarTela();
}

function diminuir() {
  numeroDeCliques = Math.max(0, numeroDeCliques - 1); // nunca menor que 0
  atualizarTela();
}

function reiniciar() {
  numeroDeCliques = 0; // zera o número de cliques
  atualizarTela();
}
