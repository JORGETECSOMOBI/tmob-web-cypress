class ArquivoOperacionalPage{
    pesquisaId(id) {
        cy.get('#id').type(id)
        cy.get('.ant-table-row > :nth-child(1)').contains(id).should('have.text', id)
        return this
    }

    pesquisaTag(tag) {
        cy.get('#status').click({force: true})
        cy.contains(tag).click({force: true})
        return this
    }

}
export default new ArquivoOperacionalPage