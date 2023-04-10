// function reverseString(str) {
//   const splitString = str.split("");
//   console.log(splitString);
//   const rever = splitString.reverse();
//   const joinString = rever.join();
//   return joinString;
// }
// reverseString("hello world");

// const ReverseString = (str) => {
//   return str.split("").reverse().join();
// };
// ReverseString("hello world");

// function to return max and min values in a array

// function maxAndMin() {
//   let arrayOfNumbers = [1, 28, 36, 4, 6, 84];
//   let maxNum = Math.max(...arrayOfNumbers);
//   console.log(maxNum);
//   let minNum = Math.min(...arrayOfNumbers);
//   console.log(minNum);
//   return maxNum, minNum;
// }
// maxAndMin();

// second solution

// function secondSolution() {
//   let arrayOfNumbers = [1, 2, 3, 4, 5];
//   //   let m = Math.min(...arrayOfNumbers);
//   //     let n = Math.max(...arrayOfNumbers);
//   let m = Math.min.apply(Math, arrayOfNumbers);
//   let n = Math.max.apply(Math, arrayOfNumbers);
//   console.log(m, n);
// }
// secondSolution();

// implement a stack data structure in javascript  using array and write pop(),push(),peek() method
// function stackDataStructure() {
//   let stack = [2, 3, 4, 5];
//   let pushItem = stack.push(6);
//   console.log(pushItem);
//   //   let peekItem = stack.peek();
//   let popItem = stack.pop();
//   console.log(popItem);
//   //   return stack;
// }
// stackDataStructure();

// write a function to check if a given string is palindrome or not in javascript
// function palindrome(str) {
//   const splitString = str.split("");

//   const rever = splitString.reverse();
//   const joinString = rever.join();
//   if (str == joinString) {
//     console.log(" this a palindrom");
//   } else {
//     console.log("this is not a palindrom");
//   }

//   return str;
// }
// palindrome("hello world");

// write a function that removes a duplicate from an array
// first solution

// function removeDuplicates() {
//   let duplicate = ["A", "B", "C", "B", "A"];
//     let newNum = [...new Set(duplicate)];

//   console.log(newNum);
// }
// removeDuplicates();
//  second solution
// function removeDuplicates() {
//   let duplicate = ["A", "B", "C", "B", "A"];
//   let result = [];
//   duplicate.forEach((d) => {
//     if (!result.includes(d)) {
//       result.push(d);
//     }
//     console.log(result);
//   });
// }
// removeDuplicates();

function factoral(n) {
  let sum = 1;
  for (let x = 2; x <= n; x++) {
    sum = sum * x;
  }
  console.log(sum);
  return sum;
}
factoral(4);
