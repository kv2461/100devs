//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

document.querySelector('#check').addEventListener('click', age);

function age(){
    let ageInput = parseInt(document.querySelector('#danceDanceRevolution').value);

    if (ageInput<16){
        document.querySelector('#result').innerText = `You can't drive!`;
    }
    else if (ageInput<18){
        document.querySelector("#result").innerText = `You can't hate from the outside of the club. cuz you can't even get in!`
    }
    else if (ageInput<21){
        document.querySelector("#result").innerText = "You can't drink yet!"
    }
    else if (ageInput<25){
        document.querySelector("#result").innerText = "You can't rent cars!"
    }
    else if (ageInput<30){
        document.querySelector("#result").innerText = "You probably can't rent fancy cars affordably"
    }
    else {
        document.querySelector("#result").innerText = "You have nothing to look forward to anymore"
    }
}