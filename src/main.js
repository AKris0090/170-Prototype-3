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
      answerQR.style.display = 'block';
    } else if (username != correctUsername && password === correctPassword) {
      alert('Incorrect username');
    } else if (username === correctUsername && password != correctPassword) {
      alert('Incorrect password');
    } else {
      alert('Incorrect username and password');
    }
  });