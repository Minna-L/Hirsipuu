const input = document.querySelector('input');
const output = document.querySelector('output');
const span = document.querySelector('span'); 

const words = [
    "programming",
    "javascript",
    "database",
    "markup",
    "framework",
    "variable",
    "stylesheet",
    "library", 
    "asynchronous",
    "hypertext"
];

let randomizeWord = '';
let maskedWord = '';
let guesses = 0; 

const newGame = () => {
    const random = Math.floor(Math.random() * words.length); 
    randomizeWord = words[random];
    maskedWord = "*".repeat(randomizeWord.length); 
    guesses = 0; 
    console.log(randomizeWord); 
    output.innerHTML = maskedWord; 
    span.innerHTML = `Guesses: ${guesses}`; 
};

const replaceFoundChars = (guess) => {
    let newMaskedWord = maskedWord.split('');
    
    for (let i = 0; i < randomizeWord.length; i++) {
        const char = randomizeWord[i];

       
        if (char.toLowerCase() === guess.toLowerCase()) {
            newMaskedWord[i] = randomizeWord[i];
        }
    }
    maskedWord = newMaskedWord.join('');
    output.innerHTML = maskedWord; 
};

const win = () => {
    alert(`You have guessed right, the word is ${randomizeWord}.`);
    newGame(); 
};


newGame();

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();

        const guess = input.value.toLowerCase(); 
        input.value = ''; 

        guesses++; 
        span.innerHTML = `Guesses: ${guesses}`; 

        if (guess === randomizeWord.toLowerCase()) {
            win(); 
        } else if (guess.length === 1) {
            replaceFoundChars(guess); 
            if (maskedWord.toLowerCase() === randomizeWord.toLowerCase()) {
                win(); 
            }
        } else {
            alert("You guessed wrong!");
        }
    }
});
