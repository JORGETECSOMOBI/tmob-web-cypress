import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'
import url from '../../fixtures/url.json'

class HotListDeProdutoPage {
    beforeHotListProduto() {
        login.go()
        login.signin()
        home.tiposDeUso()
        home.midia()
        componente
            .validaURL(url.midia)
            .selecionaIdioma('PT')
            .clicaBotao('Hotlist de Produto')
        return this
    }

    filtrandoPorId() {
        componente
            .escreveDescricao('1165')
            .validaDescricaoDataRowKey('1165')

        return this
    }

    filtrandoPorIdExterno() {
        componente
            .pesquisaId('60')
            .validaDescricaoDataRowKey('60')

        return this
    }

    filtrandoPorNumeroCartao() {
        componente
            .escreveDescricao('52.24.00000001-9')
            .validaDescriçãoTitle('52.24.00000001-9')
        return this
    }


    filtrandoPorTipoMidia() {
        componente
            .escreveDescricao('VTComum')
            .validaDescriçãoTitle('VTComum')
        return this;
    }

    filtrandoPorMotivoHotlistPerda() {
        this.filtroMotivoDeHotlist('Perda')
        componente.validaDescricaoDataRowKey('4 - Perda - Bloquear')
        return this
    }

    filtrandoPorData() {
        this
            .filtroPorData('Ano')
        return this
    }

    filtrandoPorDataProcessamento() {
        this
            .filtroPorDataProcessamento('Mês')
        return this
    }

    filtrandoPorProcessadoSim() {
        this.filtroProcesso('Sim')
        componente.validaDescricaoDataRowKey('Sim')
        return this
    }

    filtrandoPorProcessadoNao() {
        this.filtroProcesso('Não')
        componente.validaDescricaoDataRowKey('Não')
        return this
    }

    filtrandoPorProduto() {
        this.filtroProduto('Operator')
    }

    botaoVisualizar() {
        componente.clicaBotaoHomeVisualizar()
            .validatexto('Detalhes')
        return this
    }

    filtroMotivoDeHotlist(motivo) {
        cy.get('#medHotlistReasonId').click()
        cy.get('[title]').contains(motivo).click()
        return this
    }

    filtroPorData(periodo) {
        cy.get(':nth-child(6) > .ant-picker').click({ force: true })
        cy.get('.ant-picker-presets').contains(periodo).click()
        return this
    }

    filtroPorDataProcessamento(periodo) {
        cy.get(':nth-child(7) > .ant-picker').click({ force: true })
        cy.get('.ant-picker-presets').contains(periodo).click()
        return this
    }

    filtroProduto(produto) {
        cy.get(':nth-child(4) > .ant-select > .ant-select-selector').click({ force: true })
        cy.contains(produto).click()
        return this
    }

    filtroProcesso(processado) {
        cy.get('#isProcessed').click()
        cy.get('[title]').contains(processado).click()
        return this
    }

}
export default new HotListDeProdutoPage