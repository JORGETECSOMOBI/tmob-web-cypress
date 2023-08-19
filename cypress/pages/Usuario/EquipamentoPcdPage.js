class EquipamentoPcdPage {

    validaPaginaEquipamentoPcd() {
        cy.get(':nth-child(3) > .ant-breadcrumb-link').should('have.text', 'Equipamento PcD')
        return this
    }

    pesquisaEquipamentoPorId() {
        cy.get('#description').type('23')
        return this
    }

    validaItemPesquisaPorId() {
        cy.get('.ant-table-row > .ant-table-cell-ellipsis').should('have.text', 'cadeira de rodas')
        return this
    }

    iconeVisualizar() {
        cy.contains('Visualizar').click()
        return this
    }

    validaPaginaDetalhes() {
        cy.get('.ant-row-space-between > .ant-col > .ant-typography').should('have.text', 'cadeira de rodas')
        return this
    }

    iconeEditar() {
        cy.contains('.ant-btn', 'Editar').find('svg').click({force: true})
        return this
    }

    validaPaginaEditar() {
        cy.get(':nth-child(5) > .ant-breadcrumb-link').should('have.text', 'Editar')
        return this
    }

    filtroStatus() {
        cy.get('#isActive').click()
        return this
    }

    selecionaFiltroAtivo() {
        cy.contains('div[title="Ativo"]', 'Ativo').click()
        return this
    }

    selecionaFiltroInativo() {
        cy.contains('div[title="Inativo"]', 'Inativo').click()
        return this
    }

    validaBuscaSomenteStatusAtivo() {
        cy.get('[style="flex-direction: row;"] > .ant-layout')
            .should('not.contain', 'Inativo');
        return this
    }

    validaBuscaSomenteStatusInativo() {
        cy.get('[style="flex-direction: row;"] > .ant-layout')
            .should('not.contain', 'Ativo');
        return this
    }

    BotaoLimparFiltro() {
        cy.contains('Limpar filtro').click()
        return this
    }

    validaFunçãolimparFiltro() {
        cy.get('#description').should('have.value', '')
        return this
    }

    recarregaPagina() {
        cy.get('#rc_select_3').click()
        return this
    }

    configuraTimeRecarregar(tempo) {
        cy.contains(tempo).click()
        return this
    }

    validaTimeRecargaConfigurado(tempo) {
        cy.wait(3000)
        cy.get('.ant-select-selection-item').eq(1).should('have.text', tempo)
        return this
    }

    acessaPaginaCriacaoNovoPcd() {
        cy.contains('Novo').click()
        return this
    }

    validaRedirecionamentoPaginaNovoPcD() {
        cy.get(':nth-child(5) > .ant-breadcrumb-link').should('have.text', 'Novo')
        return this
    }
}

export default new EquipamentoPcdPage