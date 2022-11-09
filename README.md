# Cypress Starter Kit

A no-nonsense Cypress template for copying into new or existing projects, with some sensible defaults and useful helper functions.

## What's included

- A sample `cypress.config.js` file and associated folder structure.
  - The `chromeWebSecurity` property has been set to `false` so that example tests do not fail due to CORS policy for third party analytics. It may not be needed for your project. Note also that this setting has no effect in Firefox, so your tests may fail in Firefox if they rely upon this setting.
- A `cy.login()` [custom command](https://docs.cypress.io/api/cypress-api/custom-commands.html), making use of an `auth.json` [fixture](https://docs.cypress.io/api/commands/fixture.html).
- A `cy.viewportPreset()` custom command by [Cameronjpr](https://github.com/Cameronjpr) that extends the [cy.viewport()](https://docs.cypress.io/api/commands/viewport) command to add additional viewport presets.
- Some example smoke tests for [the-internet.herokuapp.com](https://the-internet.herokuapp.com/) in the `sample-test.cy.js` file, with inline documentation.
- A `routes.js` file with examples, demonstrating how [cy.intercept()](https://docs.cypress.io/api/commands/intercept.html) can be used for conditional waits.
- Empty `before()` and `beforeEach()` [Mocha hooks](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Hooks) in the `cypress/support/index.js` file. You could use these to run Cypress commands that run before each test run or at the start of every test.
- A `tsconfig.json` file in the `cypress/` directory that will provide Intellisense code completion in supported code editors.
- A sample `package.json` file, for demonstrating the `cypress:open` and `cypress` scripts that can be triggered via `npm run`.
- A sample GitHub Actions workflow that installs Cypress and runs the tests.
- A sample `gitlab-ci.yml` file that tells the [GitLab mirror of this repo](https://gitlab.com/james.sheasby.thomas/cypress-starter-kit) to install Cypress and run the tests via Firefox and Chrome via a [GitLab CI Pipeline](https://docs.gitlab.com/ee/ci/pipelines/). You can see the latest GitLab CI runs for this repo from its [Pipelines dashboard](https://gitlab.com/james.sheasby.thomas/cypress-starter-kit/-/pipelines).

## Pre-requisites

- A recent version of [Node.js](https://nodejs.org/en/), installed via the official installer or the package manager of your choice.
- [Git](https://git-scm.com/), if you're a Windows user and haven't already installed it. Mac users can install Git and other basic command line tools using the `xcode-select --install` command, and update these to newer/better versions using [Homebrew](https://brew.sh/).
- A local copy of your project's Git repository. If you don't have an actual project to work with, make a new folder called `cypress-playground` or similar.
- (Optional) A code editor that supports [Intellisense code completion](https://docs.cypress.io/guides/tooling/IDE-integration.html#Intelligent-Code-Completion), such as [VS Code](https://code.visualstudio.com/).

## Setup

- Copy the `cypress.config.js` file into your project's root directory.
- Copy over the `cypress/` directory
  - If you decide to put the `cypress/` directory in a subfolder, adjust the relevant `cypress.config.js` values accordingly. You will also need to adjust the relative paths (e.g. `../node_modules`) in the `tsconfig.json` file.
- Browse to your project's root directory from the command line, then run `npx cypress open` to download Cypress to your machine and start the UI Test Runner. 
  - If you don't intend to use [Component Testing](https://docs.cypress.io/guides/component-testing/writing-your-first-component-test), you can jump straight [End-to-end testing mode](https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test) by setting the `--e2e` and `--browser` command line options, e.g. `npx cypress open --e2e --browser chrome`
  - Select `sample-test.cy.js` from the list of tests, then watch them run and (hopefully!) pass.
  - You can stop the UI Test Runner simply by closing its window(s), or by typing `Ctrl + C` at the command line.
- Update the `baseUrl` in `cypress.config.js` to your project's local/integration environment, then start [writing tests](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html)!
  - Tests that are currently open in the UI Test Runner will automatically restart whenever a relevant file is modified, so you can see your tests pass or fail in real time.
- You can also kick off a headless test run of the Sample test suite using `npx cypress run`.

### Handling user credentials

When working with user credentials, even on a non-production site, you should avoid committing them to Git/GitHub. Instead, you can distribute an `auth.json.dist` file with sensitive data removed, then share the necessary info via a password manager or another form of secure data store. Users can make a copy of the .dist file, rename it to `auth.json` then fill in the required values.

To prevent yourself and others from committing sensitive data, you can add the relevant fixture files to your `.gitignore` file, like so:
```
cypress/fixtures/auth.json
```

Sensitive data can also be populated using [Environment Variables](https://docs.cypress.io/guides/guides/environment-variables.html), then accessed using [Cypress.env()](https://docs.cypress.io/api/cypress-api/env.html#Syntax).

### Adding Cypress to your project

To permanently add Cypress to a project that is already using npm or yarn, run _one_ of the following commands to install Cypress as a development dependency:

```
npm install cypress --save-dev
yarn add cypress -D
```

If the project does not have a package.json, you will first need to run `npm init` or `yarn init`.

From there, add the following to the scripts section of your `package.json`:
```
"cypress": "cypress run --e2e",
"cypress:open": "cypress open --e2e"
```

This will allow you to launch the UI Test Runner using `npm run cypress:open` and the CLI Test Runner using `npm run cypress` (or their Yarn equivalents).

When a new version of Cypress becomes available, you can update it within your repo using `npm install --save-dev cypress@x.y.z` or `yarn upgrade cypress@x.y.z`, where `x.y.z` is the version of Cypress (e.g. `10.11.0`) you want to install.

That's it! If you need any help with any of the above, contact me on Twitter ([@RightSaidJames](https://twitter.com/rightsaidjames)) or find me on the [Ministry of Testing Slack](https://www.ministryoftesting.com/slack_invite). 

If you want to learn more about [Cypress commands](https://docs.cypress.io/api/commands/get.html) and ['best practices'](https://docs.cypress.io/guides/references/best-practices.html), check out the amazingly detailed [Cypress Docs](https://docs.cypress.io/).

## Contributing

Contributions to this repository are warmly welcomed, especially:
- Improvements to the setup instructions
- Improvements to inline documentation 
- Additional example tests and custom commands

If in doubt, raise an [issue](https://github.com/rightsaidjames/cypress-starter-kit/issues) or start a [discussion](https://github.com/rightsaidjames/cypress-starter-kit/discussions) and I'll respond as soon as I can.
