CommonJS and ESM (ECMAScript Modules) are **two different JavaScript module systems**. They define **how code is split into files and how those files import/export functionality**. Understanding this distinction is essential for Node.js, npm packages, and modern tooling.

* * *

## 1. Why Module Systems Exist

As applications grow, you must:

* Split code into multiple files
    
* Control visibility of functions and variables
    
* Reuse code across projects
    

A **module system** defines how this is done.

* * *

## 2. CommonJS (CJS)

### What it is

* The **original** module system used by Node.js
    
* Still widely used
    
* Synchronous, runtime-based loading
    

### Syntax

```js
// exporting
module.exports = function greet(name) {
  return `Hello, ${name}`;
};

// importing
const greet = require('./greet');
```

### Characteristics

* Uses `require()` and `module.exports`
    
* Default in Node.js **before ES Modules**
    
* File extension: `.js`
    
* No `"type": "module"` needed
    

### Where it’s used

* Older Node.js projects
    
* Many backend libraries
    
* Node.js internals
    

* * *

## 3. ECMAScript Modules (ESM)

### What it is

* The **official JavaScript standard**
    
* Used by browsers and modern Node.js
    
* Static, compile-time module structure
    

### Syntax

```js
// exporting
export default function greet(name) {
  return `Hello, ${name}`;
}

// importing
import greet from './greet.js';
```

### Characteristics

* Uses `import` / `export`
    
* Supports tree-shaking
    
* Asynchronous by design
    
* Requires configuration in Node.js
    

### Where it’s used

* Modern frontend frameworks
    
* New Node.js projects
    
* Browser JavaScript
    

* * *

## 4. Key Differences (Side-by-Side)

| Feature | CommonJS | ESM |
| --- | --- | --- |
| Import | `require()` | `import` |
| Export | `module.exports` | `export` |
| Loading | Runtime | Static |
| Tree-shaking | No | Yes |
| Browser support | No | Yes |
| Node default | Yes (older) | Yes (newer) |

* * *

## 5. How Node.js Decides Which One You’re Using

Node.js determines the module system by **file extension or package.json**:

### ESM

* `.mjs` files  
    **OR**
    
* `"type": "module"` in `package.json`
    

### CommonJS

* `.cjs` files  
    **OR**
    
* Default when `"type"` is missing
    

Example:

```json
{
  "type": "module"
}
```

* * *

## 6. Why npm Packages Care About This

When someone installs your package, Node must know:

* How to load it
    
* Which syntax to use
    

That’s why imports sometimes fail with errors like:

* `Cannot use import statement outside a module`
    
* `require is not defined`
    

These errors happen when **module systems are mixed incorrectly**.

* * *

## 7. Dual Packages (Professional Setup)

Modern npm packages often support **both** systems.

Example `package.json`:

```json
{
  "exports": {
    "import": "./index.js",
    "require": "./index.cjs"
  }
}
```

This allows:

```js
// ESM
import greet from 'pkg';

// CommonJS
const greet = require('pkg');
```

This is considered **best practice** for public packages.

* * *

## 8. Which Should YOU Use?

Given that you are learning JavaScript and npm packages:

* **Learn ESM first** (future-proof, browser-compatible)
    
* Understand CommonJS well enough to interoperate
    
* Publish dual-mode packages if targeting a broad audience
    

* * *

## 9. Mental Model (Simple)

* **CommonJS**: “Load this file right now and give me whatever it exports.”
    
* **ESM**: “Statically analyze these imports before the program runs.”
    

* * *

explanation** of how **modules are managed in ES Modules (ESM)** vs **CommonJS (CJS)**, with **code examples** and **key behavioral differences**. Since you’re learning JavaScript and already have programming experience, I’ll keep it precise and technical.

* * *

## 1. What “module management” means

Module management covers:

* **How modules are defined**
    
* **How they are imported/exported**
    
* **When they are loaded**
    
* **How scope and caching work**
    

* * *

