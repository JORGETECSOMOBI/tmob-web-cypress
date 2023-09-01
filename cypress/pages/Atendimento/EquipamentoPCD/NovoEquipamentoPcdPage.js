class NovoEquipamentoPcdPage {

    descricaoNovoEquipamentoPcd(descricao) {
        cy.get('#description').type(descricao)
        return this
    }

    salvaEdiçãoNovoEquipamentoPcd() {
        cy.contains('Salvar').click()
        return this
    }

    confirmaCadastroDeNovoEquipamentoPcd() {
        cy.get('.ant-modal-confirm-btns > .ant-btn-primary > span').click()
        return this
    }

    validaMensagemDeSucessoCadastroNovoEquipamentoPcd() {
        cy.get('.ant-result-title').should('have.text', 'Concluido')
    }
}
 export default new NovoEquipamentoPcdPage