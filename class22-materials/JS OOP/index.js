
//Factory Function
function createCircle(radius){
   return {
        radius,
        draw: function() {
            console.log('draw');
        }
    }
}
const circle = createCircle(1);
circle.draw();

//Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
    let defaultLocation = {x:0,y:0};
    Object.defineProperty(this, 'defaultLocation',{
        get:function(){
            return defaultLocation;
        },
        set:function(value){
            defaultLocation = value;
            if(!value.x || !value.y){
                throw new Error('Invalid location.');
            }
            defaultLocation=value;
        }
    });
}

const another = new Circle(1);