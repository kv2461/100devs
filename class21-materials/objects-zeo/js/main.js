//Create a stopwatch object that has four properties and three methods

let stopwatch = {};
stopwatch.name = "Mr.Stopwatch";
stopwatch.age = 40;
stopwatch.color = "gold";
stopwatch.size = "medium";
stopwatch.greet=function(){
    console.log(`Hi wearer, my name is ${stopwatch.name}`)
}
stopwatch.howOld=function(){
    console.log(`Hi wearer, I am ${stopwatch.age} years old`)
}
stopwatch.whatColor=function(){
    console.log(`Hi wearer, I came in ${stopwatch.color}`)
}