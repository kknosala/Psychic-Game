//Computer Choices Array
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

//inital values
var wins = 0;
var loses = 0;
var guessesLeft = 9;
var playerGuesses = [];

//text targets in HTML
var winText = document.getElementById("playerwin-text");
var lossText = document.getElementById("playerloss-text");
var guessText = document.getElementById("guessesleft-text");
var guessesMadeText = document.getElementById("guessesmade-text");

//inital text values
winText.innerHTML = wins;
lossText.innerHTML = loses;
guessText.innerHTML = guessesLeft;

//when the user hits a key
document.onkeyup = function(event) {
    //user hits keyboard
    var playerGuess = event.key;
    //guesses left decreases with each click
    guessesLeft--;
    //Updates the guesses left on the page
    guessText.innerHTML = guessesLeft;
    //adds the guess to the array
    playerGuesses.push(playerGuess);
    //updates the text for player guesses
    guessesMadeText.innerHTML = playerGuesses + ", ";
    //generates random number between 0 and 25 for the computerChoices array then assign the chosen entry of the array to the computerGuess variable
    var computerGuess = computerChoices[Math.floor(Math.random() * 26)];
    //console logs to check if everything is working
    console.log("comp guess: " + computerGuess);
    console.log(playerGuess);
    console.log(playerGuesses);
    //If player guesses correct letter, run the following
    if (playerGuess === computerGuess) {
        wins++
        winText.innerHTML = wins;
        playerGuesses = [];
        guessesLeft = 9;
        guessText.innerHTML = guessesLeft;
    }
    //if player uses all guesses, reset game and increase loss counter
    else if(guessesLeft === 0) {
        loses++;
        lossText.innerHTML = loses;
        playerGuesses = [];
        guessesMadeText.innerHTML = playerGuesses;
        guessesLeft = 9;
        guessText.innerHTML = guessesLeft;
    }
    
}