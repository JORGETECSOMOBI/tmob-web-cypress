class BotoesPage {

    clicaBotao(label) {
        cy.contains(label).click()
        return this
    }
}
export default new BotoesPage