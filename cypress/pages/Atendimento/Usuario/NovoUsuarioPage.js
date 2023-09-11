class novoUsuario {

    clicaBotaoCadastroAvancado() {
        cy.contains('Cadastro avançado').click({ force: true })
        return this
    }

    selecionaDataNascimento(data) {
        cy.get('.ant-picker-input').click({ force: true })
        cy.get('.ant-picker-cell-inner').contains(data).click()
        return this
    }

    selecionaTipoUsuario(tipoUsuario) {
        cy.get('#createUser > div > div:nth-child(2) > div:nth-child(1) > div > div > div:nth-child(2) > div > div > div > div > div > div > div').click({ force: true })
        cy.contains(tipoUsuario).click()
        cy.get('.ant-col-lg-9').click()
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

    preencheNomeCompleto(nomeCompleto) {
        cy.get('#createUser_name').type(nomeCompleto, { force: true })
        return this
    }

    preencheNomeSocial(nomeSocial) {
        cy.get('#createUser_socialName').type(nomeSocial, { force: true })
        return this
    }

    selecionaGenero(genero) {
        cy.get('#createUser_gender').click({ force: true })
        cy.contains(genero).click()
        return this
    }

    emailnovoUsuario(email) {
        cy.get('#createUser_mailAddress').type(email, { force: true })
        return this
    }

    filiacao1(filiacao1) {
        cy.get('#createUser_filiation1').type(filiacao1, { force: true })
        return this
    }

    filiacao2(filiacao2) {
        cy.get('#createUser_filiation2').type(filiacao2, {force: true})
        return this
    }

    statusAtivo() {
        cy.get('#createUser_isActive > :nth-child(1) > :nth-child(2)').click()
        return this
    }

    statusInativo0() {
        cy.get(':nth-child(2) > .ant-radio > .ant-radio-input').eq(0).click({force: true})
        return this
    }

    statusInativo1() {
        cy.get(':nth-child(2) > .ant-radio > .ant-radio-input').eq(1).click({force: true})
        return this
    }

    clicaBotaoProximo() {
        cy.get('button:contains("Proximo")').click({ force: true })
        return this
    }
}
export default new novoUsuario