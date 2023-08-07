class NovoUsuario {

    botaoNovoUsuario() {
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
        cy.get('svg[data-icon="delete"]').click({ force: true });
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

}
export default new NovoUsuario