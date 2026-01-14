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

If you want, I can:

* Show a **minimal project** in each system
    
* Explain **why ESM enables tree-shaking**
    
* Help you convert an existing CommonJS project to ESM
    
* Explain module resolution in Node.js in detail
    

Tell me what depth you want.