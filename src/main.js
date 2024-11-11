// main.js is a login system that checks a username and a password to let the user in.

const usernamefield = document.getElementById('username');
const passwordfield = document.getElementById('password');
const loginForm = document.getElementById('loginForm');
const answerQR = document.getElementById('answer');

const correctUsername = 'cyrusXsilver._.vibes_03';
const correctPassword = 'stoneflowerhelmet13';

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
  
    const username = usernamefield.value;
    const password = passwordfield.value;
  
    if (username === correctUsername && password === correctPassword) {
      // Redirect to another page if login is successful
      answerQR.style.display = 'block';
    } else {
      // Show an alert if login fails
      alert('Incorrect username or password');
    }
  });