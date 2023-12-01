const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: true,
  "chromeWebSecurity": false,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: "https://web.test.tmob.com.br",
    retries: 0,

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    }
  },
  defaultCommandTimeout: 25000
})
