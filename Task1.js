// **Question 1:** Write JavaScript code to declare an empty array named **`myArray`**.
const myArray = [];

// **Question 2:** In JavaScript, how do you add the elements "apple," "banana," and "cherry" to the end of the array **`myArray`**?
myArray.push("apple", "banana", "cherry");
console.log(myArray);
// **Question 3:** Write JavaScript code to print the first element of the array **`myArray`**.
console.log(myArray[0]);

// **Question 4:** Write JavaScript code to print the last element of the array **`myArray`**.
console.log(myArray[myArray.length - 1]);
// **Question 5:** In JavaScript, how do you add "mango" to the beginning of the array **`myArray`**?
myArray.unshift("mango");
console.log(myArray);
// **Question 6:** Write JavaScript code to remove the last element from the array **`myArray`**.
myArray.pop();
console.log(myArray);
// **Question 7:** Given an array **`const numbers = [5, 10, 15, 20, 25]`**, write JavaScript code to delete the element at index 2 and update the array accordingly.
const numbers = [5, 10, 15, 20, 25];
numbers.splice(2, 1);
console.log(numbers);
// **Question 8:** Write a JavaScript function that takes an array as a parameter and returns its length.
function lengthfunnction(numbers) {
  return numbers.length;
}
console.log(lengthfunnction([5, 10, 15, 20, 25]));
// **Question 9 [🌶️](https://emojipedia.org/hot-pepper):** Given the array **`const temperatures = [72, 68, 74, 80, 76]`**, write JavaScript code to find the highest temperature (the maximum value) in the array.
const temperatures = [72, 68, 74, 80, 76];
temperatures.sort();
console.log(temperatures[temperatures.length - 1]);
// **Question 10 [🌶️🌶️](https://emojipedia.org/hot-pepper):** Write JavaScript code to check if the element "banana" exists in the array **`myArray`** and return **`true`** if it does, otherwise, return **`false`**.
let fruits = myArray.includes("banana");
console.log(fruits);
