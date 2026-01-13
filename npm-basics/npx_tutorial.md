`npx` is a command-line tool that comes with **Node.js** (since version 5.2.0 of npm) and is used to **run Node.js packages even without installing them globally**.

### What does `npx` do?

When you run a package using `npx`, it:

* Checks if the package exists in your `node_modules/.bin` folder (locally).
    
* If not found, it temporarily downloads and runs the package directly from the npm registry.
    
* Cleans up after it's done (unless you use flags to save it).
    

* * *

### Example:

```bash
npx create-react-app my-app
```

This runs the `create-react-app` package without needing to install it globally with `npm install -g`.

* * *

### Why use `npx`?

* Saves you from cluttering your system with global installs.
    
* Always runs the latest version (unless specified).
    
* Useful for one-off scripts and project scaffolding tools.
 
* * *

### 🔧 Use Case: Creating a New React App

Let's say you want to create a new React app.

#### Without `npx`:

You'd first have to install the CLI globally:

```bash
npm install -g create-react-app
create-react-app my-app
```

This adds `create-react-app` to your global packages—even if you only use it once.

* * *

#### With `npx` (much cleaner):

```bash
npx create-react-app my-app
```

This:

* Temporarily downloads `create-react-app`
    
* Runs it to scaffold a React project in the `my-app` folder
    
* Doesn’t pollute your global space with unused packages
    

* * *

### 🎯 Another Example: Running a Linter on the Fly

Let’s say you want to use **ESLint** without installing it:

```bash
npx eslint your-file.js
```

This is great for running tools without permanently installing them into your project or globally.

* * *

### 🧪 Try a Specific Version

Want to test a specific version of a tool?

```bash
npx create-react-app@5.0.1 my-app
```

That runs version 5.0.1 of `create-react-app`, regardless of what’s installed on your system.
