class IcdPage {

    escreveCodigo(codigo) {
        cy.get('#code').type(codigo)
        return this
    }

    validade(dias) {
        cy.get('#validity').type(dias)
        return this
    }
    
    confirmaAcompanhante(confirmacao) {
        cy.get('#allowAttendant').contains(confirmacao).click()
        return this
    }

    beneficioAprovado(status){
        cy.get('#isApproved').contains(status).click()
        return this
    }

    clicaBotaoModal(confirmacao){
        cy.get('.ant-modal-confirm-btns').contains(confirmacao).click()
        return this
    }

    clicaEmNome(){
        cy.get('#name').click()
        return this
    }

    clicaEmDescricao() {
        cy.get('#description').click()
        return this
    }
    

}
export default new IcdPage