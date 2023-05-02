/* Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX. */

// Plan for Q1
// 1 - Arrange array by order
//   * block same together into seperate arrays
//    - Sol'n 1: Check if same as current and repeat then group together in array (wont work bc it will leave out last element)
//    - Sol'n 2: Check for all matches of the current by maybe using filter????
// 2 - distinguish between number and string but keep order

let array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
console.log("Original array type:", typeof array[0])

let sorted = (arr) => {
  let sort = arr.sort()
    console.log("Sorted Array type:", typeof sort[0]);
  let result = sort.map((item) => {
    let i = 0;
    if (arr[i] > 0) {
      arr.filter(item => item === arr[i])
    }
    i++;
  })
  return result;
}

let output = sorted(array);
console.log(output);