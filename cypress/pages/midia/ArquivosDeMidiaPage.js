import login from '../Login/LoginPage'
import home from '../Home/HomePage'
import componente from '../ComponentesPadrao/ComponentesPadraoPage'
import url from '../../fixtures/url.json'

class ArquivoDeMidia {
    beforeArquivoDeMidia() {
        login.go()
        login.signin()
        home.tiposDeUso()
        home.midia()
        componente
            .validaURL(url.midia)
            .selecionaIdioma('PT')
            .clicaBotao('Arquivos de Midia')
        return this
    }

    filtrandoPorId() {
        componente.pesquisaId('1740')
         .validaPesquisaAntTableRow('1740')
        return this
    }

    filtrandoPorNome() {
        componente.pesquisaId('1_3.enc')
        return this
    }

    botaoHotlist() {
        cy.get('#rc-tabs-0-tab-medias').click()
        return this
    }

    botaoProdutosEmHotlist() {
        cy.get('#rc-tabs-0-tab-products').click()
        return this
    }

    botaoHotlistPermanente() {
        cy.get('#rc-tabs-0-tab-external-hotlist').click()
        return this
    }

    botaoRegargas() {
        cy.get('#rc-tabs-0-tab-product-recharge').click()
        return this
    }

    atualizacaoDoProduto() {
        cy.get('#rc-tabs-0-tab-5').click()
        return this
    }

    botaoForcarGeracao() {
        cy.get(':nth-child(3) > .ant-btn').click()
        return this
    }

    botaoDownload() {
        cy.get('[data-row-key]').eq(1).contains('Download').click()
        return this
    }
}
export default new ArquivoDeMidia