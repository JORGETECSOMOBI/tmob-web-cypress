import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'
import url from '../../fixtures/url.json'

class TransportePage {

    beforeConsorcio() {
        login.go()
             .signin()
        home.transporte()
        componente
            .validaURL(url.transporte)
            .selecionaIdioma('PT')
            .clicaBotao('Consórcio')
        return this
    }

    beforeEmissor() {
        login.go()
             .signin()
        home.transporte()
        componente
            .validaURL(url.transporte)
            .selecionaIdioma('PT')
            .clicaBotao('Emissor')
        return this
    }

    beforeOpe() {
        login.go()
             .signin()
        home.transporte()
        componente
            .validaURL(url.transporte)
            .selecionaIdioma('PT')
            .clicaBotao('Arquivos Operacionais')
        return this
    }
}

export default new TransportePage