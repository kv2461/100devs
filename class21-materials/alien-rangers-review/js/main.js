//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let array = ["Avatar last airbender","adventure time","rick and morty","bojack horseman","magicians","see","entourage","game of thrones"];
for (let i=0;i<array.length;i++){
    console.log(array[i]);
}

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let numArray = [21,24,3,5,6,23,5,6,20,10,20,4]
let onlyEvens = arr => arr.filter(n => n%2 === 0);
console.log(onlyEvens(numArray));

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function seconds(array){
    array.sort((a,b)=>a>b?1:-1);
    alert(array[1]+array[array.length-2]);
}

seconds(numArray);