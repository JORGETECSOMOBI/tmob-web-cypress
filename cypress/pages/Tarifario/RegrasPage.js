import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'

class RegrasPage {

    beforeRegras() {
        login
            .go()
            .signin()
        home
            .tiposDeUso()
            .tarifario()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('Regras')
        return this
    }

    criandoRegraTarifaFixaLinha() {
        this.criandoRegra('AAAA TARIFAFIXALINHA', 'Linha', 'Tarifa Fixa', '22/08/2028', '250')
        return this
    }

    criandoRegraEntradaSaidaLinha() {
        this.criandoRegra('AAAA ENTSAILINHA', 'Linha', 'Entrada Saída', '22/08/2028', '250')
        return this
    }

    criandoRegraEntradaSaidaIntegracao() {
        this.criandoRegra('AAAA ENTSAIINTEGRA', 'Integração', 'Entrada Saída', '22/08/2028', '250')
        return this
    }

    criandoRegraTarifaFixaIntegracao() {
        this.criandoRegra('AAAA TARFIXAINTEGRA', 'Integração', 'Tarifa Fixa', '22/08/2028', '250')
        return this
    }

    criandoRegraSecaolinha() {
        this.criandoRegraSecao('AAAA SEÇÃOLINHA', 'Integração', 'Seção', 'AAAA AUTOMAÇÃO SEÇÃO', '22/08/2028')
        return this
    }

    criandoRegraSecaoIntegracao() {
        this.criandoRegraSecao('AAAA SEÇÃOINTEGRAÇÃO', 'Integração', 'Seção', 'AAAA AUTOMAÇÃO SEÇÃO', '22/08/2028')
        return this
    }

    editandoRegra() {
        componente
        .escreveId('AAAA')
        .clicaBotaoEditar()
        .limpaDescricao()
        .escreveDescricao('Regra Editada')
        this
        .selecionaTarifa('Integração')
        .limpaDataInicial()
        .escreveDataInicial('01/01/2031')
        componente
        .clicaBotaoSalvar()
        .clicaBotaoModal('Sim')
        .validaMensagem('A regra foi editada com sucesso')
        return this
    }


    criandoRegra(descricao, tarifa, modelo, data, valor) {
        componente
            .clicaBotaoNovo()
            .escreveDescricao(descricao)
        this
            .selecionaTarifa(tarifa)
            .selecionaModelo(modelo)
            .escreveDataInicial(data)
            .escreveValorTarifa(valor)
        componente
            .selecionaStatus('Inativo')
            .clicaBotaoSalvar()
            .clicaBotaoModal('Sim')
            .validaMensagem('A regra foi definida com sucesso')
        return this
    }

    criandoRegraSecao(descricao, tarifa, modelo, secao, data) {
        componente
            .clicaBotaoNovo()
            .escreveDescricao(descricao)
        this
            .selecionaTarifa(tarifa)
            .selecionaModelo(modelo)
            .escolheSecao(secao)
            .escreveDataInicial(data)
        componente
            .selecionaStatus('Inativo')
            .clicaBotaoSalvar()
            .clicaBotaoModal('Sim')
            .validaMensagem('A regra foi definida com sucesso')
        return this
    }

    escreveValorTarifa(valor) {
        cy.get('#FarRuleDates_0_FarRulePrices_0_price').type(valor)
        return this
    }

    escreveDataInicial(data) {
        cy.get('#FarRuleDates_0_startDate').type(data, { force: true }).type(`{enter}`, { force: true })
        return this
    }

    limpaDataInicial(data) {
        cy.get('#FarRuleDates_0_startDate').clear({ force: true })
        return this
    }

    escolheSecao(secao) {
        cy.get('#section').type(secao, { force: true })
        cy.get('.ant-select-item-option-content').contains(secao).click({ force: true })
        return this
    }

    filtroPorId() {
        componente
            .escreveId('612288')
            .validaPesquisaAntTableRow('612288')
        return this
    }

    filtroPorDescricao() {
        componente
            .escreveId('ARGOREGRA')
            .validaPesquisaTitle('ARGOREGRA')
        return this
    }

    filtroPorModeloTarifaFlatFare() {
        this.filtroPorModelo('flatFare', 'Tarifa Fixa')
        return this
    }

    filtroPorModeloTarifaSection() {
        this.filtroPorModelo('section', 'Seção')
        return this
    }

    filtroPorModeloTarifaCheckinCheckout() {
        this.filtroPorModelo('checkinCheckout', 'Entrada Saída')
        return this
    }

    filtroPorTipoTarifaIntegracao() {
        this.filtroPorTipoTarifa('Integração', 'Linha')
        return this
    }

    filtroPorTipoTarifaLinha() {
        this.filtroPorTipoTarifa('Linha', 'Integração')
        return this
    }

    filtroPorStatusAtivo() {
        componente
            .selecionaStatus('Ativo')
            .validaStatusAtivo()
            .validaStatusAusente('Inativo')
        return this
    }

    filtroPorStatusInativo() {
        componente
            .selecionaStatus('Inativo')
            .validaStatusInativo()
            .validaStatusAusente('Ativo')
        return this
    }

    filtroPorPadraoSim() {
        this.filtroPorPadrao('Sim', 'Não')
        return this
    }

    filtroPorPadraoNao() {
        this.filtroPorPadrao('Não', 'Sim')
        return this
    }


    botaoNovo() {
        componente
            .clicaBotaoNovo()
            .validaMensagem('Preencha os campos abaixo para o cadastro da regra de tarifa')
        return this
    }

    botaoVisualizar() {
        componente
            .clicaBotaoVisualizar()
            .validaTexto('Detalhes')
        return this
    }

    botaoEditar() {
        componente
            .clicaBotaoEditar()
            .validaTexto('Editar')
        return this
    }

    botaoLimpaFiltro() {
        this.filtroPorModeloTarifaSection()
        componente
            .limpaFiltro()
        return this
    }

    filtroPorModelo(modelo, model) {
        cy.get('#model').click({ force: true })
        cy.get('.ant-select-item-option-content').contains(modelo).click({ force: true })
        componente.validaPesquisaDataRowKey(model)
        return this
    }

    filtroPorTipoTarifa(tarifa, ausente) {
        cy.get('#type').click({ force: true })
        cy.get('.ant-select-item-option-content').contains(tarifa).click({ force: true })
        componente
            .validaPesquisaDataRowKey(tarifa)
            .validaTextoAusente(ausente)
    }

    filtroPorPadrao(padrao, ausente) {
        cy.get('#isDefault').click({ force: true })
        cy.get('.ant-select-item-option-content').contains(padrao).click({ force: true })
        componente
            .validaPesquisaAntTableRow(padrao)
        cy.get('.ant-table-row').should('not.contain', ausente)
        return this
    }

    selecionaModelo(modelo) {
        cy.get('#model').click({ force: true })
        cy.get('.ant-select-item-option-content').contains(modelo).click({ force: true })
        return this
    }

    selecionaTarifa(tarifa) {
        cy.get('#type').click({ force: true })
        cy.get('.ant-select-item-option-content').contains(tarifa).click({ force: true })
        return this
    }

    selecionaSecao(secao) {
        cy.get('#section').click({ force: true })
        cy.get('.ant-select-item-option-content').contains(secao).click({ force: true })
    }
}
export default new RegrasPage