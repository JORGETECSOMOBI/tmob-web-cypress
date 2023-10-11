import login from '../Login/LoginPage'
import home from '../Home/HomePage'
import componente from '../ComponentesPadrao/ComponentesPadraoPage'
import url from '../../fixtures/url.json'

class GrupoOperadorPage {

    beforeGrupoOperador() {
        login.go()
            .signin()
        home.transporte()
        componente
            .validaURL(url.transporte)
            .selecionaIdioma('PT')
            .clicaBotaoMenuPosicao(7)
        return this
    }

    operadorAdmin() {
        cy.get('#isAdmin > :nth-child(1) > .ant-radio > .ant-radio-input', { force: true }).click({ force: true })
        return this
    }

    operadorNaoAdmin() {
        cy.get('#isAdmin > :nth-child(1) > .ant-radio > .ant-radio-input').click({ force: true })
        return this
    }

    selecionaFuncaoOperadorPorId(id) {
        cy.get('input[placeholder="Procurar"]', { force: true }).eq(0).type(id, { force: true })
        return this
    }

    selecionaTodasFuncoesIncluir() {
        cy.get('.ant-checkbox-input', { force: true }).eq(1).click({ force: true })
        return this
    }

    selecionaTodasFuncoesExcluir() {
        cy.get('.ant-checkbox-input', { force: true }).eq(2).click({ force: true })
        return this
    }

    incluiFuncao() {
        cy.get(':nth-child(1) > .ant-btn-icon > .anticon > svg', { force: true }).click({ force: true })
        return this
    }

    excluiFuncao() {
        cy.get('.ant-transfer-operation > :nth-child(2)', { force: true }).click({ force: true })
        return this
    }

    selecionaSistema(sistema) {
        cy.get('#toSystem').click()
        cy.contains(sistema).click()
        return this
    }

    escreveIdExterno(id) {
        cy.get('#externalId').type(id)
        return this
    }

    clicaBotao(nome) {
        cy.get('.steps-action').contains(nome).click()
        return this
    }

    ValidaIdgrupoOperador(id) {
        cy.get('.ant-table-row > :nth-child(1)').contains(id).should('have.text', id)
        return this
    }
}
export default new GrupoOperadorPage