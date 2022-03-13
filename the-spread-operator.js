/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator

let array1 = [1, 2, 3];
let array2 = array1;
array2.push(4);
console.log("Array 2", array2);
console.log("Array 1", array1); // array1 now has 4 too


// Copying an array

let array3 = [4, 5, 6];
let array4 = [...array3]; // use spread operator to copy array3 into new variable array4
array4.push(7);
console.log("Array 4", array4);
console.log("Array 3", array3); // array3 reamins untouched

// Copying an object

let object1 = { a: 1, b: 2, c: 3 };
let object2 = { ...object1, d: 4}; //spread to copy and then add to it
let object3 = { ...object1, b: 5}; // spread to copy object 1 and then override b


console.log("First Object", object1);
console.log("Second Object", object2);
console.log("Third Object", object3);


// Copying only part of an array/object

let array5 = [...array1, {...object1}, ...array3, "x", "y", "z"];
console.log("The Fifth Array", array5);
