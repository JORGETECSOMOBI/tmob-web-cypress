import login from '../Login/LoginPage'
import home from '../Home/HomePage'
import componente from '../ComponentesPadrao/ComponentesPadraoPage'
import faker from 'faker-br'

class TaxaDeAdministracaoPage {

    beforeTaxaDeAdministracao() {
        login.go()
        login.signin()
        home.comercializacao()
        componente
            .clicaBotao('Taxa de Administração')
            .selecionaIdioma('PT')
        return this
    }

    criandoTaxaAdministracaoPorcentagem() {
        componente
            .clicaBotaoNovo()
            .escreveDescricao('AAAA AUTOMAÇÃO TAXA PORCENTAGEM')
        this
            .selecionaTipoTaxa('Taxa adm')
        componente
            .clicaBotaoProximo()
        this
            .botaoAdicionarTaxa('Adicionar taxa')
            .selecionaTipoModalidade('Porcentagem')
            .escreveValor('1000')
            .escreveValorMinimo('200')
            .vigencia('22/05/2025', '22/11/2028')
        componente
            .clicaBotaoSalvar()
            .clicaBotaoModal('Salvar')
            .validaMensagem('Taxa cadastrada com sucesso')
        return this
    }

    criandoTaxaAdministracaoValor() {
        componente
            .clicaBotaoNovo()
            .escreveDescricao('AAAA AUTOMAÇÃO TAXA VALOR')
        this
            .selecionaTipoTaxa('Taxa adm')
        componente
            .clicaBotaoProximo()
        this
            .botaoAdicionarTaxa('Adicionar taxa')
            .selecionaTipoModalidade('Valor')
            .escreveValor('1000')
            .vigencia('22/05/2025', '22/11/2028')
        componente
            .clicaBotaoSalvar()
            .clicaBotaoModal('Salvar')
            .validaMensagem('Taxa cadastrada com sucesso')
        return this
    }

    editandoTaxaAdministracao() {
        componente
            .escreveDescricao('AAAA AUTOMAÇÃO TAXA')
            .clicaBotaoEditar()
            .limpaDescricao()
            .escreveDescricao('AAAA AUTOMAÇÃO TAXA EDITADA')
            .clicaBotaoSalvar()
            .clicaBotaoModal('Salvar')
            .validaMensagem('Taxa editada com sucesso')
        return this
    }

    filtroPorId() {
        componente
            .escreveDescricao('6')
            .validaPesquisaDataRowKey('6')
        return this
    }

    filtroPorDescricao() {
        componente
            .escreveDescricao('AAAA AUTOMAÇÃO TAXA DE ADMINISTRAÇÃO')
            .validaPesquisaTitle('AAAA AUTOMAÇÃO TAXA DE ADMINISTRAÇÃO')
        return this
    }

    filtroPorTipoService() {
        this.selecionaTipoTaxa('service')
        componente.validaPesquisaAntTableCell('Taxa de administração')
        return this
    }

    filtroPorTipoSubscription() {
        this.selecionaTipoTaxa('subscription')
        componente.validaPesquisaAntTableCell('Plano')
        return this
    }

    filtroPorPadraoSim() {
        cy.get('#isDefault').click()
        cy.get('.ant-select-item-option-content').contains('Sim').click()
        componente.validaPesquisaDataRowKey('Sim')
        return this
    }

    filtroPorPadraoNao() {
        cy.get('#isDefault').click()
        cy.get('.ant-select-item-option-content').contains('Não').click()
        componente.validaPesquisaDataRowKey('Não')
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

    botaoNovo() {
        componente
            .clicaBotaoNovo()
            .validaMensagem('Nova Taxa')
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
        componente
            .escreveNome('Testando limpar filtro')
            .limpaFiltro()
        return this
    }

    selecionaTipoTaxa(tipoTaxa) {
        cy.get('#type').click({ force: true })
        cy.get('.ant-select-item-option-content').contains(tipoTaxa).wait(1000).click({ force: true })
        return this
    }

    botaoAdicionarTaxa(label) {
        cy.get('.ant-row > .ant-btn > span').contains(label).click()
        return this
    }

    selecionaTipoModalidade(tipo) {
        cy.get('#data_0_type').click({ force: true })
        cy.get('#data_0_type').click({ force: true })
        cy.get('.ant-select-item-option-content').contains(tipo).click()
        return this
    }

    escreveValor(valor) {
        cy.get('#data_0_value').type(valor)
        return this
    }

    escreveValorMinimo(valor) {
        cy.get('#data_0_minValue').type(valor)
        return this
    }

    vigencia(data1, data2) {
        cy.get('#data_0_startDate').type(data1, { force: true }).type(`{enter}`)
        cy.get(':nth-child(3) > input').type(data2, { force: true }).type(`{enter}`)
    }
}
export default new TaxaDeAdministracaoPage