## 2. CommonJS (CJS)

### Overview

* Default module system in **Node.js (historically)**
    
* Uses `require()` and `module.exports`
    
* **Synchronous loading**
    
* Each file is wrapped in a function
    

* * *

### Exporting in CommonJS

#### `math.js`

```js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = {
  add,
  subtract
};
```

* * *

### Importing in CommonJS

#### `app.js`

```js
const math = require('./math');

console.log(math.add(5, 3));      // 8
console.log(math.subtract(5, 3)); // 2
```

* * *

### Key CommonJS Characteristics

#### 1. **Dynamic imports allowed**

```js
if (condition) {
  const moduleA = require('./moduleA');
}
```

#### 2. **Module caching**

* A module is executed **once**
    
* Subsequent `require()` calls return the cached object
    

```js
const a = require('./math');
const b = require('./math');
console.log(a === b); // true
```

#### 3. **Exports are mutable**

```js
module.exports.count = 0;

setTimeout(() => {
  module.exports.count++;
}, 1000);
```

* * *

## 3. ES Modules (ESM)

### Overview

* Official JavaScript standard
    
* Used by **modern browsers** and **Node.js**
    
* Uses `import` / `export`
    
* **Static structure** (analyzable at compile time)
    
* **Asynchronous loading**
    

* * *

### Exporting in ES Modules

#### `math.js`

```js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}
```

* * *

### Importing in ES Modules

#### `app.js`

```js
import { add, subtract } from './math.js';

console.log(add(5, 3));      // 8
console.log(subtract(5, 3)); // 2
```

> Note: File extensions are **mandatory** in ESM (Node & browsers).

* * *

### Default Export Example

#### `logger.js`

```js
export default function log(message) {
  console.log(message);
}
```

#### `app.js`

```js
import log from './logger.js';

log("Hello ESM");
```

* * *

### Key ES Module Characteristics

#### 1. **Static imports only (top-level)**

❌ Invalid:

```js
if (condition) {
  import { add } from './math.js'; // SyntaxError
}
```

✅ Valid (dynamic import):

```js
if (condition) {
  const math = await import('./math.js');
  console.log(math.add(2, 3));
}
```

* * *

#### 2. **Live bindings (read-only imports)**

#### `counter.js`

```js
export let count = 0;

export function increment() {
  count++;
}
```

#### `app.js`

```js
import { count, increment } from './counter.js';

console.log(count); // 0
increment();
console.log(count); // 1
```

* `count` is **live**
    
* You **cannot reassign** it in the importer
    

* * *

#### 3. **Strict mode by default**

```js
x = 10; // ReferenceError
```

* * *

## 4. Node.js configuration difference

### CommonJS (default)

```json
// package.json
{
  "type": "commonjs"
}
```

### ES Modules

```json
// package.json
{
  "type": "module"
}
```

Or use:

* `.cjs` → CommonJS
    
* `.mjs` → ES Module
    

* * *

## 5. Direct Comparison Table

| Feature | CommonJS | ES Modules |
| --- | --- | --- |
| Syntax | `require`, `module.exports` | `import`, `export` |
| Loading | Synchronous | Asynchronous |
| Import location | Anywhere | Top-level only |
| Static analysis | ❌ No | ✅ Yes |
| Tree shaking | ❌ No | ✅ Yes |
| Browser support | ❌ No | ✅ Yes |
| Live bindings | ❌ No | ✅ Yes |

* * *

## 6. When to use what

### Use **CommonJS** when:

* Maintaining legacy Node.js code
    
* Writing quick scripts
    
* Using older tooling
    

### Use **ES Modules** when:

* Writing modern JavaScript
    
* Targeting browsers
    
* Using bundlers (Vite, Webpack, Rollup)
    
* Want tree-shaking and static analysis
    

* * *

## 7. Key takeaway (important)

> **CommonJS exports values**
> 
> **ES Modules export bindings**

This single difference explains most behavioral changes.

* * *