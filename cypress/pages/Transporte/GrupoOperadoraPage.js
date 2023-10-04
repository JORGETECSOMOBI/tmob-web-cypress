import login from '../Login/LoginPage'
import home from '../Home/HomePage'
import componente from '../ComponentesPadrao/ComponentesPadraoPage'
import url from '../../fixtures/url.json'

class GrupoOperadoraPage {

    beforeGrupoOperadora() {
        login.go()
            .signin()
        home.transporte()
        componente
            .validaURL(url.transporte)
            .selecionaIdioma('PT')
            .clicaBotao('Grupo de operadora')
        return this
    }

    alteraStatus() {
        cy.get('#isActive > .ant-switch-handle').click()
        return this
    }

    interoperabilidade() {
        cy.get('#isInteroperable > .ant-switch-inner').click()
        return this
    }
}
export default new GrupoOperadoraPage