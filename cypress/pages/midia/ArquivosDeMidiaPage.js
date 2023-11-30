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
        componente.pesquisaId('975')
         .validaDescricaoAntTableRow('975')
        return this
    }

    filtrandoPorNome() {
        componente.pesquisaId('1_3.enc')
        return this
    }

    botaoHotlist() {
        cy.get('#rc-tabs-0-tab-1').click()
        return this
    }

    botaoProdutosEmHotlist() {
        cy.get('#rc-tabs-0-tab-2').click()
        return this
    }

    botaoHotlistPermanente() {
        cy.get('#rc-tabs-0-tab-3').click()
        return this
    }

    botaoRegargas() {
        cy.get('#rc-tabs-0-tab-4').click()
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