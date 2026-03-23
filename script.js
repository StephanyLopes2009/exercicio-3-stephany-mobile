// Pegando os elementos que vou usar
const display = document.getElementById('contador');
const btn = document.getElementById('botao');

// Variável para guardar o número de cliques
let valor = 0;

// Função que roda toda vez que clicar no botão
btn.onclick = function() {
    valor = valor + 1; // Soma 1 ao total
    display.innerText = valor; // Mostra o novo valor no HTML
};
