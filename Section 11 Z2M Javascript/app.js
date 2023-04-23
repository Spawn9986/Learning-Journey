let array = ["Banana", "Apples", "Oranges", "Blueberries"];
console.log("Original array:", array);


// 1. Remove the Banana from the array.
array.shift();
console.log("After .shift():", array);
// 2. Sort the array in order.
array.sort();
console.log("After .sort():", array);
// 3. Put "Kiwi" at the end of the array.
array.push("Kiwi");
console.log("After .push():", array);
// 4. Remove "Apples" from the array.
array.shift();
console.log("After .shift():", array);
// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
array.reverse();
console.log("After .reverse():", array);
/* you should have at the end:
["Kiwi", "Oranges", "Blueberries"] */

// using this array,
var array2 = 
["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".

console.log(array2[1][1][0]);