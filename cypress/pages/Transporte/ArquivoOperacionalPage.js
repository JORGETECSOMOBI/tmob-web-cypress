class ArquivoOperacionalPage {

  pesquisaId(id) {
    cy.get('#id').type(id)
    cy.get('.ant-table-row > :nth-child(1)').contains(id).should('have.text', id)
    return this
  }

  pesquisaNomeArquivo(nome) {
    cy.get('#id').type(nome)
    cy.get('[title="1695295649246_op.enc"]').contains(nome).should('have.text', nome)
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
    cy.get('.ant-space > :nth-child(2) > .ant-select > .ant-select-selector')
      .should('be.visible')
      .click()
    cy.get('.ant-select-dropdown')
      .should('be.visible')
    cy.contains('.ant-select-dropdown .ant-select-item', tag)
      .should('be.visible')
      .click()
    return this
  }

  validaTagAlt(id) {
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > :nth-child(1) > strong').should('have.text', id)
    return this
  }

  validaTagPrincipal(id) {
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > :nth-child(1) > strong').should('have.text', id)
    return this
  }

  validaTagAltInativa(texto) {
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > :nth-child(2)').should('have.text', texto)
    return this
  }

  ValidaTagPrincipalInativa(texto) {
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > :nth-child(2)').eq(2).should('have.text', texto)
    return this
  }
}
export default new ArquivoOperacionalPage