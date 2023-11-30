import login from '../Login/LoginPage'
import home from '../Home/HomePage'
import componente from '../ComponentesPadrao/ComponentesPadraoPage'
import url from '../../fixtures/url.json'

class ArquivosOperacionaisPage {
    beforeArquivosOperacionais() {
        login.go()
        login.signin()
        home.tiposDeUso()
        home.midia()
        componente
            .validaURL(url.midia)
            .selecionaIdioma('PT')
            .clicaBotao('Arquivos Operacionais')
        return this
    }

    filtrandoPorId() {
        componente.pesquisaId('1071')
            .validaDescricaoAntTableRow('1071')
        return this
    }

    filtrandoPorTagAtual() {
        this.filtroPorStatus('Atual')
        return this
    }

    filtrandoPorTagPricipal() {
        this.filtroPorStatus('Principal')
        return this
    }

    filtrandoPorTagAlt() {
        this.filtroPorStatus('Alt')
        return this
    }

    filtroPorStatus(tag) {
        cy.get('#status').click({ force: true })
        cy.get('[title]').contains(tag).click({ force: true })
        return this
    }
}
export default new ArquivosOperacionaisPage