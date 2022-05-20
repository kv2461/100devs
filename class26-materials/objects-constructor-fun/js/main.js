//Create a constructor with 4 properties and 3 methods

function Pizza(sauce,toppings,size,seller) {
    this.sauce = sauce;
    this.toppings = toppings;
    this.size = size;
    this.seller = seller;
    this.eat = function () {
        console.log('YUM')
    };
    this.frisbee = function () {
        console.log('yeeeet')
    };
    this.throw = function () {
        console.log("gabagool!")
    }
}

let pizza = new Pizza("heavy","pepperoni","large","Dominos");

class MakeCar {
    constructor(carMake,carModel,carColor,numOfDoors) {
        this.make = carMake;
        this.model = carModel;
        this.color = carColor;
        this.doors = numOfDoors;
    };
    //prototype methods? outside of constructor... to save data space?
    honk() {
        alert('BEEP BEEP')
    };
    lock() {
        alert(`Locked ${this.doors} doors!`)
    };

}