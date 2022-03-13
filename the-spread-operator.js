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


// Challenge 

// You will use the spread operator to copy an array which is stored in an object 
// which itself is stored in an array. 
// You will create a single line arrow function (has no return statement), 
// which should copy an array passed in and add the value passed to it, then return the array.
// 1. Create a variable named subjects using the keyword let
// 2. Assign it a copy of the subjects array from the first object in the students array
// 3. Create a variable named update using the keyword const
// 4. Assign the variable update a single line arrow function  (should not have a return statement)
// 5. The arrow function should take two parameters named: item and val the arrow function should copy the array passed in and add the value passed to it, then return the array.
// 6. Create a variable named: updatedSubjects using the keyword let
// 7. Variable updatedSubjects should be assigned the return value from calling the update function passing in the subjects array and the string "Electronics"
// 8. Variable updatedSubjects should have the correct value
// 9. The original version of the subjects array in the students array should not have been modified
// 10. log out the variable updatedSubjects to see its value
// 11. log out students[0] to see that it has not been changed

let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 87, art: 95},
    }
];

let subjects = [...students[0].subjects];

const update = (item, val) => [...item, val];

let updatedSubjects = update(subjects, 'Electronics');

console.log(updatedSubjects);

console.log(students[0]);
