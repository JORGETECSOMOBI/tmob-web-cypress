class CartoesPage {
    pesquisaPanToken() {
        cy.get('#panToken').type('534693BEBF33C10D2237')
        return this
    }
}
export default new CartoesPage