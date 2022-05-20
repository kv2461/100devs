//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arrayNumbers = [1,2,3,4,5,6,7,8,9,10];

let sum = arrayNumbers.reduce((total,x)=>total + x, 0);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function arraySquared(array){
    let squared = array.map(x=>x*x);
    return squared;
}

//Create a function that takes string
//Print the reverse of that string to the console

function reverse(string){
    let reversed = [];
    for (let i=0;i<string.length;i++){
        reversed.unshift(string[i]);
    }
    return reversed.join('');
}

//Create a function that takes in a string
//Alert if the string is a palindrome or not

function palindrome(string){
    for (let i=0; i<string.length/2; i++){
        if(string[i]!==string[string.length-(i+1)]){
            return false;
        }
    }
    return true;
}
