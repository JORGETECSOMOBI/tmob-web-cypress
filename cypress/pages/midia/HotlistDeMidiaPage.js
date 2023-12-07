import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'
import url from '../../fixtures/url.json'

class HotListMidiaPage {
    beforeHotListMidia() {
        login.go()
        login.signin()
        home.tiposDeUso()
        home.midia()
        componente
            .validaURL(url.midia)
            .selecionaIdioma('PT')
            .clicaBotao('Hotlist de mídia')
        return this
    }

    filtrandoPorId() {
        componente
            .pesquisaId('428')
            .validaDescricaoDataRowKey('428')

        return this
    }

    filtrandoPorIdExterno() {
        componente
            .pesquisaId('5229000001197')
            .validaDescricaoDataRowKey('5229000001197')

        return this
    }

    filtrandoPorNumeroCartao() {
        componente
            .pesquisaId('52.29.00000100-6')
            .validaDescriçãoTitle('52.29.00000100-6')
        return this
    }


    filtrandoPorTipoMidia() {
        componente
            .escreveDescricao('VTComum')
            .validaDescriçãoTitle('VTComum')
        return this;
    }

    filtrandoPorMotivoHotlistRoubo() {
        this.filtroMotivoDeHotlist('Roubo')
        componente.validaDescricaoDataRowKey('5 - Roubo - Bloquear')
        return this
    }

    filtrandoPorMotivoHotlistPerda() {
        this
            .filtroMotivoDeHotlist('Perda')
        componente
            .validaDescricaoDataRowKey('4 - Perda - Bloquear')
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
        cy.get(':nth-child(4) > .ant-picker').click({ force: true })
        cy.get('.ant-picker-presets').contains(periodo).click()
        return this
    }

    filtroPorDataProcessamento(periodo) {
        cy.get(':nth-child(5) > .ant-picker').click({ force: true })
        cy.get('.ant-picker-presets').contains(periodo).click()
        return this
    }

    filtroProcesso(processado) {
        cy.get('#isProcessed').click()
        cy.get('[title]').contains(processado).click()
        return this
    }

}
export default new HotListMidiaPage