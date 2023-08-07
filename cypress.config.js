const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://web.test.tmob.com.br",
    retries: 3, // Definindo 3 tentativas para cada teste
    waitForNavigation: 'networkidle2', // Aguardar até que não haja mais de 2 conexões de rede por 500ms
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    }
  },
  defaultCommandTimeout: 10000 // Definindo um tempo de espera de 10 segundos (10000 milissegundos) para cada comando
});
