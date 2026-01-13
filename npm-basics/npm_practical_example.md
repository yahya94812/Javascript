# Common npm Operations: A Practical Example

Let's walk through a practical example of using npm to create a simple web application with Express. This example demonstrates the most common operations you'll perform with npm.

## 1. Creating a New Project

First, let's create a new directory and initialize a new npm project:

```bash
# Create a project directory
mkdir my-express-app
cd my-express-app

# Initialize a new npm project
npm init
```

During the `npm init` process, you'll be asked several questions about your project. You can press Enter to accept the defaults or provide your own values:

```
package name: (my-express-app)
version: (1.0.0)
description: A simple Express.js application
entry point: (index.js)
test command:
git repository:
keywords: express, web, app
author: Your Name
license: (ISC)
```

This creates a `package.json` file that will track your project's dependencies and configuration.

## 2. Installing Dependencies

Now, let's install Express as a dependency:

```bash
# Install Express and save it as a dependency
npm install express
```

You'll notice that:
- A `node_modules` directory is created
- Express and its dependencies are downloaded
- `package.json` is updated with Express as a dependency
- A `package-lock.json` file is created

Let's also install a development dependency that we'll only use during development:

```bash
# Install Nodemon as a development dependency
npm install --save-dev nodemon
```

Nodemon will automatically restart our server when files change, making development easier.

## 3. Creating a Simple Express Application

Create a file named `index.js` with this content:

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from my Express app!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
```

## 4. Adding npm Scripts

Let's update the `package.json` file to add some useful scripts. Open the file and modify the "scripts" section:

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js",
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

## 5. Running the Application

Now you can use npm to run your application:

```bash
# Start in development mode with auto-reload
npm run dev

# Or start in production mode
npm start
```

## 6. Installing Global Packages

Some tools are more useful when installed globally:

```bash
# Install a package globally
npm install -g npm-check-updates

# Now you can use it from anywhere
ncu
```

## 7. Updating Dependencies

To check for outdated packages:

```bash
npm outdated
```

To update packages:

```bash
# Update within version constraints in package.json
npm update

# Update to latest versions (may break compatibility)
npx npm-check-updates -u
npm install
```

## 8. Managing Project Dependencies

```bash
# View installed packages
npm list

# View top-level dependencies only
npm list --depth=0

# Check for vulnerabilities
npm audit

# Fix vulnerabilities when possible
npm audit fix
```

## 9. Removing Dependencies

```bash
# Remove a package
npm uninstall some-package

# Remove a dev dependency
npm uninstall --save-dev some-dev-package
```

## 10. The Final Project Structure

After these operations, your project structure should look like:

```
my-express-app/
├── node_modules/      # Contains all installed packages
├── index.js           # Your application code
├── package.json       # Project configuration and dependencies
└── package-lock.json  # Exact dependency tree
```

This example demonstrates the fundamental npm operations you'll use in most projects. From here, you can continue building your Express application by adding more routes, middleware, and functionality.