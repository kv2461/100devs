//Create a button that adds 1 to a botScore stored in localStorage 

if(!localStorage.getItem('botScore')){
    localStorage.setItem('botScore',0);
}

document.querySelector('button').addEventListener('click', addAnothaOne);
document.querySelector('h2').innerText = localStorage.getItem('botScore');

function addAnothaOne() {
    let botScoreVal = parseInt(localStorage.getItem('botScore'));
    botScoreVal += 1;
    localStorage.setItem('botScore',botScoreVal);
    document.querySelector('h2').innerText = localStorage.getItem('botScore');
}
