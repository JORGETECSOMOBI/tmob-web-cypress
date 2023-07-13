import '@testing-library/cypress/add-commands'

Cypress.Commands.add('loginTmob', () => {
  cy.get('#amplify-id-0').type('carlos.sottile@tecsomobi.com.br')//Campo de usuário
  cy.get('#amplify-id-2').type('Solrack1!')//Campo Senha
  cy.get('.amplify-button--primary').click()//Botão de Confirmação de login
  cy.wait(2000)//Caso seja necessário aguardar a resposta do site
  cy.get('.amplify-button--link').contains("Skip").click()//Pular validação de email confirm
})

Cypress.Commands.add('userMain', () => {
  cy.visit('https://web.test.tmob.com.br/user/')
  //Comando para ignorar erro do console
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
})

Cypress.Commands.add('urlUserOrganization', () => {
  cy.visit('https://web.test.tmob.com.br/user/organization')
  //Comando para ignorar erro do console
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
})

Cypress.Commands.add('urlUserServicestations', () => {
  cy.visit('https://web.test.tmob.com.br/user/servicestations')
  //Comando para ignorar erro do console
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
})

Cypress.Commands.add('urlUserTypes', () => {
  cy.visit('https://web.test.tmob.com.br/user/userTypes')
  //Comando para ignorar erro do console
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
})

Cypress.Commands.add('urluserDisabilityEquipments', () => {
  cy.visit('https://web.test.tmob.com.br/user/userDisabilityEquipments')
  //Comando para ignorar erro do console
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
})

Cypress.Commands.add('urluserStudentPeriods', () => {
  cy.visit('https://web.test.tmob.com.br/user/userStudentPeriods')
  //Comando para ignorar erro do console
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
})

Cypress.Commands.add('urluserStudentTypes', () => {
  cy.visit('https://web.test.tmob.com.br/user/userStudentTypes')
  //Comando para ignorar erro do console
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
})

Cypress.Commands.add('urluserStudentLevels', () => {
  cy.visit('https://web.test.tmob.com.br/user/userStudentLevels')
  //Comando para ignorar erro do console
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
})

Cypress.Commands.add('urluserdocumentTypes', () => {
  cy.visit('https://web.test.tmob.com.br/user/documentTypes')
  //Comando para ignorar erro do console
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
})

Cypress.Commands.add('urlusericds', () => {
  cy.visit('https://web.test.tmob.com.br/user/usericds')
  //Comando para ignorar erro do console
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
})

Cypress.Commands.add('testscreenLogin', () => {
  cy.visit('https://web.test.tmob.com.br')
  //Comando para ignorar erro do console
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
})

Cypress.Commands.add( 'multiSelect', ( selector , text) => {
  cy.get(`.ant-select${selector} > .ant-select-selector > .ant-select-selection-overflow`).click();
  cy.get(`.ant-select${selector} .ant-select-selection-search input`).clear()
  cy.get(`.ant-select${selector} .ant-select-selection-search input`).invoke('attr', 'id').then((selElm) => {
    const dropDownSelector = `#${selElm}_list`;
    cy.get(`.ant-select${selector} .ant-select-selection-search input`).type(`${text}`);
    cy.get(dropDownSelector).next().find('.ant-select-item-option-content').click()
  })
})