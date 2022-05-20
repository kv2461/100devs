//Write your pseduo code first! 
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