let database = [
    {
        username: "shawn",
        password: "supersecret"
    }
]

let newsfeed = 
[
    {
        username: "Bobby",
        timeline: "So tired from all that learning!"
    },
    {
        username: "Sally",
        timeline: "Javascript is so cool!"
    },
    {
        username: "Mitch",
        timeline: "Javascript is pretty cool"
    }
];

function signIn(username, password) {
    if (username === database[0].username && password === database[0].password) {
        console.log(newsfeed);
    } else {
        alert("Sorry, wrong username and password");
    }
}

let userNamePrompt = prompt("What\'s your username?");
let passwordPrompt = prompt("What\'s your password?");

signIn(userNamePrompt, passwordPrompt);