let database = [
    {
        username: "shawn",
        password: "supersecret"
    }, 
    {
        username: "sally",
        password: "123"
    }, 
    {
        username: "ingrid",
        password: "777"
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

function isUserValid(username, password) {
    for (let i = 0; i < database.length; i++) {
        if (username === database[i].username && password === database[i].password) {
            return true;
        } 
    }
    return false;
}

function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsfeed);
    } else {
        alert("Sorry, wrong username and password");
    }
}

let userNamePrompt = prompt("What\'s your username?");
let passwordPrompt = prompt("What\'s your password?");

signIn(userNamePrompt, passwordPrompt);