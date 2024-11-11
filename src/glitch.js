const title = document.querySelector('h1');

function startRandomInterval() {
    const interval = setInterval(() => {
        title.innerHTML = title.innerHTML === 'PHOTO GALLERY' ? 'ԀHO┴O פ∀˥˥Ǝɹ⅄' : 'PHOTO GALLERY';

        clearInterval(interval);

        const randomDelay = Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000; // Random delay between 1000 and 3000 ms
        console.log(`Next event in ${randomDelay} ms`);
        startRandomInterval();
    }, Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000); // Random delay between 1000 and 3000 ms
}

startRandomInterval();