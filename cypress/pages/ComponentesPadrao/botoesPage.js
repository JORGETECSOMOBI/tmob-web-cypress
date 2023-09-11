class BotoesPage {

    clicaBotao(label) {
        cy.contains(label).click({force: true})
        return this
    }

    clicaStatusInativo() {
       cy.contains('Inativo').click({force:true}) 
    }
}
export default new BotoesPage