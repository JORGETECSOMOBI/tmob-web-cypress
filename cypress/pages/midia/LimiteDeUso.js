import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'
import url from '../../fixtures/url.json'

class LimiteDeUsoPage {

    beforeLimiteUso() {
        login.go()
        login.signin()
        home.tiposDeUso()
        home.midia()
        componente
            .validaURL(url.midia)
            .clicaBotao('Limite de uso')
            .selecionaIdioma('PT')
    }
}
export default new LimiteDeUsoPage