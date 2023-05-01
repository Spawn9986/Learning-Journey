//Evaluate these:
//#1
[2] === [2] // returns false
{} === {}  // returns false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; // a = 4
const object2 = object1; // a = 4
const object3 = object2; // a = 4
const object4 = { a: 5}; // a = 5
object1.a = 4; 


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Animal {
    constructor(name, type, color, sound) {
        this.name = name;
        this.type = type;
        this. color = color;
        this.sound = sound;
    }
    introduce() {
        return `${this.sound}! I am a ${this.color} ${this.type} and My name is ${this.name}`;
    }
}

class Mamal extends Animal {
    constructor(name, type, color, sound) {
        super(name, type, color, sound);
    }
}

const cow = new Mamal("Sally", "cow", "black", "Mooo");

cow.introduce();