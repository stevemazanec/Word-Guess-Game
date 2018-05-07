var players = ["lebron james", "tristan thompson", "kevin love", "jr smith", "kyrie irving"];

var wins = 0;
var remainingGuesses = 10;
var currentWord = [];
var answerArray = [];
var lettersGuessed = [];
var hasFinished = false;
var hasWon = false;

function chooseWord () {
    currentWord = [];
    answerArray = [];
    var selector = Math.floor(Math.random() * players.length);
    var wordIndex = players[selector];
    for (var i = 0; i < wordIndex.length; i++) {
        currentWord.push(wordIndex.charAt(i));
        answerArray.push(wordIndex.charAt(i));
    }
    var targetWord = document.getElementById("currentWord");
    for (var i = 0; i <currentWord.length; i++) {
        var currentLetter = currentWord[i];
        var newP = document.createElement("p");
        newP.innerHTML = "_";
        targetWord.appendChild(newP);
        newP.setAttribute("class", "letterP");
    }
}
chooseWord();

document.onkeyup = function(event){
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    var alreadyGuessed = lettersGuessed.indexOf(userGuess);
    if (alreadyGuessed >= 0) {
        alert(" you have already guessed that letter");
        return;
    }
    else {
    }
    lettersGuessed.push(userGuess);
    var newLetterP = document.getElementById("lettersGuessed");
    newLetterP.innerHTML = "<p>" + lettersGuessed + "</p>";
    var isPartOfWord = currentWord.indexOf(userGuess);
    var chosenWordP = document.getElementsByClassName("letterP");
    var count = 0;
    for (var i = 0; i <currentWord.length; i++) {
        if (currentWord[i] === userGuess) {
            count++;
            chosenWordP[i].innerHTML = "<p>" + currentWord[i] + "</p>";
        }
    }
    if (alreadyGuessed >= 0) {
        for (var i = 0; i < count; i++) {
            answerArray.pop()
        }
    }
    else {
        remainingGuesses--;
        var remainingGuessesP = document.getElementById("remainingGuesses");
        remainingGuessesP.innerHTML = "<p>" + remainingGuesses + "</p>";
    }
    if (answerArray.length === 0) {
        hasFinished = true;
        hasWon = true;
        wins++;
        var newWinP = document.getElementById("wins");
        newWinP.innerHTML = "<p>" + wins + "</p>";
    }
    if (hasFinished === true && hasWon === true) {
        lettersGuessed = [];
        var newLetterP = document.getElementById("lettersGuessed");
        newLetterP.innerHTML = "<p>" + lettersGuessed + "</p>";
        var newResetP = document.getElementById("currentWord");
        newResetP.innerHTML = " ";
        var newResetRemainingP = document.getElementById("remainingGuesses");
        newResetRemainingP.innerHTML = "<p>" + 10 + "</p>";
        chooseWord();
        remainingGuesses = 10;
        hasFinished = false;
        hasWon = false;
    }
    else {
    }
}
