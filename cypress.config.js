const { defineConfig } = require("cypress");
const fs = require('fs');

module.exports = defineConfig({
  watchForFileChanges: true,
  env: {
    "chromeWebSecurity": false
  },
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: "https://web.test.tmob.com.br",
    retries: 2,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      // Adicione a definição da tarefa getLatestModifiedFile
      on('task', {
        getLatestModifiedFile: (folderPath) => {
          const files = fs.readdirSync(folderPath);
          const latestFile = files.reduce((latest, file) => {
            const filePath = `${folderPath}/${file}`;
            const fileStat = fs.statSync(filePath);
            if (!latest || fileStat.mtimeMs > latest.mtimeMs) {
              return { filePath, mtimeMs: fileStat.mtimeMs };
            }
            return latest;
          }, null);

          return latestFile ? latestFile.filePath : null;
        },
        // Adicione outras tarefas aqui, se necessário
      });

      return config;
    }
  },
  defaultCommandTimeout: 25000
});


