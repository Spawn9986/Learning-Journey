// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
let first = prompt("Enter your first number");
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.  
let second = prompt("Enter a second number");
let sum = Number(first) + Number(second);
alert("The sum is: " + sum);

// BONUS: Make a program that can subtract, multiply, and also divide!

let first = prompt("Enter your first number"); 
let second = prompt("Enter a second number");
let sum = Number(first) - Number(second);
alert("The sum is: " + sum);

let first = prompt("Enter your first number"); 
let second = prompt("Enter a second number");
let sum = Number(first) * Number(second);
alert("The total is: " + sum);

let first = prompt("Enter your first number"); 
let second = prompt("Enter a second number");
let sum = Number(first) / Number(second);
alert("The total is: " + sum);