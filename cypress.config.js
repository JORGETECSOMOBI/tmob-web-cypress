const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  "chromeWebSecurity": false,
  e2e: {
    baseUrl: "https://web.test.tmob.com.br",
    retries: 2,

    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    }
  },
  defaultCommandTimeout: 25000
})
