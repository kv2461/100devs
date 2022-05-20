//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function Skater(name,gender,age,colorSkateboard){
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.colorSkateboard = colorSkateboard;
    this.kickflip = function(){
        console.log("kickflip!")
    };
    this.varial = function(){
        console.log('variaaaal')
    };
    this.heelflip = function(){
        console.log('heeelflipp')
    }
}