// parent.js - Middle module (imports from super_parent, exports to index)
console.log("--- parent.js loaded ---");

// Import default export and named exports from super_parent
import DefaultGreetFromSuper, {
  greetFromSuper,
  PIFromSuper,
} from "./super_parent.js";

export function calculateCircleArea(radius) {
  return PIFromSuper * radius * radius;
}

// Re-export some things from super_parent for convenience
export { DefaultGreetFromSuper, greetFromSuper };