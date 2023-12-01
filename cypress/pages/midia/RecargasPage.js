import login from '../Login/LoginPage'
import home from '../Home/HomePage'
import componente from '../ComponentesPadrao/ComponentesPadraoPage'
import url from '../../fixtures/url.json'

class RecargasPage {
    beforeRecargas() {
        login.go()
        login.signin()
        home.tiposDeUso()
        home.midia()
        componente
            .validaURL(url.midia)
            .selecionaIdioma('PT')
            .clicaBotao('Recargas')
        return this
    }

    filtrandoPorId() {
        this.filtroProcurandoHoje('8704723')
        return this
    }

    filtrandoPorNumeroCartao() {
        this.filtroProcurandoHoje('52.29.00000111-1')
        return this
    }

    filtrandoPorCSN() {
        this.filtroProcurandoHoje('1107236589')
        return this
    }

    filtrandoPorIdExterno() {
        this.filtroProcurandoHoje('186')
        return this
    }

    filtrandoPorProduto() {
        this.filtroProduto('PRODUTO 480')
        return this
    }

    filtrandoPorValor() {
        this.filtroValor('17,00')
        return this
    }

    filtrandoStatusRecarregadoSim() {
        this.filtroRecarregado('Sim')
        return this
    }

    filtrandoStatusRecarregadoNao() {
        this.filtroRecarregado('Não')
        return this
    }

    filtrandoPorDataDeLiberacao() {
        return this
    }

    filtrandoPorDataDeRecarga() {
        return this
    }

    botaoVisualizar() {
        componente.clicaBotaoVisualizar()
        return this
    }

    //Função

    filtroProcurandoHoje(busca) {
        cy.get('.ant-input-affix-wrapper > #search').type(busca)
        return this
    }

    filtroProduto(produto) {
        cy.get('#rc_select_2').click({ force: true })
        cy.contains(produto).click()
        return this
    }
    

    filtroValor(valor) {
        cy.get('.ant-input-number-input-wrap > #search').type(valor)
        return this
    }
    

    filtroRecarregado(carregado) {
        cy.get('#isRecharged').click({ force: true })
        cy.contains(carregado).click({ force: true })
        return this
    }
}
export default new RecargasPage