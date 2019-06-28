//Computer Choices Array
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var wins = 0;
var loses = 0;
var guessesLeft = 9;
var playerGuesses = [];

var winText = document.getElementById("#playerwin-text");
var lossText = document.getElementById("#playerloss-text");
var guessText = document.getElementById("#guessesleft-text");
var guessesMadeText = document.getElementById("#gessesmade-text");

document.onkeyup = function(event) {
    var playerGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * 26)];
    console.log(computerGuess);
    console.log(playerGuess);

    playerGuesses.push(playerGuess);
    console.log(playerGuesses);
    if (playerGuess === computerGuess) {
        wins++
        winText.textcontent = wins;
    }
}