class NovoNivelEscolaridadePage {

    escreveNovoNivelEscolaridade(descricao){
        cy.get('#description').type(descricao)
        return this
    }

    clicaBotaoNovo() {
        cy.get('span:contains("Novo")').click()
        return this
    }

    clicaBotaoSalvar() {
        cy.contains('Salvar').click()
        return this
    }

    clicaBotaoSalvarModal() {
        cy.get('.ant-modal-confirm-btns > .ant-btn-primary').click()
        return this
    }

    ValidaMensagemDeSucesso(mensagem) {
        cy.get('.ant-result-title').should('have.text', mensagem)
        return this
    }
}
export default new NovoNivelEscolaridadePage