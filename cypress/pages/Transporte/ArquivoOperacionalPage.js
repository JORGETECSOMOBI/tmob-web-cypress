class ArquivoOperacionalPage {
    pesquisaId(id) {
        cy.get('#id').type(id)
        cy.get('.ant-table-row > :nth-child(1)').contains(id).should('have.text', id)
        return this
    }

    pesquisaTag(tag) {
        cy.get('#status').click({ force: true })
        cy.contains(tag).click({ force: true })
        return this
    }

    clicaBotaoTag() {
        cy.get(':nth-child(3) > .ant-btn > :nth-child(2)').click({ force: true })
        return this
    }

    SelecionaTag(tag) {
        cy.get(':nth-child(2) > .ant-select > .ant-select-selector > .ant-select-selection-search > #rc_select_3').click({ force: true })
        cy.wait(1000)
        cy.get('.ant-select-item-option-content').contains(tag).click({force: true})
        return this
    }

}
export default new ArquivoOperacionalPage