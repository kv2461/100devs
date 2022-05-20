//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. 
//Please create a function that reverses your list and prints it to the console. 
function reversePokemonParty(array) {
    return array.reverse();
}

//Given two integer arrays a, b, both of length >= 1, 
//create a program that returns true 
//if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
function sumOfMultiples(arrayOne,arrayTwo) {
    let squares = arrayOne.map(x=>x*x);
    let cubes = arrayTwo.map(x=>x*x*x);
    let squaresSum = squares.reduce((total,i) => total+i,0);
    let cubesSum = cubes.reduce((total,i) => total + i,0);
    if (squaresSum>cubesSum) {
        return true;
    } else {
        return false;
    }
}

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function returnMultiplesOfOwnIndex(array) {
    let newArray = [];
    for (let i = 0;i<array.length;i++) {
        if (array[i] % i === 0) {
            newArray.push(array[i])
        }
    }
    return newArray;
}

//Given an array of integers as strings and numbers, 
//return the sum of the array values as if all were numbers.Return your answer as a number.

function sumOfAllIntegers(array) {
    let numArray = [];
    for (let i = 0;i<array.length;i++) {
        numArray.push(parseInt(array[i]));
    }
    return numArray.reduce((total,i)=>total+i,0)
}