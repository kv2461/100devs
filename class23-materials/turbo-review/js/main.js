// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let sentance = 'Is this the best week ever?';
alert(str.endsWith('?'));
//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let multipleWords = "hello i am a jr.dev"
console.log(multipleWords.replaceAll('jr.dev','software engineer'));
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors(){
    let move = Math.floor(Math.random()*3);
    if (move === 0){
        return "rock"
    } else if (move === 1){
        return "paper"
    } else {
        return "scissors"
    }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function rockPaperScissorsGame(move){
    let opponentsMove = rockPaperScissors();
    if ((move === 'rock' && opponentsMove ==="scissors") || (move === 'paper' && opponentsMove === "rock") || (move==="scissors" && opponentsMove==="paper")){
        return "won";
    } else if ((move === 'rock' && opponentsMove ==="paper") || (move === 'paper' && opponentsMove === "scissors") || (move==="scissors" && opponentsMove==="rock")){
        return "lost"
    } else {
        return "draw";
    }
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playGames(array){
    let results = [];
    for (let i = 0; i<array.length;i++){
        results.push(rockPaperScissorsGame(array[i]));
    }
    return results;
}