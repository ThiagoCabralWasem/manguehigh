
const loginForm = document.getElementById('login-form');

function handleFormSubmit(event) {
  event.preventDefault(); 
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'Senai' && password === 'Senai') {
    alert('Login realizado com sucesso!');
    window.location.href = "http://127.0.0.1:5500/homepage/trabalho.html";
  } else {
    alert('Usuário ou senha incorretos. Por favor, tente novamente.');
  }
}

loginForm.addEventListener('submit', handleFormSubmit);
