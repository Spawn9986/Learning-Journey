// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);

console.log(startLine);
console.log(turtle.padStart(7));
console.log(rabbit.padStart(7));


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');

/*   ||<- Start line
🐢=======
     🐇 */


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

Object.entries(obj).toString().replace(/[,]/g,' ')
// Or
Object.entries(obj).toString().replaceAll(",",' ')

//the [] means replace all items in these [] with ... ie. could have been [,$#!] etc

// additional sol'n: Object.entries(obj).map(value => value.join(" ")).join(' ')


