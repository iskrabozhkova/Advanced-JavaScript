function register(event){
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    fetch('/api/users/registration', {
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: {
            'content-type': 'application/json'
        }
    })
}

function login(event){
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: {
            'content-type': 'application/json'
        }
    }).then(() => {
        window.location.replace('http://localhost:8080/users.html');
    })
}

function loadUsers(){
    fetch('/api/users/', {headers: {
        'content-type': 'application/json'
    }}).then(response => response.json()).then(users => {
        users.forEach(user => {
            const li = document.createElement('li');
            li.innerHTML = user.email;
            document.getElementById('users-list').appendChild(li);
        })
    })
}