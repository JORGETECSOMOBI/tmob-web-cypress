import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'
import url from '../../fixtures/url.json'

class HotListPermanentePage {
    beforeHotListPermanente() {
        login.go()
        login.signin()
        home.tiposDeUso()
        home.midia()
        componente
            .validaURL(url.midia)
            .selecionaIdioma('PT')
            .clicaBotao('Hotlist Permanente')
        return this
    }
    filtrandoPorProjetoSpTrans() {
        this.filtroProjeto('SPTrans')
        return this
    }

    filtrandoPorProjetoBom() {
        this.filtroProjeto('BOM')
        return this
    }

    filtrandoPorProjetoTop() {
        this.filtroProjeto('TOP')
        return this
    }

    filtrandoPorNumeroCartao() {
        this.filtroNumeroCartao('24.45.58777789-7')
        return this
    }

    filtrandoPorNumeroInternoCartao() {
        this.filtroNumeroInternoCartao('1107220477')
        return this
    }

    adicionandoManualmente() {
        this.adicionarManualmente()
        return this
    }

    filtroProjeto(produto) {
        cy.get('#toSysCode').click({force:true})
        cy.contains(produto).click({force:true})
        return this
    }

    filtroNumeroCartao(numero) {
        cy.get(':nth-child(2) > .ant-input-affix-wrapper').type(numero)
        return this
    }

    filtroNumeroInternoCartao(numero) {
        cy.get(':nth-child(3) > .ant-input-affix-wrapper').type(numero)
        return this
    }

    adicionarManualmente() {
        componente.clicaBotao('Adicionar Manualmente')
        return this
    }
}
export default new HotListPermanentePage