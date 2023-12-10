function loginUser(event) {
    event.preventDefault();

    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    fetch('https://jsonserver--lopeszd.repl.co/users')
        .then(response => response.json())
        .then(users => {
            let currentUser = null;
            let userFound = false;

            for (const user of users) {
                if (user.email === email && user.password === password) {
                    currentUser = user;
                    userFound = true;
                    break;
                }
            }

            if (userFound) {
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                localStorage.setItem('isLogged', true);
                window.location.href = 'home.html';
            } else {
                alert('Email ou senha inválidos!');
            }
        })
        .catch(error => {
            console.error('Erro ao fazer login:', error);
            alert('Erro ao fazer login. Por favor, tente novamente.');
        });
}

function logoutUser() {
    localStorage.removeItem('currentUser');
    localStorage.setItem('isLogged', false);
    window.location.href = 'index.html';
}

const signupBtn = document.querySelector('#sign-up-btn');
signupBtn.addEventListener('click', () => {
    window.location.href = 'cadastro.html';
});

const form = document.querySelector('#login-form');
form.addEventListener('submit', loginUser);