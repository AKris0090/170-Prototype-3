const firstField = document.getElementById('first');
const secondField = document.getElementById('second');
const thirdField = document.getElementById('third');
const fourthField = document.getElementById('fourth');

const firstCorrect = document.getElementById('firstCorrect');
const secondCorrect = document.getElementById('secondCorrect');
const thirdCorrect = document.getElementById('thirdCorrect');
const fourthCorrect = document.getElementById('fourthCorrect');

const correctFirst = 'stone';
const correctSecond = 'flower';
const correctThird = 'helmet';
const correctFourth = '13';

firstField.onchange = function () {
    if (firstField.value == correctFirst) {
        firstCorrect.style.display = 'block';
        firstField.style.borderColor = 'green';
    }
};

secondField.onchange = function () {
    if (secondField.value == correctSecond) {
        secondCorrect.style.display = 'block';
        secondField.style.borderColor = 'green';
    }
};

thirdField.onchange = function () {
    if (thirdField.value == correctThird) {
        thirdCorrect.style.display = 'block';
        thirdField.style.borderColor = 'green';
    }
};

fourthField.onchange = function () {
    if (fourthField.value == correctFourth) {
        fourthCorrect.style.display = 'block';
        fourthField.style.borderColor = 'green';
    }
};

const title = document.getElementById('title');

function startRandomInterval() {
    const interval = setInterval(() => {
        title.innerHTML = title.innerHTML === 'MY FAVORITE POEMS' ? 'MY FAVORITE PASSWORDS' : 'MY FAVORITE POEMS';

        clearInterval(interval);

        const randomDelay = Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000; // Random delay between 1000 and 3000 ms
        console.log(`Next event in ${randomDelay} ms`);
        startRandomInterval();
    }, Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000); // Random delay between 1000 and 3000 ms
}

startRandomInterval();