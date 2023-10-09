import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'
import url from '../../fixtures/url.json'

class GrupoLinhaPage {

    beforeGrupoLinha() {
        login.go()
            .signin()
        home.transporte()
        componente
            .validaURL(url.transporte)
            .selecionaIdioma('PT')
            .clicaBotao('Grupo de linha')
        return this
    }

    escreveLinhaNomeId0(idNome) {
        cy.get('.ant-transfer-list-body .ant-input').eq(0).type(idNome, { force: true })
        return this
    }

    escreveIdExterno(id) {
        cy.get('#externalId').type(id)
        return this
    }

    escreveLinhaNomeId01(idNome) {
        cy.get('.ant-transfer-list-body .ant-input').eq(1).type(idNome, { force: true })
        return this
    }

    selecionaSistema(sistema) {
        cy.get('#toSystem', { force: true }).click({ force: true })
        cy.contains(sistema).click()
        return this
    }

    selecionaTodasLinhas0() {
        cy.get('.ant-transfer-list-header .ant-checkbox-input', { force: true }).eq(0).wait(15000).click({ force: true })
        return this
    }

    selecionaTodasLinhas1() {
        cy.get('.ant-transfer-list-header .ant-checkbox-input', { force: true }).eq(1).wait(5000).click({ force: true })
        return this
    }

    selecionaTodasLinhas2() {
        cy.get(':nth-child(1) > .ant-transfer-list-header > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input', { force: true }).wait(5000).click({ force: true })
        return this
    }

    incluiLinhas() {
        cy.get('.ant-transfer-operation > :nth-child(1)').wait(2000).click({ force: true })
        return this
    }

    excluiLinhas() {
        cy.get('.ant-transfer-operation > :nth-child(2)').wait(2000).click({ force: true })
        return this
    }

    validaExclusaoDeLinha(linha) {
        cy.get(':nth-child(1) > .ant-transfer-list-body').contains(linha).should('have.text', linha)
        return this
    }

    validaInclusaoDeLinha(linha) {
        cy.get(':nth-child(3) > .ant-transfer-list-body').wait(1000).contains(linha).should('have.text', linha)
        return this
    }

    clicaBotao(label) {
        cy.get('.steps-action').eq(0).contains(label).click({ force: true })
        return this
    }
}
export default new GrupoLinhaPage