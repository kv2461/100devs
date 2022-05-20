//FIZZ BUZZ - function that takes in a number, and print out 1 to that number, if the num is divisible by 3 print fizz, 
//num divisible by 5 print buzz, and if num divisible by 3 and 5 print fizzbuzz;
//PREP 
//Parameters - number
//Return - nums unless divisible by 3,5, or both and its fizz buzz fizzbuzz respectively. each num has to be console.logged
//Example - fizzBuzz(10) = 1 2 fizz 3 4 buzz fizz 7 8 fizz 9 buzz
//Pseudocode -
    // for loop for each num to target and see if theyre divisible and change accordingly
    //conditionals will be with %
    //print out numbers


function fizzBuzz(num) {
    for (let i = 1; i<=num;i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz')
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else {
            console.log(i);
        }
    }
}