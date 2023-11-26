function createUser(event) {
    event.preventDefault(); 

    const form = event.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    const user = {
        name,
        email,
        password
    };

    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    form.reset();

    alert('Usuário criado com sucesso!');

    window.location.href = 'index.html';
}

const form = document.querySelector('#sign-up-form');
form.addEventListener('submit', createUser);