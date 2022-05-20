// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).

let admin;
let name = 'John';
admin = name;
alert(admin);

// Create a variable with the name of our planet. How would you name such a variable?
// Create a variable to store the name of a current visitor to a website. How would you name that variable?

let planetEarth;
let currentVisitor;

//uppercase const

//yes uppercase should be used for variables declared with const
//but age shouldn't since it shouldn't be declared as a const

//is else required?
//no there won't be a difference

//rewrite the function using ? or ||
function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
  }

  function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
  }

//write a function for min(a,b)

function min(a,b){
    if (a>b){
        return b;
    }
    return a;
}

//Write a function pow(x,n) that returns x in power n. 
//Or, in other words, multiplies x by itself n times and returns the result.

function pow(x,n){
    let result = x;
    while (n>1){
        result *= x;
        n--;
    }

    return result;
}

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );