#  Automation of a CasinoDemo using Cypress
Repository to showcase the implementation of Cypress together with Page Object model, fixtures and custom commands.

#  Pre-requirements
To install the project's dependencies and run the automated tests, you need to have [Node.js](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/) installed on your computer.
> npm install cypress --save-dev

A custom Cypress plugin was also included to manage real events. It can be installed running:

> npm i cypress-real-events

> The following versions of the above-mentioned packages were used during the development of this project (node v18.12.1 and npm 9.2.0.)

> Installing Node.js automatically installs NPM so you don't need to do it yourself.

#  Installation
After cloning the project, access it's directory (cd DemoCasino) and run npm install to install the dev dependencies.

#  Running the tests
Run 'npm run casinodemo' to open cypress and execute the tests in the in-built test runner.

# Overview of the project
This was created to automate a casino site using Cypress showcasing various of it's more powerful capabilities.
Upon request, the registration process of an user first entering the site was automated considering an atomic flow and testing
only one functionality at the time.
Secondly, as it was initially understood, an e2e test case was implemented considering a very common situation involving an user flow that consists of users trying to play a game were the authentication process is needed.
Assertions to control for the correct scenario are present for both situations.

# Final considerations
A more robust framework can be produced by the addition of Cucumber BDD and a reporting tool like mochawesome but their inclusion was way
beyond the scope of the solicited work.
