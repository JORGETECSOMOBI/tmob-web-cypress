class NovoTipoUsuarioPage {

    descricao(descricao) {
        cy.get('#description').type(descricao)
        return this
    }

    botaoNovoTipousuario() {
        cy.get('span.anticon > .ant-btn').click()
        return this
    }

    idadeMinima(idadeMin) {
        cy.get('#minimalAge', { force: true }).type(idadeMin, { force: true })
        return this
    }

    idadeMaxima(idadeMax) {
        cy.get('#maximumAge', { force: true }).type(idadeMax, { force: true })
        return this
    }

    tipo() {
        cy.get('.ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').click({ force: true })
        return this
    }

    escolheTipoUsuario(tipo) {
        cy.contains(tipo, { force: true }).click({ force: true })
        return this
    }

    escreveComentario(comentario) {
        cy.get('#comment').type(comentario)
        return this
    }

    checaStatusCriacaoUsuarioSim() {
        cy.get('#checkStatusOnUserCreate > :nth-child(1) > .ant-radio > .ant-radio-input').click()
        return this
    }

    checaStatusCriacaoUsuarioNao() {
        cy.get('#checkStatusOnUserCreate > .ant-radio-wrapper-checked > .ant-radio > .ant-radio-input').click()
        return this
    }

    checaStatusCriacaoMidiaSim() {
        cy.get('#checkStatusOnMediaCreate > :nth-child(1) > .ant-radio > .ant-radio-input').click()
        return this
    }

    checaStatusCriacaoMidiaNao() {
        cy.get('#checkStatusOnMediaCreate > .ant-radio-wrapper-checked > .ant-radio > .ant-radio-input').click()
        return this
    }

    salvaNovoTipoDeUsuario() {
        cy.contains('Salvar').click({ force: true })
        return this
    }

    confirmaCriacaoNovoTipoUsuario() {
        cy.get('.ant-modal-confirm-btns > .ant-btn-primary > span').click()
        return this
    }

    validaMensagemDeSucessoCriacaoTipousuario(mensagem) {
        cy.get('.ant-result-title').should('have.text', mensagem)
    }

}
export default new NovoTipoUsuarioPage