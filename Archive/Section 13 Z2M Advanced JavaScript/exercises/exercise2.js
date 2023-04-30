//#1 change this function into a ternary and assign it to variable called experiencePoints
/* function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
} */

let experiencePoints = function(winBattle) {
    return (winBattle ? 10 : 1);
}

experiencePoints(true);


//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");
    // my answer: undefined
//#3 return value when moveCommand("back");
    // my answer: "you arrived home"
//#4 return value when moveCommand("right");
    // my answer: "you found a river"
//#5 return value when moveCommand("left");
    // my answer: undefined
//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

function avoidTornado(activity) {
    let result;
    switch (activity) {
        case "fly":
            result = "You soar above trouble but later crashed";
            break;
        case "drive":
            result = "The tornado overtook you";
            break;
        case "run":
            result = "You're an idiot"
            break;
        case "foxhole":
            result = "Nice choice, you live"
            break;
        default:
            result = "Select between fly, drive, run, or foxhole"
    }
    return result;
}

avoidTornado("fly");