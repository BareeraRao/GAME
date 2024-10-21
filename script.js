let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('userGuess').value);
    const result = document.getElementById('result');

    attempts++;

    if (userGuess === randomNumber) {
        result.innerText = `🎉 Congratulations! You guessed it right in ${attempts} attempts!`;
        document.getElementById('restart').style.display = 'block';
    } else if (userGuess < randomNumber) {
        result.innerText = '📉 Too low! Try again.';
    } else if (userGuess > randomNumber) {
        result.innerText = '📈 Too high! Try again.';
    }
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('result').innerText = '';
    document.getElementById('userGuess').value = '';
    document.getElementById('restart').style.display = 'none';
}
