const listaEntradas = document.getElementById('lista-entradas');
        const totalElemento = document.getElementById('total');
        const entradaForm = document.getElementById('entrada-form');

        let total = 0.00;

        function adicionarEntrada() {
            const nomeInput = document.getElementById('nome');
            const valorInput = document.getElementById('valor');

            const nome = nomeInput.value;
            const valor = parseFloat(valorInput.value);

            if (nome && !isNaN(valor)) {
                const itemLista = document.createElement('li');
                itemLista.textContent = `${nome}: $${valor.toFixed(2)}`;
                listaEntradas.appendChild(itemLista);

                total += valor;

                totalElemento.textContent = `Total: $${total.toFixed(2)}`;

                // Limpa os campos do formulário
                nomeInput.value = '';
                valorInput.value = '';
            } else {
                alert('Por favor, insira um nome e um valor válido.');
            }
        }

        adicionarEntrada();