import faker from 'faker-br'
class ComponentesPadraoPage {

    clicaBotao(label) {
        cy.contains(label, { force: true }).should('have.text', label, { force: true }).click({ force: true })
        return this
    }

    clicaBotaoNovo() {
        const label = "Novo"
        cy.contains(label, { force: true }).should('have.text', label, { force: true }).click({ force: true })
        return this
    }

    clicaBotaoProximo() {
        const label = "Proximo"
        cy.contains(label, { force: true }).should('have.text', label, { force: true }).click({ force: true })
        return this
    }

    clicaBotaoSalvar() {
        const label = "Salvar"
        cy.contains(label, { force: true }).should('have.text', label, { force: true }).click({ force: true })
        return this
    }

    clicaBotaoSim() {
        const label = "Sim"
        cy.contains(label, { force: true }).should('have.text', label, { force: true }).click({ force: true })
        return this
    }

    clicaBotaoVisualizar() {
        const label = "Visualizar"
        cy.contains(label, { force: true }).should('have.text', label, { force: true }).click({ force: true })
        return this
    }

    clicaBotaoEditar() {
        const label = "Editar"
        cy.contains(label, { force: true }).should('have.text', label, { force: true }).click({ force: true })
        return this
    }

    clicaBotaoProximoCadastroSimplificado() {
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

    clicaBotaoMenuPosicao(posicao) {
        cy.get('.ant-menu-title-content').eq(posicao).click()
        return this
    }

    clicaStatusInativo() {
        cy.contains('Inativo').click({ force: true })
        return this
    }

    clicaBotaoHomeEditar() {
        cy.get('span.ant-btn-icon svg', { force: true }).eq(3).click({ force: true })
        return this
    }

    clicaBotaoHomeVisualizar() {
        cy.get('span.ant-btn-icon svg', { force: true }).eq(2).click({ force: true })
        return this
    }

    clicaBotaoHomepesquisar() {
        cy.get(':nth-child(4) > .ant-btn', { force: true }).click({ force: true })
        return this
    }

    selecionaIdioma(idioma) {
        cy.get('.ant-select-selection-item > .ant-row', { force: true }).click({ force: true })
        cy.contains(idioma, { force: true }).should('have.text', idioma, ({ force: true })).click({ force: true })
        return this
    }

    selecionaStatus(status) {
        cy.get('#isActive', { force: true }).click({ force: true })
        cy.contains(status).click({ force: true })
        return this;
    }

    selecionaStatusInativo(status) {
        cy.get('#createUser_isActive > :nth-child(2) > :nth-child(2)', { force: true }).click({ force: true })
        cy.contains(status).click({ force: true })
        return this;
    }

    selecionaStatusDiversos(status) {
        cy.contains(status).click({ force: true })
        return this
    }


    selecionaTipo(tipo) {
        cy.get('#type').click({ force: true })
        cy.contains(tipo).wait(1000).click({ force: true })
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
        cy.get('#editUser_birthdate').type(data, { force: true })
        cy.get('.ant-picker-cell-inner').contains(dia).click({ force: true })
        return this
    }

    selecionaDataInicial(data) {
        cy.get('#startAt').click().type(data).type(`{enter}`)
        return this
    }

    selecionaDataFinal(data) {
        cy.get('#endAt').click().type(data).type(`{enter}`)
        return this
    }

    selecionaEmissor() {
        cy.get('#createUser_issuer').click({ force: true })
        cy.contains('Autopass').click({ force: true })
        return this
    }

    selecionaTipoMidia() {
        cy.get('#createUser_mediaType').click({ force: true })
        cy.contains('VTComum').click({ force: true })
        return this
    }

    editaData(data) {
        cy.get('#editUser_birthdate').type(data, { force: true })
        return this
    }

    clicaNoDia(dia) {
        cy.get('.ant-picker-cell-inner').contains(dia).click({ force: true })
        return this
    }

    limpaFiltro() {
        cy.contains('span', 'Limpar filtro').click({ force: true })
        return this
    }

    limpaData() {
        cy.get('#editUser_birthdate').clear({ force: true })
        return this
    }

    limpaTipoUsuario() {
        cy.get('.ant-select-selection-overflow').click({ force: true })
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

    validaTextoAusente(texto) {
        cy.get('[style="flex-direction: row;"] > .ant-layout')
            .should('not.contain', texto);
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
        cy.contains(mensagem, { force: true }).should('have.text', mensagem, { force: true })
        return this
    }

    validatexto(texto) {
        cy.contains(texto).should('have.text', texto)
        return this
    }

    validaFormattedDate(formattedDate) {
        cy.get('.ant-descriptions-item-content').contains(formattedDate)
        return this
    }

    validaFuncaolimparFiltro() {
        cy.get('#description').should('have.value', '')
        return this
    }

    validaFunçãolimparFiltroNome() {
        cy.get('#name').should('have.value', '')
        return this
    }

    escreveDescricao(descricao) {
        cy.get('#description').type(descricao, { force: true }).wait(2000)
        return this
    }

    escreveID(descricao) {
        cy.get('#description').type(descricao, { force: true }).wait(2000)
        return this
    }

    escreveNomeId(operadora) {
        const nome = 'Geraldo'
        operadora = nome
        cy.get('#name').type(operadora, { force: true })
        return this
    }

    escreveTipoUsuario(usuario) {
        cy.get('#name').type(usuario, { force: true })
        return this
    }

    escreveNome(usuario) {
        cy.get('#name').type(usuario, { force: true })
        return this
    }

    limpaCampoNome() {
        cy.get('#name').clear()
        return this
    }

    pesquisaNomeId(nome) {
        cy.get('#name').type(nome, { force: true }).wait(2000)
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

    limpaEditaNome() {
        cy.get('#editUser_name').clear({ force: true })
        return this
    }

    editaNome() {
        const nome = (faker.name.findName())
        cy.get('#editUser_name').type(nome)
        return this
    }

    limpaCodigo() {
        cy.get('#code', { force: true }).clear({ force: true })
        return this
    }

    limpaFiliacao1() {
        cy.get('#editUser_filiation1').clear({ force: true })
        return this
    }

    limpaFiliacao2() {
        cy.get('#editUser_filiation2').clear({ force: true })
        return this
    }

    escreveCodigo(codigo) {
        cy.get('#code', { force: true }).type(codigo)
        return this
    }

    selecionaAcao(acao) {
        cy.get('#action').click({ force: true })
        cy.contains(acao).click({ force: true })
        return this
    }

    validaNome(nome) {
        cy.get('[data-row-key="24"] > .ant-table-cell-ellipsis').contains(nome).should('have.text', nome)
        return this
    }

    excluiTipoDeUsuario() {
        cy.get('.ant-select-selection-item-remove>.anticon>svg').eq(0).click({ force: true })
        return this
    }

    validaDescriçãoTitle(descricao) {
        cy.get('[title]').contains(descricao).should('have.text', descricao)
        return this
    }

    validaDescricaoDataRowKey(descricao) {
        cy.get('[data-row-key]', { force: true }).contains(descricao, { force: true }).should('have.text', descricao)
        return this
    }

    validaDescricaoAntTableRow(descricao) {
        cy.get('.ant-table-row').contains(descricao).should('have.text', descricao)
        return this
    }

    validaDescricaoAntTableCell(descricao) {
        cy.get('.ant-table-cell').contains(descricao, { force: true }).should('have.text', descricao, { force: true })
        return this
    }

    selecionaTitle(dia, dia1) {
        cy.get('[title]').contains(dia, dia1).click({ force: true })
        return this
    }

    selecionaPeriodoDeTempo(periodo) {
        cy.get('.ant-picker').click({ force: true })
        cy.contains(periodo).click({ force: true })
        return this
    }
}
export default new ComponentesPadraoPage