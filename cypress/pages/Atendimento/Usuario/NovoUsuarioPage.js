class novoUsuario {

    selecionaDataCriacaoUsuario() {
        cy.get('.ant-picker-input').eq(0).click()
        cy.contains('15').click()
        return this
    }

    selectTipoUsuario() {
        cy.get('.ant-select-selection-overflow').eq(0).click({ force: true })
        return this
    }

    selecionaNomeTipoUsuario(nome) {
        cy.get(".ant-select-item-option-content").contains(nome).click({force: true})
        return this 
    }

    botaonovoUsuario() {
        cy.get('span').contains('Novo usuário').click()
        return this
    }

    tirarFoto() {
        cy.get('.ant-btn > .ant-row > [style="padding-left: 5px; padding-right: 5px;"]').click({ force: true })
        cy.get('.ant-modal-wrap').click({ force: true })
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

    emailnovoUsuario() {
        cy.get('#createUser_mailAddress').type('joao@gmail.com')
        return this
    }

    filiacao1() {
        cy.get('#createUser_filiation1').type('Mamãe')
        return this
    }

    filiacao2() {
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

    clicaBotaoProximo() {
        // Adicione essa linha no seu teste Cypress
        cy.get('button:contains("Proximo")').click({ force: true })
        return this
    }
}
export default new novoUsuario