class CartoesPage {
    pesquisaPanToken(PanToken) {
        cy.get('#panToken').type(PanToken)
        return this
    }
}
export default new CartoesPage