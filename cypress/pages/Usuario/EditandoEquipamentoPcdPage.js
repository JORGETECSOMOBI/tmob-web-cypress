class EditarEquipamentoPcdPage {

    botaoSalvar() {
        cy.contains('Salvar').click()
        return this
    }

    botaoConfirmarmodificaçoes() {
        cy.get('.ant-modal-confirm-btns > .ant-btn-primary').click()
        return this
    }

    validaMensagemSucessoEdicao(mensagem) {
        cy.get('.ant-result-title').should('have.text', mensagem)
        return this
    }

    clicaBotaoVerEquipamentoPcD() {
        cy.get('.ant-btn-primary > a').click()
        return this
    }

    botaoInativo() {
        cy.get(':nth-child(2) > .ant-radio > .ant-radio-input').click()
        return this
    }

    botaoAtivo() {
        cy.get(':nth-child(1) > .ant-radio > .ant-radio-input').click()
        return this
    }
}

export default new EditarEquipamentoPcdPage