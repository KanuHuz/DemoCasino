const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/examples/**/*.js",
    defaultCommandTimeout: 15000,
    pageLoadTimeout: 15000,
    // base url is declared as env variable
    baseUrl: "https://demo.casino/",
    env: {
      url: "https://demo.casino/"
},
  },
});
