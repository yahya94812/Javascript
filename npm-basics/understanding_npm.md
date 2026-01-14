# Understanding npm! Node's Package Manager

npm (Node Package Manager) is the default package manager for Node.js, the popular JavaScript runtime environment. It helps developers discover, share, and use code packages, and also manages dependencies in their projects.

## Core Concepts of npm

### Packages
Packages are the building blocks of npm - bundles of code that solve specific problems. They can range from tiny utilities to complete frameworks.

### Key npm Functions

1. **Package Installation**
   - Install packages globally: `npm install -g <package-name>`
   - Install as project dependency: `npm install <package-name>`
   - Install as development dependency: `npm install --save-dev <package-name>`

2. **Package Management**
   - `package.json`: The configuration file that tracks dependencies
   - `node_modules`: Directory where packages are installed
   - `npm init`: Creates a new package.json file

3. **Dependency Types**
   - Dependencies: Required in production
   - DevDependencies: Only needed during development
   - PeerDependencies: Required by your package but expected to be installed by the consumer

4. **Version Management**
   - Semantic versioning (semver): MAJOR.MINOR.PATCH
   - Version ranges: `^1.2.3` (compatible with 1.x.x), `~1.2.3` (compatible with 1.2.x)

## Common npm Commands

```
npm init            # Initialize a new package.json
npm install         # Install all dependencies in package.json
npm install express # Install a specific package
npm update          # Update packages to latest versions
npm run <script>    # Run scripts defined in package.json
npm publish         # Publish your package to npm registry
npm search <term>   # Search for packages
npm list            # List installed packages
```
### running binaries using npm
* npm run <some_thing>
* this "some_thing" is mention under "scripts" object of package.json as alias which mapped to a specific binary in node_modules/.bin/
* for using npm run <some_thing>, it must be mapped to some binary(in the node_modules/.bin)
* you can execute binary without npm by directly executing binary from node_modules/.bin, not npm run <binary_name>

### Why npm run dev Works Automatically
When you run:
   npm run dev
npm automatically injects node_modules/.bin into the PATH for that command.
So this works:
"dev": "nodemon index.js"
Even though nodemon is not global.

## modules resolution
- When you run node index.js, Node resolves imports by first checking core modules, then local files, and finally searching for libraries in the nearest node_modules directory starting from the project folder and moving upward.

## Best Practices

- Lock dependencies with package-lock.json
- Use `npm ci` for clean installs in CI/CD environments
- Audit dependencies for security vulnerabilities with `npm audit`
- Consider using npm scripts as your build tool

