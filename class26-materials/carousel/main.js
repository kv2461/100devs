const urlRoot = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

document.querySelector('button').addEventListener('click',searchDrink);

for (let i=0;i<4;i++) {
    getDrink(i,'margarita');
}

var counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter>4) {
        counter=1;
    }
},10000);

function searchDrink(){
    const drink = document.querySelector('input').value;
    for (let i=0;i<4;i++) {
        getDrink(i,drink);
    }
}

function getDrink(i,drink) {

    fetch(`${urlRoot}${drink}`)
        .then(res => res.json())
        .then(data => {
            document.querySelector(`#img${i+1}`).src = data.drinks[i].strDrinkThumb;
            document.querySelector(`.drinkInstructions${i+1}`).innerText = splitInstructions(data.drinks[i].strInstructions);
            document.querySelector(`.drinkName${i+1}`).innerText = data.drinks[i].strDrink;
            document.querySelector(`.drinkIngredients${i+1}`).innerText = measureIngredients(splitIngredients(data.drinks[i]),splitMeasure(data.drinks[i]));
        })
        .then(err=>{
            if (err){
            console.log(`Error : ${err}`)
            };
        })
    }


function splitInstructions(instructions){
    let array = instructions.split('. ');
    let newInstructions = array.join('.\n');
    return newInstructions;
}

function splitIngredients(drink) {
    let ingredients = [];
    for (let i = 1; i < 10; i++) {
        if (drink[`strIngredient${i}`] !== null) {
            ingredients.push(drink[`strIngredient${i}`])
        }
    }
    return ingredients;
}

function splitMeasure(drink) {
    let measurements = [];
    for (let i = 1; i < 10; i++) {
        if (drink[`strMeasure${i}`] !== null) {
            measurements.push(drink[`strMeasure${i}`])
        }
    }
    return measurements;
}

function measureIngredients(ingredients,measurements) {
    let measuredIngredients = [];
    for (let i = 0; i<ingredients.length; i++) {
        if (ingredients[i] !== '') {
            if (measurements[i] === undefined) {
                measuredIngredients.push(ingredients[i]);
            } else {
                measuredIngredients.push(`${ingredients[i]} : ${measurements[i]}`)
            }
        }
    }
    return measuredIngredients.join('\n')
}