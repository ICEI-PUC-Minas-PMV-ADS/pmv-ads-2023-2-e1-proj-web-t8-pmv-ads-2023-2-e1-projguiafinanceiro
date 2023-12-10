function createUser(event) {
    event.preventDefault();

    const form = event.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    const newUser = {
        name,
        email,
        password,
        goals: [],
        balance: 0 
    };

    fetch('https://jsonserver--lopeszd.repl.co/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Novo usuário criado:', data);
        alert('Novo usuário cadastrado com sucesso!');
        window.location.href = 'index.html';
    })
    .catch(error => {
        console.error('Erro ao cadastrar usuário:', error);
        alert('Erro ao cadastrar usuário. Por favor, tente novamente.');
    });
}

const formCadastro = document.querySelector('#sign-up-form');
formCadastro.addEventListener('submit', createUser);