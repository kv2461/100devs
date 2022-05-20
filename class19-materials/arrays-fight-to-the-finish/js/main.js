//Create an array of movie titles. Loop through the array and each element to the h2.
let movieArray = ["movie1","movie2","movie3","movie4"];
movieArray.forEach(x=>document.querySelector("h2").innerText += x)

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let numberArray = [1,2,3,4,5];
numberArray.forEach((x,i)=>{
  numberArray[i]=x+3
});
//Find the average of all the numbers from question three

function avg(array){
    let sum=0;
    array.forEach(x=>sum + x);
    return sum/array.length;
}