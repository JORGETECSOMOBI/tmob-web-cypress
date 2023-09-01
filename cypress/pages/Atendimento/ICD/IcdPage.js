class IcdPage {

    clicaBotaoNovo() {
        cy.get('span.anticon > .ant-btn > :nth-child(2)').click()
        return this
    }

    escreveNome(nome) {
        cy.get('#name').type(nome)
        return this
    }

    escreveDescricao(descricao) {
        cy.get('#description').type(descricao)
        return this
    }


    escreveCodigo(codigo) {
        cy.get('#code').type(codigo)
        return this
    }

    validade(dias) {
        cy.get('#validity').type(dias)
        return this
    }

    escreveComentario(comentario) {
        cy.get('#comment').type(comentario)
        return this
    }

    salvar() {
        cy.contains('Salvar').click({ force: true })
        return this
    }

    confirmaCadastro() {
        cy.get('.ant-modal-confirm-btns > .ant-btn-primary').click()
        return this
    }

    ValidaMensagemDeSucesso(mensagem) {
        cy.get('.ant-result-title').should('have.text', mensagem)
        return this
    }
}
export default new IcdPage