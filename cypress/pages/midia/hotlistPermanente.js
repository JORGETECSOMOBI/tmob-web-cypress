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

    filtroProjeto(produto) {
        cy.get('#toSysCode').click({ force: true })
        cy.contains(produto).click({ force: true })
        cy.get('[title]').contains(produto).should('have.text', produto)
        return this
    }

    filtroNumeroCartao(numero) {
        cy.get(':nth-child(2) > .ant-input-affix-wrapper').type(numero)
        cy.get('[title]').contains(numero).should('have.text', numero)
        return this
    }

    filtroNumeroInternoCartao(numero) {
        cy.get(':nth-child(3) > .ant-input-affix-wrapper').type(numero)
        cy.get('[title]').contains(numero).should('have.text', numero)
        return this
    }

    adicionarManualmenteBom() {
        componente.clicaBotao('Adicionar Manualmente')
        this.tipoDeOrdem('BOM')
            .numeroExternoCartao('22.11.11111111-1')
        componente.clicaBotao('Confirmar')
        .validaTexto('Cartão adicionado com sucesso em Hotlist Permanente.')
        return this
    }

    adicionarManualmenteTop() {
        componente.clicaBotao('Adicionar Manualmente')
        this.tipoDeOrdem('TOP')
            .numeroExternoCartao('22.11.11111111-1')
        componente.clicaBotao('Confirmar')
        .validaTexto('Cartão adicionado com sucesso em Hotlist Permanente.')
        return this
    }


    adicionarManualmenteSptrans() {
        componente.clicaBotao('Adicionar Manualmente')
        this.tipoDeOrdem('SPTrans')
            .numeroExternoCartao('22.11.11111111-1')
        componente.clicaBotao('Confirmar')
        .validaTexto('Cartão adicionado com sucesso em Hotlist Permanente.')
        return this
    }

    tipoDeOrdem(ordem) {
        cy.get('#wrap_toSysCode').click({ force: true })
        cy.contains(ordem).click({ force: true })
        return this
    }

    numeroExternoCartao(numero) {
        cy.get('#wrap_externalCardNumber').type(numero)
        return this
    }
}
export default new HotListPermanentePage