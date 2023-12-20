import login from '../Login/LoginPage'
import home from '../Home/HomePage'
import componente from '../ComponentesPadrao/ComponentesPadraoPage'

class ArquivosOperacionaisPage {

    beforeArquivosOperacionais() {
        login.go()
        login.signin()
        home.dispositivos()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('Arquivos operacionais')
    }

    filtrandoStatusAtivo() {
        this
            .botaoConfiguracaoOperacional()
            .selecionaStatus('Ativo')
        return this
    }

    filtrandoStatusdescontinuado() {
        this
        .botaoConfiguracaoOperacional()
        .selecionaStatus('Descontinuado')
    return this
    }

    filtrandoPorId() {
        componente.escreveId('941')
        return this
    }

    filtrandoPorNomeConfiguracao() {
        this.botaoConfiguracaoOperacional()
        cy.get('.ant-input-affix-wrapper > #id').eq(1).type('1699367561436_op.enc')
        componente.validaDescriçãoTitle('1699367561436_op.enc')
        return this
    }

    filtrandoPorIdConfiguracao() {
        this.botaoConfiguracaoOperacional()
        cy.get('.ant-input-affix-wrapper > #id').eq(1).type('34')
        componente.validaDescricaoAntTableRow('34')
        return this
    }

    filtrandoPorNome() {
        componente.escreveId('1703004286515_op.enc')
        return this
    }

    filtrandoPorTagPrincipal() {
        this
            .selecionaTag('Principal')
            .validaTag('Principal')
        return this
    }

    filtrandoPorTagAtual() {
        this
            .selecionaTag('Atual')
            .validaTag('Atual')
        return this
    }

    filtrandoPorTagAlt() {
        this
            .selecionaTag('Alt')
            .validaTag('Alt')
        return this
    }

    selecionaTag(tag) {
        cy.get('#status').click({ force: true })
        cy.contains(tag).click({ force: true })
        return this
    }

    selecionaStatus(status) {
        cy.get('.ant-select-selector').eq(3).click({ force: true })
        cy.contains(status).click({ force: true })
        return this
    }

    validaTag(tag) {
        cy.get(':nth-child(6) > .ant-tag').contains(tag)
        return this
    }

    alterandoParaTagAlt() {
        this.alteraTag('Alt')
        return this
    }

    alterandoParaTagPrincipal() {
        this.alteraTag('Principal')
        return this
    }

    alteraTag() {
        cy.get('[data-row-key]').contains('Tag').click({ force: true })
        cy.get('#rc_select_5', { force: true }).click({ force: true })
        cy.get('.ant-select-item-option-content').contains(tag).click({ force: true })
        componente
            .clicaBotao('Confirmar')
            .validaMensagem('Tag alterada com sucesso')
        return this
    }

    botaoVisualizar() {
        componente
            .clicaBotaoHomeVisualizar()
            .validatexto('Detalhes')
        return this
    }

    download() {
        componente
            .clicaBotao('Download')
        return this
    }

    botaoConfiguracaoOperacional() {
        cy.get('#rc-tabs-0-tab-item2').click()
        return this
    }
}
export default new ArquivosOperacionaisPage