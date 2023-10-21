const goals = [];

fetch('https://jsonserver--lopeszd.repl.co/metas')
    .then(response => response.json())
    .then(data => {
        console.log('Metas carregadas do servidor JSON:', data);
        goals.push(...data);
        renderGoals();
    })
    .catch(error => {
        console.error('Erro ao carregar metas do servidor JSON:', error);
    });

function renderGoals() {
    const goalList = document.getElementById('goalList');
    goalList.innerHTML = '';

    goals.forEach((goal, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <input type="text" class="goal-name" value="${goal.name}" readonly>
            <input type="number" class="goal-value" value="${goal.value}" readonly disabled>
            <button class="delete-button" data-index="${index}">X</button>
        `;
        goalList.appendChild(listItem);
    });

    const deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const index = event.target.getAttribute('data-index');
            console.log('Clicado para excluir meta:', goals[index]);
            goals.splice(index, 1);

            saveGoalsToJSON(goals);

            renderGoals();
        });
    });
}

document.getElementById('addGoal').addEventListener('click', () => {
    const goalName = document.getElementById('goalName').value;
    const goalValue = parseFloat(document.getElementById('goalValue').value);

    if (goalName && !isNaN(goalValue)) {
        console.log('Adicionando nova meta:', { name: goalName, value: goalValue });
        goals.push({ name: goalName, value: goalValue });

        saveGoalsToJSON(goals);

        renderGoals();
        document.getElementById('goalName').value = '';
        document.getElementById('goalValue').value = '';
    }
});

function saveGoalsToJSON(goals) {
    const jsonData = JSON.stringify(goals);

    fetch('https://jsonserver--lopeszd.repl.co/metas', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: jsonData,
    })
        .then(response => response.json())
        .then(data => {
            console.log('Metas salvas com sucesso no servidor JSON:', data);
        })
        .catch(error => {
            console.error('Erro ao salvar metas no servidor JSON:', error);
        });
}
