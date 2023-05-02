/* Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX. */

// Plan for Q1
// 1 - Arrange array by order
//   - Make sure 2 is before 10 bc initial sorting does 1, 1, 10, 2
// 2 - block same together into seperate arrays
//    - Sol'n 1: Check if same as current and repeat then group together in array (wont work bc it will leave out last element)
//    - Sol'n 2: Check for all matches of the current by maybe using filter????
// 3 - distinguish between number and string but keep order

let array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

let sorted = (arr) => {
  let sort = arr.sort()
    console.log(sort);
  let result = sort.map((item) => {
    let i = 0
    console.log(sort.filter(item => item === item))
  })
  return result;
}


let output = sorted(array);
console.log(output);

//Question 2
//Plan
// Maybe use a nested loop

let array = [1, 2, 3];

let sumOfTwoEqualTarget = (arr, target) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          result = [arr[i], arr[j]];
        }
      }
    }
    return result;
}

  let output = sumOfTwoEqualTarget(array, 4)

  //Question 3
  // Plan 
  
  