//Create a mouse object that has four properties and three methods

let mouse = {
    name:"Mickey",
    wife:'Minnie',
    color:'black',
    voice:'high',
    sayHi: function(){
        return `Hi I'm ${mouse.name}`
    },
    sayBye: function(){
        return `Bye nice to meet you!`
    },
    sayWhy: function(){
        return `Why?`
    }
}