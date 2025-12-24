// TypeScript tutorial
// TypeScript adding static types, which can help catch errors early, improve code readability, and enhance tooling support (e.g., autocompletion, refactoring).

// 1. Type Annotations
// allows you to explicitly define types for variables, function parameters, and return values.
let message: string = "Hello, TypeScript!";

// 2. Basic Types
// string - Text data.
// number - Numbers (integers, floats).
// boolean - True or false.
// any - Any type (like JavaScript's flexibility, but should be avoided if possible).
// void - No return value (typically used for functions).
// null and undefined - Represent absence of value.
// array - Arrays can be typed.
let age: number = 30;
let isActive: boolean = true;
let colors: string[] = ["red", "green", "blue"];

// 3. Interfaces
// Interfaces define a structure for objects. In JavaScript
interface Person {
    name: string;
    age: number;
    greet(): void;
}

const person: Person = {
    name: "John",
    age: 25,
    greet() {
        console.log("Hello!");
    }
};

// 4. Classes
// Classes in TypeScript are like JavaScript’s classes but with type support.
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

const dog = new Animal("Dog");
dog.speak(); // Dog makes a noise.

// 5. Type Inference
// If you don't explicitly specify a type, TypeScript can infer the type based on the assigned value. But it’s good practice to be explicit to avoid ambiguity.
let num = 5;  // TypeScript infers that 'num' is of type 'number'

// 6. Union Types
// In TypeScript, you can define a variable that can hold multiple types using a union type.
let id: string | number;
id = "abc123";  // OK
id = 123;       // OK
// id = true;      // Error

// 7. Functions
function add(a: number, b: number): number {
    return a + b;
}

function greet(name: string): void {
    console.log("Hello, " + name);
}
// If you forget the return type, TypeScript will infer it based on the return statement.

// 8. Generics
// Generics allow you to create reusable components (like functions, classes, and interfaces) that work with any data type while preserving type safety.
function identity<T>(value: T): T {
    return value;
}

let num1 = identity(123);  // num is inferred as number
let str = identity("Hello"); // str is inferred as string

// 9. Enums
// Enums are a way to define a set of named constants.
enum Direction {
    Up,
    Down,
    Left,
    Right
}

let move: Direction = Direction.Up;

// 10. Type Aliases
// You can use type aliases to define complex types.
type Point = { x: number, y: number };

let point: Point = { x: 10, y: 20 };

// 11. Optional and Default Parameters
// In TypeScript, you can make parameters optional by adding a ?, or provide default values.
function greet1(name: string, age?: number): void {
    if (age) {
        console.log(`${name} is ${age} years old.`);
    } else {
        console.log(`${name} did not provide an age.`);
    }
}

function multiply(a: number, b: number = 2): number {
    return a * b;
}

// 12. Type Assertions
// Type assertions tell TypeScript to treat a value as a specific type.
let someValue: any = "Hello, TypeScript!";
let strLength: number = (someValue as string).length;

// 13. Strict Mode & Configuration
// TypeScript has a tsconfig.json file that lets you control various compiler options. The strict mode, for example, makes TypeScript more rigorous with type checking.

// {
//   "compilerOptions": {
//     "strict": true
//   }
// }
