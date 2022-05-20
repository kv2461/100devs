//--- Easy
//create a variable and assign it a number
let newVar = 69;

//minus 10 from that number
newVar -= 10;

//print that number to the console
console.log(newVar);

//--- Medium
//create a variable that holds a value from the input
let inputVar = parseInt(document.querySelector('#danceDanceRevolution').value)

//add 25 to that number
inputVar +=25;

//alert that number
alert(inputVar);

//--- Hard
//create a variable that holds the h1
const clickVar = document.querySelector('#clickVar')

//add an event listener to that element that console logs the sum of the two previous variables
clickVar.addEventListener('click', sum);
function sum(){
    console.log(newVar + inputVar);
}
