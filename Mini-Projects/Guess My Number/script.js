'use strict';

var correctNum = document.querySelector("#correct-number"); // Displays the correct number
var searchButton = document.querySelector("#guess-button"); // The button
var guessHistory = document.querySelector("#guess-history"); // The history of random numbers
var indication = document.querySelector("#indicator"); // Span element to display if user is too high or low
var highscore = document.querySelector("#highscore"); 


var randomNumber = Math.floor(Math.random() * 20) + 1; // 1 to 20
var guessesArr = [];
highscore.textContent = "";

searchButton.addEventListener("click", gameLogic); // 2nd argument must be function
function gameLogic() {

    let myGuess = Number(document.getElementById("guess-number").value); 
    let myGuessInt = Number(myGuess);

    if(myGuessInt === randomNumber) {
        alert("You win!");
        correctNum.textContent = myGuessInt;
        indication.textContent = "";
        randomNumber = Math.floor(Math.random() * 20) + 1; // 1 to 20
        highscore.textContent = guessesArr.length;
        guessesArr = [];
    }
    else {
        guessIndicator(myGuessInt);
        indication.append.textContent;
        guessesArr.push(myGuessInt);
        guessHistory.textContent = guessesArr;
    }
    }

    // The above function, reads the value written in the guess-number ID on the HTML
    // It's then converted into a number and stored as another variable
    // the RandomNumber variable is rolled again

    // If myGuess is the same of value and type of the randomnumber (11 - 11), an alert is sent to notify a win

    const guessIndicator = (guess) => {
        indication.textContent = "";
        if(guess > randomNumber) {
            indication.append("Too high!")
        } else {
            indication.append("Too low!")
        }
    }


