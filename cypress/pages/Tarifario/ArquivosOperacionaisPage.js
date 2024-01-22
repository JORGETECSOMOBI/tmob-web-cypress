import login from '../Login/LoginPage'
import home from '../Home/HomePage'
import componente from '../ComponentesPadrao/ComponentesPadraoPage'

class ArquivosOperacionaisPage {

    beforeArquivosOperacionais() {
        login
            .go()
            .signin()
        home
            .tiposDeUso()
            .tarifario()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('Arquivos Operacionais')
        return this
    }

    filtroPorId() {
        componente
            .escreveId('912')
            .validaPesquisaAntTableRow('912')
        return this
    }

    filtroPorNomeDoarquivo() {
        componente
            .escreveId('1704924401635_op.enc')
            .validaPesquisaAntTableRow('1704924401635_op.enc')
        return this
    }

    filtrandoPorTagAtual() {
        this
            .filtroPorStatus('Atual')
            .validaTag('Atual')
        return this
    }

    filtrandoPorTagPrincipal() {
        this
            .filtroPorStatus('Principal')
            .validaTag('Principal')
        return this
    }

    filtrandoPorTagAlt() {
        this
            .filtroPorStatus('Alt')
            .validaTag('Alt')
        return this
    }

    filtroPorStatus(tag) {
        cy.get('#status').click({ force: true })
        cy.get('[title]').contains(tag).click({ force: true })
        return this
    }

    alternandoTagAlt() {
        this.alternaTag('Alt')
        componente.validaPesquisaDataRowKey('Alt')
        return this
    }

    alternandoTagPrincipal() {
        this.alternaTag('Principal')
        componente.validaPesquisaDataRowKey('Principal')
        return this
    }

    validaTag(tag) {
        cy.get(':nth-child(6) > .ant-tag').should('contain', tag)
        return this
    }

    alternaTag(tag) {
        cy.get('[data-row-key').eq(0).contains('Tag').click({ force: true })
        cy.get('#rc_select_10').click({ force: true })
        cy.wait(1000)
        cy.get('.ant-select-item-option-content').contains(tag).click({ force: true })
        cy.get('.ant-modal-footer > .ant-btn-primary').contains('Confirmar').click({ force: true })
        return this
    }

    download() {
        componente.clicaBotao('Download')
        return this
    }

    botaoVisualizar() {
        componente
            .clicaBotaoHomeVisualizar()
            .validaTexto('Detalhes')
        return this
    }
}
export default new ArquivosOperacionaisPage