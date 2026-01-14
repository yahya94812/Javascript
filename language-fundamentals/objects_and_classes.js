// 1. Object Literal
// object literal is a concise way to create an object and define its properties and methods directly within your code. It involves using curly braces {} to enclose a comma-separated list of key-value pairs.
// this method eliminates the need for a class in order to create an object, making it a quick and straightforward way to define objects in JavaScript.
const person = {
    "name": "Yahya",
    age: 20,
    greet: function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};
console.log(person.name); // Output: Yahya
console.log(person.age);  // Output: 20
person.greet();           // Output: Hello, my name is Yahya and I am 20 years old.
// Properties are key-value pairs that store data associated with the object. The key is typically a string (or an identifier that JavaScript converts to a string), and the value can be any valid JavaScript data type (strings, numbers, booleans, arrays, other objects, functions, etc.).

// 3. Creating Classes and Objects
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet(){
    console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}
const p1 = new Person("Yahya", 25);
p1.greet();
console.log(p1.name); // Output: Yahya
console.log(p1.age);  // Output: 25

