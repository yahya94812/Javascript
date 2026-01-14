## steps for creating and publishing package in npm repository

1. create a node project package with code (ES modules are preferable)
2. create npm account with 2FA
3. run `npm login`
4. run `npm publish`

## steps for using custom package locally

Create a Global Link

From inside the package directory:

```bash
npm link
```

What this does:

- Registers your package globally in npm
- Creates a symlink in npm’s global `node_modules`

You can verify with:

```bash
npm ls -g --depth=0
```

---

## Step 3: Link the Package to Your Project

Go to the consuming project:

```bash
cd /path/to/my-project
```

Link the package:

```bash
npm link my-custom-package
```

Now your project’s `node_modules/my-custom-package` points directly to your local package.

---

## Step 4: Import and Use the Package

### CommonJS

```js
const myPackage = require("my-custom-package");
```

### ES Modules

```js
import myPackage from "my-custom-package";
```

Any changes made in `my-custom-package` will be reflected immediately.

---

## Step 5: Unlinking (Cleanup)

### Remove from project:

```bash
npm unlink my-custom-package
```

### Remove global link:

```bash
cd /path/to/my-custom-package
npm unlink
```

---
