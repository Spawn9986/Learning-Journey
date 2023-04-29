// Select the elements you want to modify or append
let input = document.getElementById("userinput");
let button = document.getElementById("enter");
let ul = document.querySelector("ul");
let list = document.getElementsByTagName("li");

// could also use let ul = document.getElementByTagName("ul")[0]; --> dont forget its an array and u need the [0] or 
// it will say "....is not a function"

// Accomplish: I want to be able to take in the user input and add it to the ul as an li if char length > 0;

// Add event listeners to the button by click and input by enter on the keyboard 
// Button Click first
/* button.addEventListener("click", function() {
	if (input.value.length > 0) {
		console.log("clicked!");
		let li = document.createElement("li");
		let textNode = document.createTextNode(input.value);
		li.appendChild(textNode);
		ul.appendChild(li);
	}
}) */

// Keyboard using enter key which is code 13
/* input.addEventListener("keypress", function(e) {
	if (input.value.length > 0 && e.key === 'Enter') {
		console.log(input.value);
		let li = document.createElement("li");
		let textNode = document.createTextNode(input.value);
		li.appendChild(textNode);
		ul.appendChild(li);
	}
}); */


// Lets refactor the code and clean it up (DRY - don't repeat yourself)

function inputLength() {
	return input.value.length;
}

function createListElement() {
	let li = document.createElement("li");
	let textNode = document.createTextNode(input.value);
	li.appendChild(textNode);
	ul.appendChild(li);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(e) {
	if (inputLength() > 0 && e.key === 'Enter') {
		createListElement();
	}
}

// when I click the item in the list...1) add Event LIstener to List 2) loop constantly iterating over list checking for event
// I want the result to toggle on/ off the "done" class..3) add done class to li that is clicked 4) toggle done class on & off for each click of the li

// 1 - Add event listener to List
// 2 - Create a loop to iterate over the list array
// 3 - add done class to the li that was clicked through toggle

function toggleListItemOnClick(event) {
	if (event.target.tagName === "LI") {
		event.target.classList.toggle("done");
	}
}

//OR (both work)

/* for (let i = 0; i < list.length; i++) {
	list[i].addEventListener("click", toggleListItemOnClick)
}
function toggleListItemOnClick(){
	this.classList.toggle("done");
} */

//locate the ul
// add buttons to each li
// add event listener to each button
// the EL function will delete li when clicked


for (let i = 0; i < list.length; i++) {
	let button = document.createElement("button");
	let buttonText = document.createTextNode("delete");
	button.appendChild(buttonText);
	list[i].appendChild(button);
}

/* for (let i = 0; ulButtons.length < 0; i++) {
	let ulButtons = document.getElementsByTagName("body > ul > li:nthchild(i) > button");
	ulButtons[i].addEventListener("click", function (e) {
		e.currentTarget("remove");
	}
} */

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", toggleListItemOnClick)


/* Update the shopping list app to do the following:

1. If you click on the list item, it toggles the .done  class on and off.

2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.

3. BONUS: When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!) */


