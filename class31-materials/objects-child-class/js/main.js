//Create an a class and extend it - Can be anything you would like it to be! 

class Animal {
    constructor(name) {
        this._name=name;
    }
    get name() {
        return this._name
    }
    speak(){
        console.log(`Hi I am ${this.name}`)
    }
}

class Dog extends Animal{
    constructor(name,breed) {
        super(name);
        this._breed=breed;
    }
    get breed() {
        return this._breed;
    }
    speak() {
        super.speak();
        console.log(`Hi I am a ${this.breed}`)
    }
}