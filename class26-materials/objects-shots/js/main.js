//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
const urlRoot = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
const urlRandom = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'

document.querySelector('button').addEventListener('click',getDrink);

function getDrink() {
    let drink = document.querySelector('input').value;
    if (drink === "") {
        fetch(`${urlRandom}`)
        .then(res => res.json())
        .then(data => {
            document.querySelector('h2').innerText = data.drinks[0].strDrink;
            document.querySelector('img').src = data.drinks[0].strDrinkThumb;
            document.querySelector('h3').innerText = data.drinks[0].strInstructions;
        })
    } else {

    fetch(`${urlRoot}${drink}`)
        .then(res => res.json())
        .then(data => {
            document.querySelector('h2').innerText = data.drinks[0].strDrink;
            document.querySelector('img').src = data.drinks[0].strDrinkThumb;
            document.querySelector('h3').innerText = data.drinks[0].strInstructions;
        })
    }
}

//see what would happen if string is empty or has two more words

//push work - get nasa picture of the day - and their information?

//hw - fiind three apis abd build three simple apps using those apis
//rest countries - provide information about a country
//kanye rest api - random quote generator
//bored api - give you activities