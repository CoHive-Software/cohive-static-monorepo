# How to add a new Internal Package

## 1. Create a new package

Inside /packages, create a new folder called math-helpers.

```sh
mkdir packages/math-helpers
cd packages/math-helpers
```

Create a package.json:

`packages/math-helpers/package.json`
```json
{
  "name": "math-helpers",
  "dependencies": {
    // Use whatever version of TypeScript you're using
    "typescript": "latest"
  }
}
```

Create a src folder, and add a TypeScript file at packages/math-helpers/src/index.ts.

`packages/math-helpers/src/index.ts`
```ts
export const add = (a: number, b: number) => {
  return a + b;
};

export const subtract = (a: number, b: number) => {
  return a - b;
};
```

You'll also need to add a tsconfig.json at packages/math-helpers/tsconfig.json:

`packages/math-helpers/tsconfig.json`
```json
{
  "compilerOptions": {
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "isolatedModules": true,
    "moduleResolution": "node",
    "preserveWatchOutput": true,
    "skipLibCheck": true,
    "noEmit": true,
    "strict": true
  },
  "exclude": ["node_modules"]
}
```
Great! We've now got all the files we need for our internal package.

## 2. Import the package

We're now going to import the package and see what happens. Go into one of your apps, and add math-helpers into the dependencies of its package.json:

`apps/web/package.json`
```json
{
  "dependencies": {
    "math-helpers": "*"
  }
}
```

Install [all packages](https://turbo.build/repo/docs/handbook/package-installation) from root to ensure that dependency works. (app root not monorepo root?)

Now add an import from math-helpers into one of your app's source files:

```ts
+ import { add } from "math-helpers";

+ add(1, 2);
```

You'll likely see an error!

`Cannot find module 'math-helpers' or its corresponding type declarations.`

That's because we've missed a step. We haven't told our math-helpers/package.json what the entry point to our package is.

## 3. Fix main and types

Go back to packages/math-helpers/package.json and add two fields, main and types:

`packages/math-helpers/package.json`
```json
{
  "name": "math-helpers",
  "main": "src/index.ts",
  "types": "src/index.ts",
  "dependencies": {
    "typescript": "latest"
  }
}
```

Now, anything that imports our math-helpers module will be pointed directly towards the src/index.ts file - that's the file that they will import.

Go back to apps/web/pages/index.tsx. The error should be gone!

## 5. Try running the app

Now, try running that app's dev script. In the default turborepo, this will be as easy as:

```sh
turbo dev
```

When it starts running, you'll likely see an error in your web browser:

```sh
../../packages/math-helpers/src/index.ts
Module parse failed: Unexpected token (1:21)
You may need an appropriate loader to handle this file type,
currently no loaders are configured to process this file.
See https://webpack.js.org/concepts#loaders
> export const add = (a: number, b: number) => {
|   return a + b;
| };
```

This is what happens when you try and import an un-bundled file into a Next.js app.

The fix is simple - we need to tell Next.js to bundle the files from certain packages it imports.

## 6. Configuring your app

We can do that using transpilePackages in next.config.js (requires v13.1+):

`apps/web/next.config.js`
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['math-helpers'],
};

module.exports = nextConfig;
```

Restart your dev script, and go to the browser.

**The error has disappeared!**

## 7. Summary

We are now able to add any amount of code into our math-helpers package, and use it in any app in our monorepo. We don't even need to build our package - it just works.

This pattern is extremely powerful for creating pieces of code that can be easily shared between teams.