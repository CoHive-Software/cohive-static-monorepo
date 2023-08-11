<p align="center">
  <img src="packages/ui/assets/Circle_Logo_Light_Text_Square.png" width="100"/>
</p>
<p align="center"><em>CoHive Software General Purpose Monorepo</em></p>

---

This Monorepo uses the Turborepo starter

## How this Monorepo was created:

Run the following command:

```sh
npx create-turbo@latest
```

## Kick it off:
`cohive-general-purpose` <-- root
```sh
npm run dev
```
_this will kick off all `dev` scripts in each subsequent `app` through the `turborepo.json` "dev" pipeline_
_[turborepo tasks pipeline docs](https://turbo.build/repo/docs/handbook/dev#setup-with-turborepo)_

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages
##### Apps
- `CoHive-Site`: [Next.js](https://nextjs.org/) app serving CoHive Software Static site
- `discord-ticket-bot`: a Node.js server to persist Discord Bot with Twilio SDK for SMS and Email push notifications
- `docs`: an Amazon SES email server coupled to CoHive Domain
##### Packages
- `ui`: a stub React component library shared by both `web` and `docs` applications [tbd]
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
npm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
npm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

## Adding a new Internal Package [Turbo Repo Docs](https://turbo.build/repo/docs/handbook/sharing-code/internal-packages)
_for use inside the monorepo_
### Detailed Step by Step [Example Here](./ADD_MONO_REPO_PACKAGE.md)

## Quick Reference
### Quick reference - creating a new internal package
1. Create a new folder in `packages/<folder>`
2. Add a `package.json`, with name and types pointing at `src/index.ts` (or `src/index.tsx`)
3. Add `src/index.tsx`, with at least one named export
4. [Install your packages](https://turbo.build/repo/docs/handbook/package-installation) from root

### Quick reference - importing an internal package
1. Ensure that you're [importing it correctly](https://turbo.build/repo/docs/handbook/sharing-code/internal-packages#3-import-the-package)
2. Ensure that you've [configured your app to transpile it](https://turbo.build/repo/docs/handbook/sharing-code/internal-packages#6-configuring-your-app)

## IMPORTANT

Whenever you add/remove **workspaces** or change their locations on the filesystem, you'll need to re-run your `install` command from root to set up your workspaces again.

[Docs](https://turbo.build/repo/docs/handbook/workspaces#managing-workspaces)