import { faker } from '@faker-js/faker';
let nomeGerado = faker.person.fullName();
const nomeInicial = faker.person.firstName();
const emailGerado = faker.internet.email();
describe('Criando usuário', () => {
    describe('Atendimento', () => {
    it('User', () => {
      cy.userMain()
      cy.loginTmob()
      //Const para gerar numero telefonico
      const telid = () => Cypress._.random(0, 1e11)
      const tel = telid()
      const telTest = `${tel}`
      
      cy.get('.mastermasteruserfullWidth-0-2-55 > .ant-btn').click()
      cy.get('.ant-picker-input').click({force: true}).wait(300)
      cy.get('[title="2022-06-08"]').click()
      cy.get('.ant-select-selection-overflow').click({force: true}).wait(200)
      cy.get('[title="Comum"]').click({force: true}).wait(200)
      cy.get('#createUser_name').click().type(nomeGerado)
      cy.get('#createUser_socialName').type(nomeInicial)
      cy.get('#createUser_gender').click()
      cy.get('[title="Male"]').click()
      cy.get('#createUser_mailAddress').type(emailGerado)
      cy.get('#createUser_motherName').type(nomeGerado)
      cy.get('#createUser_fatherName').type(nomeGerado)
      cy.get(':nth-child(2) > .ant-radio > .ant-radio-input').check()
      cy.get('.ant-select-selection-overflow').type('{enter}')
      cy.get('.mastermasteruserspaceButton-0-2-88').click()
      cy.get('#createUser_UsrDocuments_createMany_data_0_value').type("45787458745")//necessário gerar novo cpf
      cy.get('.mastermasteruserspaceButton-0-2-88').click()
      cy.get('.ant-form-item-control-input-content > .ant-select > .ant-select-selector').type('{downarrow}').type('{enter}')
      cy.get(':nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker').type('01/02/2024').type('{enter}')
      cy.get(':nth-child(2) > .ant-radio > .ant-radio-input').check()
      cy.get('.mastermasteruserspaceButton-0-2-88').click()
      cy.get(':nth-child(1) > :nth-child(3) > .ant-row-start > :nth-child(2) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector').type('{downarrow}').type('{enter}')
      cy.get(':nth-child(3) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector').type('{enter}')
      cy.get('#createUser_UsrPhones_createMany_data_0_number').type(telTest)
      cy.get(':nth-child(2) > :nth-child(3) > .ant-row-start > :nth-child(2) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector').type('{enter}')
      cy.get('#createUser_UsrAddresses_createMany_data_0_zipCode').type('01246-080')
      cy.get('#createUser_UsrAddresses_createMany_data_0_number').type('321')
      cy.get('.mastermasteruserspaceButton-0-2-88').click()
      cy.get('#createUser_UsrAddresses_createMany_data_0_number').type('123')
      cy.get('.mastermasteruserspaceButton-0-2-88').click()
      cy.get('.ant-result-title').should('have.text', 'O usuário foi cadastrado com sucesso')
      cy.get('.ant-btn-primary > a').click()
      cy.get(':nth-child(2) > [style="margin-left: -8px; margin-right: -8px; row-gap: 16px;"] > :nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector').type('{enter}')
      cy.get(':nth-child(2) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector').type('{enter}')
      cy.get(':nth-child(3) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector').type('{enter}')
      cy.get('.mastermastermediaspaceButton-0-2-44').click()
      cy.get('.ant-modal-confirm-btns > .ant-btn-primary').click().wait(2000)
      cy.get('.ant-result-title').should('have.text', 'O cartão foi criado com sucesso')
    })
}) })