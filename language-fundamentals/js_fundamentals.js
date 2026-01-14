// 1. var, let, and const
// they differ primarily in their scope, hoisting behavior, and mutability.

// 1. Scope:
// var:
// Function-scoped or globally-scoped. A var declared inside a function is only accessible within that function. If declared outside any function, it is globally accessible.
// let:
// Block-scoped. A let declared within a block (e.g., inside if statements, for loops, or any curly braces {}) is only accessible within that block.
// const:
// Block-scoped. Similar to let, const is also limited to the block in which it is declared.
// 2. Hoisting:
// var:
// Declarations are hoisted to the top of their scope and initialized with undefined. This means you can access a var variable before its actual declaration in the code, though its value will be undefined until the declaration line is reached.
// let
// and const: Declarations are also hoisted to the top of their block scope, but they are not initialized. Attempting to access a let or const variable before its declaration results in a ReferenceError (this period is known as the "Temporal Dead Zone").
// 3. Mutability:
// var: Can be re-declared and re-assigned within its scope.
// let: Can be re-assigned but cannot be re-declared within the same scope.
// const: Cannot be re-assigned or re-declared after its initial assignment. However, if a const holds an object or array, the properties of that object or array can still be modified, but the variable itself cannot be pointed to a different object or array.

// In summary:
// Use const for values that are not expected to change throughout the program's execution.
// Use let for variables whose values might need to be re-assigned.
// Avoid using var in modern JavaScript development due to its less predictable scoping behavior and potential for issues related to re-declaration.

// 2. Data Types in JavaScript
// String: Represents textual data.
let greeting = "Hello, World!";
let name = "Alice";

// Number: Represents numerical values, including integers and floating-point numbers.
let age = 30;
let price = 99.99;

// Boolean: Represents a logical entity and can be either true or false.
let isActive = true;
let hasPermission = false;

// Object: A collection of key-value pairs. Arrays are a special type of object.
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

// Array: An ordered list of values, indexed numerically.
let colors = ["red", "green", "blue"];
let numbers = [1, 2, 3, 4, 5];

// Symbol: Introduced in ES6, represents a unique identifier.
const id = Symbol("uniqueId");
const anotherId = Symbol("uniqueId"); // anotherId is different from id

// BigInt: Represents integers with arbitrary precision, for numbers larger than Number.MAX_SAFE_INTEGER.
let veryBigNumber = 9007199254740991n + 10n; // 'n' suffix denotes a BigInt

// null: Represents the intentional absence of any object value.
let emptyValue = null;

// undefined: Indicates a variable that has been declared but has not yet been assigned a value.
let unassignedVariable; // unassignedVariable is undefined by default

// 3. Loop In Js

for (let i = 0; i < 5; i++) {
  console.log("Iteration: " + i);
}

let count = 0;
while (count < 3) {
  console.log("Count is: " + count);
  count++;
}

let x = 0;
do {
  console.log("Value of x: " + x);
  x++;
} while (x < 2);

// for...in loop: This loop is used to iterate over the enumerable properties (keys) of an object.
// enumerable means countable.
const person1 = { name: "Alice", age: 30 };
for (const key in person1) {
  console.log(`${key}: ${person1[key]}`);
}

// for...of loop: This loop is used to iterate over the values of iterable objects, such as Arrays, Strings, Maps, Sets, and NodeLists.
const colors1 = ["red", "green", "blue"];
for (const color of colors1) {
  console.log(color);
}

// forEach for array iteration, which is often preferred for its conciseness when working with arrays.
const numbers1 = [1, 2, 3];
numbers1.forEach(function (number) {
  console.log(number);
});
