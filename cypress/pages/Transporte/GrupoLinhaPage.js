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

    escreveLinhaNomeId01(idNome) {
        cy.get('.ant-transfer-list-body .ant-input').eq(1).type(idNome, { force: true })
        return this
    }

    selecionaTodasLinhas0() {
        cy.get('.ant-transfer-list-header .ant-checkbox-input', { force: true }).eq(0).wait(5000).click({ force: true })
        return this
    }

    selecionaTodasLinhas1() {
        cy.get('.ant-transfer-list-header .ant-checkbox-input', { force: true }).eq(1).wait(5000).click({ force: true })
        return this
    }

    incluiLinhas() {
        cy.get('.ant-transfer-operation > :nth-child(1)').wait(3000).click({ force: true })
        return this
    }

    excluiLinhas() {
        cy.get('.ant-transfer-operation > [disabled=""]').click({ force: true })
        return this
    }
}
export default new GrupoLinhaPage