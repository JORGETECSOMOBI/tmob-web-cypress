import componente from '../ComponentesPadrao/ComponentesPadraoPage'
import url from '../../fixtures/url.json'
import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'

class LinhaPage {

    beforeLinha() {
        login.go()
            .signin()
        home.transporte()
        componente
            .validaURL(url.transporte)
            .selecionaIdioma('PT')
            .clicaBotao('Linha')
        return this
    }

    descricaoCurta() {
        cy.get('#shortDesc').type('Fim do mundo')
        return this
    }
    
}
export default new LinhaPage