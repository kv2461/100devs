//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
function multiply(array){
    let product = array.reduce((total,x)=> total * x, 1);
    alert(product);
}
