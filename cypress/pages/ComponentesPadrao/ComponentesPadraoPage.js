class ComponentesPadraoPage {

    clicaBotao(label) {
        cy.contains(label, { force: true }).click({ force: true })
        return this
    }

    clicaBotaoProximo() {
        cy.xpath('/html/body/div/div/section/div/section/section/main/div/div[2]/div/button[1]', { force: true }).wait(2000).click({ force: true })
        return this
    }

    clicaBotaoRecarregar() {
        cy.get('[style="flex-direction: row;"] > .ant-layout').click({ force: true })
        return this
    }

    clicaBotaoModal(confirmacao) {
        cy.get('.ant-modal-confirm-btns', { force: true }).contains(confirmacao, { force: true }).click({ force: true })
        return this
    }

    clicaStatusInativo() {
        cy.contains('Inativo').click({ force: true })
        return this
    }

    selecionaIdioma(idioma) {
        cy.get('.ant-select-selection-item > .ant-row').click({ force: true })
        cy.contains(idioma, { force: true }).should('have.text', idioma).click({ force: true })
        cy.contains(idioma, { force: true }).click({ force: true })
        return this
    }

    selecionaStatus(status) {
        cy.get('#isActive', { force: true }).click({ force: true })
        cy.contains(status).click({ force: true })
        return this;
    }


    selecionaTipo(tipo) {
        cy.get('#type').click({ force: true })
        cy.contains(tipo).click({ force: true })
        return this
    }

    selecionatipoEndereco(tipo) {
        cy.get('#UsrAddresses_createMany_data_0_type').click({ force: true })
        cy.contains(tipo).click({ force: true })
        return this
    }

    escreveCEP(cep) {
        cy.get('#UsrAddresses_createMany_data_0_zipCode').type(cep, { force: true })
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

    pesquisaId(id) {
        cy.get('#id').type(id, { force: true })
        cy.wait(1000)
        return this
    }


    validaItemPesquisaPorId() {
        cy.get('.ant-table-row > .ant-table-cell-ellipsis').should('have.text', 'cadeira de rodas')
    }

    selecionaOperadora(operadora) {
        cy.get('#toTransportOperator').click({ force: true })
        cy.contains(operadora).click({ force: true })
        return this
    }


    validaStatusAtivo() {
        cy.get('[style="flex-direction: row;"] > .ant-layout')
            .should('not.contain', 'Inativo');
        return this
    }
    validaStatusInativo() {
        cy.get('[style="flex-direction: row;"] > .ant-layout')
            .should('not.contain', 'Ativo', { force: true })
        return this
    }
    validaStatusAusente(status) {
        cy.get('[style="flex-direction: row;"] > .ant-layout')
            .should('not.contain', status);
        return this
    }

    validaId(id) {
        cy.contains(id).should('have.text', id, { force: true })
        return this
    }

    validaDescricao(descricao) {
        cy.contains(descricao).should('have.text', descricao)
        return this
    }

    validaURL(url) {
        cy.url({ force: true }).should('eq', url, { force: true })
        return this
    }

    validaMensagem(mensagem) {
        cy.contains(mensagem).should('have.text', mensagem)
        return this
    }

    validatexto(texto) {
        cy.contains(texto).should('have.text', texto)
        return this
    }

    validaFunçãolimparFiltro() {
        cy.get('#description').should('have.value', '')
        return this
    }

    escreveDescricao(descricao) {
        cy.get('#description').type(descricao, { force: true }).wait(1000)
        return this
    }

    escreveID(descricao) {
        cy.get('#description').type(descricao, { force: true })
        return this
    }

    escreveNome(nome) {
        cy.get('#name').type(nome, { force: true })
        return this
    }

    pesquisaNomeId(nome) {
        cy.get('#name').type(nome, { force: true }).wait(500)
        return this
    }

    escreveComentario(comentario) {
        cy.get('#comment').type(comentario, { force: true })
        return this
    }

    escreveNumero(numerocasa) {
        cy.get('#UsrAddresses_createMany_data_0_number').type(numerocasa)
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

    escreveCodigo(codigo) {
        cy.get('#code', { force: true }).type(codigo)
        return this
    }
}
export default new ComponentesPadraoPage