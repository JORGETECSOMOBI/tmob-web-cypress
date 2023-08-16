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
}
export default new EquipamentoPcdPage