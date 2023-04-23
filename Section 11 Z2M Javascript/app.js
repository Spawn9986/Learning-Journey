// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
let fbObj = {
    username: "myUserName",
    password: "123"
};

// 2. Create an array which contains the object you have made above and name the array "database".
let database = [fbObj];
// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
let newsfeed = 
[
    {
        username: "user1",
        timeline: "user1Timeline"
    },
    {
        username: "user2",
        timeline: "user2Timeline"
    },
    {
        username: "user3",
        timeline: "user3Timeline"
    }
];

console.log(fbObj); 
console.log(database);
console.log(newsfeed);