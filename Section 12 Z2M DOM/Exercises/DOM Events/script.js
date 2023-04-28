/* var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

 */
// --------- ME DOING THIS FROM SCRATCH ------------

// Select the elements you want to modify or append
let input = document.getElementById("userinput");
let button = document.getElementById("enter");
let ul = document.querySelector("ul");

// Accomplish: I want to be able to take in the user input and add it to the ul as an li if char length > 0;

// Add event listeners to the button by click and input by enter on the keyboard 
// Button Click first
button.addEventListener("click", function() {
	if (input.value.length > 0) {
		console.log("clicked!");
		let li = document.createElement("li");
		let textNode = document.createTextNode(input.value);
		li.appendChild(textNode);
		console.log(li);
		ul.appendChild(li);
	}
})

// Keyboard using enter key which is code 13
input.addEventListener("keypress", function(e) {
	if (input.value.length > 0 && e.key === 'Enter') {
		console.log(input.value);
	}
});

