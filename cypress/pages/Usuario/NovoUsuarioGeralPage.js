class novoUsuarioGeral {

    selecionaDataCriacaoUsuario() {
        cy.get('#createUser_birthdate').click()
        return this
    }

    selecionaTipoUsuario() {
        cy.get('.ant-select-selection-overflow')
        return this
    }

    botaonovoUsuarioGeral() {
        cy.get('span').contains('Novo usuário').click()
        return this
    }

    tirarFoto() {
        cy.get('.ant-btn > .ant-row > [style="padding-left: 5px; padding-right: 5px;"]').click()
        cy.get('[style="display: flex;"] > .ant-btn').click()
        return this
    }

    incluirFoto() {
        cy.get('[style=""]').click()
        return this
    }

    excluirFoto() {
        cy.wait(1000)
        cy.get('svg[data-icon="delete"]').click({ force: true })
        return this
    }

    preencheNomeCompleto() {
        cy.get('#createUser_name').type('João teste')
        return this
    }

    preencheNomeSocial() {
        cy.get('#createUser_socialName').type('Social teste')
        return this
    }

    selecionaGeneroMasculino() {
        cy.get('#createUser_gender').click()
        cy.contains('Masculino').click()
        return this
    }

    selecionaGeneroFeminino() {
        cy.get('#createUser_gender').click()
        cy.contains('Feminino').click()
        return this
    }

    selecionaGeneroOutro() {
        cy.get('#createUser_gender').click()
        cy.contains('Outro').click()
        return this
    }

    emailnovoUsuarioGeral() {
        cy.get('#createUser_mailAddress').type('joao@gmail.com')
        return this
    }

    filiacao1 () {
        cy.get('#createUser_filiation1').type('Mamãe')
        return this
    }

    filiacao2 () {
        cy.get('#createUser_filiation2').type('Papai')
        return this
    }

    statusAtivo() {
        cy.get('#createUser_isActive > :nth-child(1) > :nth-child(2)').click()
        return this
    }

    statusInativo() {
        cy.get('.ant-radio-wrapper-checked > :nth-child(2)').click()
        return this
    }

    botaoProximoErroCamposObrigatorios() {
        cy.contains('Proximo').click()
        cy.get('#createUser_birthdate_help > .ant-form-item-explain-error').should('have.text', 'Campo obrigatório')
        cy.get('#createUser_UsrTypes_connect_help > .ant-form-item-explain-error').should('have.text', 'Campo obrigatório')
        cy.get('#createUser_name_help > .ant-form-item-explain-error').should('have.text', 'Campo obrigatório')
        cy.get('#createUser_gender_help > .ant-form-item-explain-error').should('have.text', 'Campo obrigatório')
        cy.get('#createUser_filiation1_help > .ant-form-item-explain-error').should('have.text', 'Campo obrigatório')
        return this
    }
}
export default new novoUsuarioGeral