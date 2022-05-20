// *Variables*
// Create a variable and console log the value
let newVar;
console.log(newVar);

// Create a variable, add 10 to it, and alert the value
let anotherNewVar=0;
anotherNewVar+=10;
alert(anotherNewVar);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFour(a,b,c,d){
    let answer = a-b-c-d;
    alert(answer);
}

// Create a function that divides one number by another and returns the remainder
function  remainder(a,b){
    let remainder = a%b;
    return remainder;
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(a,b){
    if (a+b > 50){
        alert('Jumanji');
    }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function zebra(a,b,c){
    if ((a*b*c) % 3 ===0){
        alert('ZEBRA')
    }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function consoleLogThatWord(word,num){
    for (let i = 0; i<num; i++){
        console.log('word');
    }
}