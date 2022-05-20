//Create an espresso machine constructor that makes machines with 4 properties and 3 methods


class EspressoMachine {
    constructor(model,color,coffeeSize,price){
        this.model = model;
        this.color = color;
        this.coffeeSize = coffeeSize;
        this.price = price;
        this.on = false;
    }
    makeCoffee() {
        if (this.on === true) {
            console.log(`Here you go, a ${this.coffeeSize} coffee!`)
        } else {
            console.log('off')
        }
    }

    startBrew() {
        if (this.on === true) {
        console.log('brewskis!')
        } else {
            console.log('off')
        }
    }

    turnOn() {
        if(this.on===false){
            this.on=true;
            console.log('readyboss!')
        } else {
            console.log('already on!')
        }
    }

    turnOff() {
        if (this.on === true) {
            this.on=false;
            console.log('good night');
        } else {
            console.log('already off')
        }
    }
}