import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'
import url from '../../fixtures/url.json'

class ProdutoDetransportePge {
    beforeProdutoDeTrasnporte() {
        login.go()
        login.signin()
        home.tiposDeUso()
        home.midia()
        componente
            .validaURL(url.midia)
            .selecionaIdioma('PT')
            .clicaBotao('Produto de transporte')
        return this
    }

    criandoUmProdutoDeTransporteValorado() {
        componente
            .clicaBotaoNovo()
        this
            .selecionaTipoDeProduto('Valorado')
            .selecionaEmissor('Autopass')
            .codigo('444')
            .maximoDeIntegracoes('8')
            .grupoDerelatorio('TOP - Funcional')
            .displayValidador('Automação')
        componente
            .escreveDescricao('AAAA Automação Valorado')
        return this
    }

    criandoUmProdutoDeTransporteGratuidade() {
        componente
            .clicaBotaoNovo()
        this
            .selecionaTipoDeProduto('Gratuidade')
            .selecionaEmissor('Top')
            .codigo('666')
            .maximoDeIntegracoes('8')
            .grupoDerelatorio('TOP - Funcional')
            .displayValidador('Automação')
        componente
            .escreveDescricao('AAAA Automação Gratuidade')
        return this
    }


    criandoUmProdutoDeTransporteGratuidadeFuncional() {
        componente
            .clicaBotaoNovo()
        this
            .selecionaTipoDeProduto('Gratuidade funcional')
            .selecionaEmissor('Autopass')
            .codigo('888')
            .maximoDeIntegracoes('8')
            .grupoDerelatorio('TOP - Funcional')
            .displayValidador('Automação')
        componente
            .escreveDescricao('AAAA Automação Gratuidade funcional')
        return this
    }


    criandoUmProdutoDeTransporteEspecialAcompanhante() {
        componente
            .clicaBotaoNovo()
        this
            .selecionaTipoDeProduto('Especial acompanhante')
            .selecionaEmissor('Top')
            .maximoDeIntegracoes('8')
            .grupoDerelatorio('TOP - Funcional')
            .displayValidador('Automação')
        componente
            .escreveDescricao('AAAA Automação Especial acompanhante')
        return this
    }

    selecionaTipoDeProduto(produto) {
        cy.contains(produto).click({ force: true })
        return this
    }

    selecionaEmissor(emissor) {
        cy.get('#toIssuerCode').click({ force: true })
        cy.contains(emissor).click({ force: true })
        return this
    }

    maximoDeIntegracoes(maximo) {
        cy.get('#maxIntegrationCounter').type(maximo, { force: true })
        return this
    }

    codigo(codigo) {
        cy.get('#code').type(codigo)
        return this
    }

    grupoDerelatorio(grupo) {
        cy.get('#medTransitProductCollectorGroup').click({ force: true })
        cy.contains(grupo).click({ force: true })
        return this
    }

    displayValidador(nome) {
        cy.get('#displayName').type(nome)
        return this
    }
}
export default new ProdutoDetransportePge