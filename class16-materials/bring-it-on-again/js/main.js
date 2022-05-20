// *Variables*
// Declare a variable, assign it a value, and alert the value
let newVar = 69;
alert(newVar);

// Create a variable, divide it by 10, and console log the value
let anotherNewVar = 4200;
anotherNewVar/=10;
console.log(anotherNewVar);


// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multiplyThree(a,b,c){
    alert(a*b*c);
}

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function addThenSub(a,b,c,d){
    console.log((a+b)-c-d);
}

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function winna(a,b,c){
    let result = 100;
    result= result + a - b;
    result/=c;
    if(result>25){
        console.log("WE HAVE A WINNA!!!!!")
    }
}
// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function whatDay(day){
    let dayFiltered = day.toLowerCase();
    if (dayFiltered === "saturday" || dayFiltered === 'sunday'){
        alert("weekend");
    } else{
        alert("week day");
    }
}
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3

function byThree(num){
    for (let i = 1; i<num; i+3);
    console.log(i);
}