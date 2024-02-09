import '@testing-library/cypress/add-commands'

// cypress/support/commands.js

// Comando personalizado para limpar a pasta de download
Cypress.Commands.add('limparPastaDownloads', () => {
  const downloadsFolder = 'C:/Users/cardo/meusProjetos/tmob-web-cypress/cypress/downloads'
  // Use o cmd para excluir os arquivos na pasta de download
  cy.exec(`cmd /c "cd /d ${downloadsFolder} && del /q *.*"`)
});

// cypress/support/commands.js

const fs = require('fs');

Cypress.Commands.add('deleteFileByModifiedDate', (folderPath) => {
  cy.task('getLatestModifiedFile', folderPath).then((filePath) => {
    if (filePath) {
      try {
        fs.unlinkSync(filePath);
        cy.log(`Arquivo ${filePath} excluído com sucesso.`);
      } catch (error) {
        cy.log(`Erro ao excluir arquivo ${filePath}: ${error.message}`);
      }
    } else {
      cy.log('Nenhum arquivo encontrado para exclusão.');
    }
  });
});

