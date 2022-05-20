//Create a dog object that has four properties and three methods

const pizza = {
    toppings : "pineapple",
    sauce :'ranch',
    size : 'large',
    shape : 'circle',
    bake: function () {
        console.log('baked!')
    },
    eat: function () {
        console.log(`ewww ${pizza.toppings}?`)
    },
    save: function () {
        console.log(`its a size ${pizza.size}, we can save this right?`)
    }
};