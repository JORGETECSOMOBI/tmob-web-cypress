class ComponentesPadraoPage {

    clicaBotao(label) {
        cy.contains(label, { force: true }).click({ force: true })
        return this
    }

    clicaBotaoRecarregar() {
        cy.get('[style="flex-direction: row;"] > .ant-layout').click()
    }

    clicaBotaoModal(confirmacao) {
        cy.get('.ant-modal-confirm-btns').contains(confirmacao).click()
        return this
    }

    clicaStatusInativo() {
        cy.contains('Inativo').click({ force: true })
        return this
    }

    selecionaLinguagem(lingua) {
        cy.get('.ant-select-selection-item > .ant-row').click()
        cy.contains(lingua).click()
        return this
    }

    selecionaStatus(status) {
        cy.get('#isActive').click({ force: true })
        cy.contains(status).click({ force: true })
        return this
    }

    pesquisaEquipamentoPorId(id) {
        cy.get('#description').type(id)
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
        cy.get('#description').type(descricao)
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