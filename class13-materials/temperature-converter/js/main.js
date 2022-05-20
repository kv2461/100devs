//Write your pseduo code first! 
//convert value from celcius to fahrenheit

//have a form/input(where celcius value will put in) that has a button(that will submit celcius when clicked)
//have an event listener that listens for the button to be clicked and runs a function
//function get celcius value and passed into celcius - fahrenheit formula
//returns fahrenheit value in html innertext 

document.querySelector('#convert').addEventListener('click',convert);

function convert(){
    let temp = parseInt(document.querySelector('#temperature').value);
    const tempType = document.querySelector('#temptype').value;

    if (tempType === 'celcius'){
        temp = temp*(9/5) + 32;
        document.querySelector('#results').innerText = `${temp} F`
    }

    if (tempType === 'fahrenheit'){
        temp = (temp-32)/(9/5);
        document.querySelector('#results').innerText = `${temp} C`
    }

}