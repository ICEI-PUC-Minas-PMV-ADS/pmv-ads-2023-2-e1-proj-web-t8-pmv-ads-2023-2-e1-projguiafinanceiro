function loginUser(event) {
    event.preventDefault();

    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    let currentUser = null;
    let userFound = false;

    for (const element of users) {
        const user = element;
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

