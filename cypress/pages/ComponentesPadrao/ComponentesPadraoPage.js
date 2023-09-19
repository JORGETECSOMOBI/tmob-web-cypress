class ComponentesPadraoPage {

    clicaBotao(label) {
        cy.contains(label, { force: true }).click({ force: true })
        return this
    }

    clicaBotaoRecarregar() {
        cy.get('[style="flex-direction: row;"] > .ant-layout').click({ force: true })
        return this
    }

    clicaBotaoModal(confirmacao) {
        cy.get('.ant-modal-confirm-btns').contains(confirmacao).click({ force: true })
        return this
    }

    clicaStatusInativo() {
        cy.contains('Inativo').click({ force: true })
        return this
    }

    selecionaLinguagem(lingua) {
        cy.get('.ant-select-selection-item > .ant-row').click({ force: true })
        cy.contains(lingua).should('have.text', lingua).click({ force: true })
        return this
    }

    selecionaStatus(status) {
        cy.get('#isActive').click({ force: true })
        cy.contains(status).click({ force: true })
        return this
    }

    selecionaTipo(tipo) {
        cy.get('#type').click({ force: true })
        cy.contains(tipo).click()
        return this
    }

    selecionadata(data, dia) {
        cy.get('#createUser_birthdate').type(data, { force: true })
        cy.get('.ant-picker-cell-inner').contains(dia).click()
        return this
    }

    pesquisa(pesquisa) {
        cy.get('#description').type(pesquisa, { force: true })
        cy.wait(1000)
        return this
    }

    validaItemPesquisaPorId() {
        cy.get('.ant-table-row > .ant-table-cell-ellipsis').should('have.text', 'cadeira de rodas')
        return this
    }

    validaStatusAtivo() {
        cy.get('[style="flex-direction: row;"] > .ant-layout')
            .should('not.contain', 'Inativo');
        return this
    }
    validaStatusInativo() {
        cy.get('[style="flex-direction: row;"] > .ant-layout')
            .should('not.contain', 'Ativo');
        return this
    }
    validaStatusAusente(status) {
        cy.get('[style="flex-direction: row;"] > .ant-layout')
            .should('not.contain', status);
        return this
    }

    validaId(id) {
        cy.contains(id).should('have.text', id)
        return this
    }

    validaDescricao(descricao) {
        cy.contains(descricao).should('have.text', descricao)
        return this
    }

    validaURL(url) {
        cy.url({ force: true }).should('eq', url)
        return this
    }

    validaMensagem(mensagem) {
        cy.contains(mensagem).should('have.text', mensagem)
        return this
    }

    validaFunçãolimparFiltro() {
        cy.get('#description').should('have.value', '')
        return this
    }

    escreveDescricao(descricao) {
        cy.get('#description').type(descricao, { force: true })
        return this
    }

    escreveID(descricao) {
        cy.get('#description').type(descricao)
        return this
    }

    escreveNome(nome) {
        cy.get('#name').type(nome, { force: true })
        return this
    }

    escreveComentario(comentario) {
        cy.get('#comment').type(comentario)
        return this
    }

    limpaDescricao() {
        cy.get('#description', { force: true }).clear({ force: true })
        return this
    }

    limpaNome() {
        cy.get('#name', { force: true }).clear({ force: true })
        return this
    }

    limpaCodigo() {
        cy.get('#code', { force: true }).clear({ force: true })
        return this
    }
}
export default new ComponentesPadraoPage