
// For all of these, what is the value of a when the function gets called with the alert()
// #1 - a = 3
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    console.log(1, a);
}
q1();

//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    console.log(2, a);
}

q2();
q22();


//#3
function q3() {
    window.a = "hello";
}


function q32() {
    console.log(3, a);
}

/* q3();
q32(); */

//#4
var a = 1;
function q4() {
    var a = "test";
    console.log(4, a);
}

q4();

//#5
var a = 2;
if (true) {
    var a = 5;
    console.log(5, a);
}
console.log("window", a);