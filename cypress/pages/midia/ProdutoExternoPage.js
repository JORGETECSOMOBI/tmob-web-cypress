import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'
import url from '../../fixtures/url.json'
import faker from 'faker-br'

class ProdutoExternoPage {
    beforeProdutoExterno() {
        login.go()
        login.signin()
        home.tiposDeUso()
        home.midia()
        componente
            .validaURL(url.midia)
            .selecionaIdioma('PT')
            .clicaBotao('Produto externo')
        return this
    }

    cadastraNovoProdutoexterno() {
        componente
            .clicaBotaoNovo()
            .escreveDescricao("AAAA PRODUTO")
        this
            .textoExibição('Automação de testes produto externo')
            .textoExibiçãoCurto('Automação de testes')
            .tipoExterno('Automação')
            .selecionaEmissor('Autopass')
            .sistema('TMOB')
            .codigo('123')
        componente
            .clicaBotaoSalvar()
            .clicaBotaoSim()
        return this
    }

    editaProdutoexterno() {
        componente
            .clicaBotaoEditar()
            .limpaDescricao()
            .escreveDescricao(faker.name.findName())
        this
            .limpaTextoExibição()
            .textoExibição('Automação de testes produto externo')
            .limpaTextoExibiçãoCurto()
            .textoExibiçãoCurto('Automação de testes')
            .limpaTipoExterno()
            .tipoExterno('Automação')
            .selecionaEmissor('Autopass')
            .sistema('TMOB')
            .limpaCodigo()
            .codigo('123')
        componente
            .clicaBotaoSalvar()
            .clicaBotaoSim()
            .validaMensagem('Produto de Trânsito Externo foi editado com sucesso!')
        return this
    }

    filtroPordescrição() {
        componente.escreveDescricao('beline26')
        return this
    }

    filtroPorId() {
        componente.escreveDescricao('88')
        return this
    }

    filtroPorEmissor() {
        this.selecionaEmissor('Autopass')
        return this
    }

    filtroPorSistema() {
        this.sistema('TMOB')
        return this
    }

    botaoNovo() {
        componente.clicaBotaoNovo()
        return this
    }

    botãoEditar() {
        componente.clicaBotaoEditar()
        return this
    }

    botaoVisualizar() {
        componente.clicaBotaoHomeVisualizar()
        return this
    }

    selecionaEmissor(emissor) {
        cy.get('#toIssuerCode').click({ force: true })
        cy.contains(emissor).click({ force: true })
        return this
    }

    textoExibição(texto) {
        cy.get('#displayText').type(texto, { force: true })
        return this
    }

    limpaTextoExibição() {
        cy.get('#displayText').clear({ force: true })
        return this
    }

    textoExibiçãoCurto(texto) {
        cy.get('#shortDisplayText').type(texto, { force: true })
        return this
    }

    limpaTextoExibiçãoCurto() {
        cy.get('#shortDisplayText').clear({ force: true })
        return this
    }

    sistema(sistema) {
        cy.get('#toSysCode').click({ force: true })
        cy.contains(sistema, { force: true }).click({ force: true })
        return this
    }

    codigo(codigo) {
        cy.get('#code').type(codigo)
        return this
    }

    limpaCodigo() {
        cy.get('#code').clear()
        return this
    }

    tipoExterno(code) {
        cy.get('#type').type(code, { force: true })
        return this
    }

    limpaTipoExterno() {
        cy.get('#type').clear({ force: true })
        return this
    }
}
export default new ProdutoExternoPage