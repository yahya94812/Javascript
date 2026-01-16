// super_parent.js - The top-level module (exports functions)
console.log("--- super_parent.js loaded ---");

// Named export - a function
export function greetFromSuper(name) {
    return `Hello, ${name}!`;
}

// Named export - a variable
export const PIFromSuper = 3.14159;

// Default export - main function of this module
export default function DefaultGreetFromSuper(name) {
    return `default Hello, ${name}!`;
}
