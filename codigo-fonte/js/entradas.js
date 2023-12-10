let entradas = [];
let total = 0;

function somaEntradas() {
    const nomeEntradas = (document.getElementById('goalName').value);
    const valores = (document.getElementById('goalValue').value);

    let entrada = {
        nome: nomeEntradas,
        preco: valores
    };

    entradas.push(entrada);

    let lista = `${entrada.nome} =============== ${entrada.preco.toFixed(2)}`;
    document.getElementById('goalList').innerHTML = lista;
}

function recebeEventoForm(evento) {
    evento.preventDefault();
    somaEntradas();
}

const form = document.getElementById('form');
form.addEventListener('submit', recebeEventoForm);