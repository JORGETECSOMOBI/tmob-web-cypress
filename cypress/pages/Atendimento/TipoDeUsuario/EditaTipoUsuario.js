class EditaTipoUsuarioPage {

    editaTipoUsuario() {
        cy.contains('Editar').click()
        return this
    }

    limpaDescricao() {
        cy.get('#description').clear()
        return this
    }

    limpaIdadeMinima() {
        cy.get('#minimalAge', { force: true }).clear({ force: true })
        return this
    }

    limpaIdadeMaxima() {
        cy.get('#maximumAge', { force: true }).clear({ force: true })
        return this
    }

    limpaComentario() {
        cy.get('#comment').clear()
        return this
    }

    confirmaEdicaoTipoUsuario() {
        cy.get('.ant-modal-confirm-btns > .ant-btn-primary > span').click()
        return this
    }

    validaMensagemDeSucessoEdicaoTipousuario(mensagem) {
        cy.get('.ant-result-title').should('have.text', mensagem)
        return this
    }
}
export default new EditaTipoUsuarioPage