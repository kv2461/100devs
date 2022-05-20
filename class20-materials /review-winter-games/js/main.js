//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function onlyEven(array) {
    let evens = []
    for (let i = 0;i<array.length;i++){
        if(array[i] % 2 === 0){
            evens.push(array[i])
        }
    }
    return evens;
}