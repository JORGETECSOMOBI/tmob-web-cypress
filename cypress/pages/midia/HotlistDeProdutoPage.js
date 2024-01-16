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
            .escreveDescricao('5839')
            .validaPesquisaDataRowKey('5839')

        return this
    }

    filtrandoPorIdExterno() {
        componente
            .pesquisaId('60')
            .validaPesquisaDataRowKey('60')

        return this
    }

    filtrandoPorNumeroCartao() {
        componente
            .escreveId('5229000000232')
            .validaPesquisaTitle('5229000000232	')
        return this
    }


    filtrandoPorTipoMidia() {
        componente
            .escreveDescricao('VTComum')
            .validaPesquisaTitle('VTComum')
        return this;
    }

    filtrandoPorMotivoHotlistPerda() {
        this.filtroMotivoDeHotlist('Perda')
        componente.validaPesquisaDataRowKey('4 - Perda - Bloquear')
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
        componente.validaPesquisaDataRowKey('Sim')
        return this
    }

    filtrandoPorProcessadoNao() {
        this.filtroProcesso('Não')
        componente.validaPesquisaDataRowKey('Não')
        return this
    }

    filtrandoPorProduto() {
        this.filtroProduto('Operator')
    }

    botaoVisualizar() {
        componente.clicaBotaoHomeVisualizar()
            .validaTexto('Detalhes')
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