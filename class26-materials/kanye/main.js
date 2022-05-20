document.querySelector('h2').addEventListener('click',getQuote);

getQuote();

function getQuote() {
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(data => {
            document.querySelector('h2').innerText = data.quote;
        })
        .catch(err=> {
            console.log(`error: ${err}`)
        })
}