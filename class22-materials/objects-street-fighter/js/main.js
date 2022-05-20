//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function StreetFighterCharacter(name, gender, specialMove, color){
    this.name = name;
    this.gender = gender;
    this.specialMove = specialMove;
    this.color = color;
    this.specialMoveActivate = function(){
        console.log(`grrrr AHHHHH ${this.specialMove}!!!!`)
    }
    this.greet = function(){
        console.log(`I am ${this.name}, lets fight!`)
    }
    this.lose = function(){
        if (this.gender === 'male'){
            console.log('NOOOOOOOO!!!!')
        } else {
            console.log('I CANT BELIEVE IT!');
        }
    }
}

let Ryu = new StreetFighterCharacter('Ryu','male','HADOUKEN','white');

let ChunLi = new StreetFighterCharacter('ChunLi','female','FLURRYKICKS','blue');