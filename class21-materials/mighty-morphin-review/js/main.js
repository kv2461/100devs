// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday = "Thanksgiving";
console.log(favHoliday.toUpperCase());
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let lastThree="peanut"
alert(lastThree.slice(-3));

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function takeFive(a,b,c,d,e){
    let val = 100-a-b-c-d-e;
    alert(Math.abs(val));
}

takeFive(1,2,3,4,5);

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function takeThree(a,b,c){
    let array = [a,b,c];
    array.sort((a,b)=>a>b?1:-1);
    console.log(array[0],array[2]);
}
takeThree(1,4,3);

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headsOrTails(){
    let result = Math.random()
    if(result<.5){
        return 'heads'
    } else {
        return 'tails'
    }
}


//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times 
//where x is the number passed into the function. Call the function.
function takeIn(num){
    for(let i=0; i<num; i++){
        console.log(headsOrTails());
    }
}

takeIn(4);