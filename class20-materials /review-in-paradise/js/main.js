// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let faveFood = "sushi";
faveFood = "lumpia";
alert(faveFood);
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let string = "hi";
alert(string[1]);

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function threeNums(a,b,c){
    alert((a/b)*c);
}

threeNums(1,2,3);


// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function oneNum(a){
    console.log(Math.cbrt(a));
}

oneNum(81);

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

function hotSzn(month){
    switch (month.toLowerCase()){
        case "june":
        case "july":
        case "august":
            alert("yay");
            break;
        default:
            alert("Booo");
    }
}
//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function skipFive(num){
    for(let i=1;i<=num;i++){
        if(i%5 !== 0){
            console.log(i)
        }
    }
}