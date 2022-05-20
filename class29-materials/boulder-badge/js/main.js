// Variables
//You are getting ready to face Brock for the Boulder Badge. 
//You want three pokemon on your team that each have evolved at least once. 
//You have bulbasaur which is at level 5 and evolves at level 16, 
//caterpie which is at level 1 and evolves at level 7, 
//and weedle which is at level 1 and evolves at level 7. 
//Create three variables to store the number of rare candies each of your pokemon would need to evolve 
//(rare candies increase your level by one). 
//Finally, create a fourth variable named totalCandies that sums all the rare candies you would need. 
let caterpie = 7 - 1;
let bulbasaur = 16 - 5;
let weedle = 7 - 1;
let rareCandyArray = [caterpie,bulbasaur,weedle];
let howMany = rareCandyArray.reduce((total,i) => 
    total + i,0)
console.log(howMany);
console.log(rareCandyArray)

//Conditionals And Functions
//You have a charmander in your party.
// Charmander can only battle if the temperature is above 0 degrees celcius. 
//Create one function that converts a Fahrenheit value to Celcius
// and another fuction that tells you wheither or not charmander can battle
function convertToCelcius(fahrenheit) {
    return (fahrenheit - 32) * 5/9
}
function charmanderCanBattle(temperature) {
    if (convertToCelcius(temperature) > 0) {
        console.log('fuck em up')
    } else {
        console.log('sit this one out')
    }
}

//Loops
//You have joined an undeground pokemon leauge. 
//In this league, trainers can use any number of pokemon. 
//Print to the console "Pikachu I choose you" x times where x is the number of pokemon the trainer you are battling has in their party

function pikachuChoice(x) {
    while (x>0) {
        console.log('Pikachu I choose you');
        x--;
    }
}