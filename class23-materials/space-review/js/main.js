//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let sumArray = [1,2,3,4,5,6,7,8,10];
alert(sumArray.reduce((total,num)=>total+num,0));

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function squared(array){
    return array.map(num=>num*num);
}

//Create a function that takes string
//Print the reverse of that string to the console
function reverse(string){
    return string.split('').reverse().join('');
}

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palindrome(string){
    let reversed = reverse(string);
    if (string === reversed){
        alert(true);
    } else {
        alert(false);
    }
}