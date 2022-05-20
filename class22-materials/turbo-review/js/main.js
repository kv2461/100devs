// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string,
// and print the value to the console

let favDrink = "coconut water";
let trimmed = favDrink.trim();
console.log(trimmed);

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let multipleWords = "hello i don't have an apple";

function doesApple(words){
    let array = words.split(" ");
    for (let i=0; i<array.length; i++){
        if(array[i]==="apple"){
            return true;
        }
    }
}

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors(){
    let result = Math.random()
    if(result<.33){
        return 'rock'
    } else if (result<.66) {
        return 'paper'
    } else {
        return 'scissors'
    }
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors
// against a bot using the above function

function rockPaperScissorsGame(choice){
    let botChoice = rockPaperScissors();
    if (choice === 'rock'){
        if (botChoice === 'paper'){
            return 'lost'
        } else if (botChoice === 'rock') {
            return 'tie'
        } else {
            return 'won'
        }
    }

    if (choice === 'paper'){
        if (botChoice === 'paper'){
            return 'tie'
        } else if (botChoice === 'rock') {
            return 'lost'
        } else {
            return 'won'
        }
    }

    if (choice === 'scissors'){
        if (botChoice === 'paper') {
            return 'won'
        } else if (botChoice === 'rock') {
            return 'lost'
        } else {
            return 'tie'
        }
    }
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. 
//Print the results of each game to the console.


function gameChoice(arrayOfChoices){
    for(let i=0;i<arrayOfChoices.length;i++){
        console.log(rockPaperScissorsGame(arrayOfChoices[i]));
    }
}