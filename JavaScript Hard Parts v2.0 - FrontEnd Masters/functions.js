//Generalizing functions

function squareIt(n) {
  return n * n;
}

//Multply by two function taking array

function multiplyByTwo(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i] * 2);
  }
  return newArray;
}

let arr = [1, 5, 3, 9];
console.log(multiplyByTwo(arr)); //[ 2, 10, 6, 18 ]
// But the problem of this function is it is NOT DRY when we want to use it in a slightly different way like dividing or adding 2

/*
Higher order functions comes up!
*/

function higherMultiplyByTwo(arr, instructions) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(instructions(arr[i]));
  }
  return newArray;
}

let arr = [1, 5, 3, 9];
const multiplyNow = function (num) {
  return num * 2;
};
console.log(higherMultiplyByTwo(arr, multiplyNow));
