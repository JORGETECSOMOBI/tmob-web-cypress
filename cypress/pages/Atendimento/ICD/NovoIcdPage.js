class NovoIcdPage{

    escreveNome() {
        cy.get('#name').type('ICD teste')
    }

}
export default new NovoIcdPage