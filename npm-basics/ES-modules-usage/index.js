// index.js - Entry point (imports from parent)
console.log("--- index.js loaded ---"); //it go down and imports moves up

// Import from parent module
import {calculateCircleArea, greetFromSuper, DefaultGreetFromSuper } from './parent.js';
import { greet } from "my-package-94812";
// Using function from my-package-94812
console.log(greet());

// Using exported functions from the parent.js
console.log("calculateCircleArea(3):", calculateCircleArea(3));

// Using re-exported functions from super_parent.js
console.log(greetFromSuper("World"));
console.log(DefaultGreetFromSuper("JavaScript Developer"));


/*
  Module Flow:
  
  super_parent.js  -->  parent.js  -->  index.js
       (exports)        (imports &      (imports &
                         re-exports)     uses)
*/
