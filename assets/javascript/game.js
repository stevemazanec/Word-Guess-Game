var wins = 0;
var remainingGuesses = 10;
var players = ["lebronjames", "tristanthompson", "kevinlove", "jrsmith", "kyrieirving"];
var currentWordIndex;
var answerArray = [];
var lettersGuessed = [];
var hasFinished = false;

function resetGame() {
    remainingGuesses = 10;
    currentWordIndex = Math.floor(Math.random() * (players.length));
    lettersGuessed = [];
    answerArray = [];
    for (var i = 0; i < players[currentWordIndex].length; i++) {
        answerArray.push = "_";
    }
};

function updateDisplay() {
    document.getElementById("wins").innerText = wins;
    document.getElementById("currentWord").innerText = "";
    for (var j = 0; j < answerArray.length; j++) {
        document.getElementById("currentWord").innerText += answerArray[i];
    }
    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("lettersGuessed").innerText = lettersGuessed;
};

function evaluateGuess(letter) {
    var positions = [];
    for (var k = 0; k < players[currentWordIndex].length; k++) {
        if (players[currentWordIndex][k] === letter) {
            positions.push[k];
        }
    }
    if (positions.length <= 0) {
        remainingGuesses--; 
    } else {
        for (var k = 0; k < positions.length; k++){
            answerArray[positions[k]] === letter;
        }
    }
};

function checkWin () {
    if (answerArray.indexOf("_") === -1) {
        wins++;
        hasFinished=true;
    }
}

function makeGuess (letter) {
    if (remainingGuesses > 0) {
        if (lettersGuessed.indexOf(letter) === -1) {
            lettersGuessed.push(letter);
            evaluateGuess(letter);
        }
        else if (lettersGuessed.indexOf(letter) === 1) {
            alert("You've already guessed " + letter);
        }
    }
};

document.onkeyup = function(event) {
    if (hasFinished) {
        resetGame();
        hasFinished = false;
    }
    else {
        makeGuess(event.key.toLowerCase());
        updateDisplay;
        checkWin;
    }
};