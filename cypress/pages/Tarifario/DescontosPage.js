import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'
import regras from '../Tarifario/RegrasPage'

class DescontosPage {

    beforeDescontos() {
        login
            .go()
            .signin()
        home
            .tiposDeUso()
            .tarifario()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('Descontos')
        return this
    }

    cadastrandoDescontoDiaInteiroDefault() {
        this.cadastroDescontoDiaInteiro('AAAA Automação desconto default dia inteiro', 'default')
        return this
    }

    cadastrandoDescontoPeriodoDeTempoDefault() {
        this.cadastroDescontoPeriodoDeTempo('AAAA Automação desconto período de tempo', 'default')
        return this
    }

    cadastrandoDescontoDiaInteiroQrCode() {
        this.cadastroDescontoDiaInteiro('AAAA Automação desconto default dia inteiro', 'QR Code')
        return this
    }

    cadastrandoDescontoPeriodoDeTempoQrCode() {
        this.cadastroDescontoPeriodoDeTempo('AAAA Automação desconto período de tempo', 'QR Code')
        return this
    }

    cadastrandoDescontoDiaInteiroMidia() {
        this.cadastroDescontoDiaInteiro('AAAA Automação desconto default dia inteiro', 'Mídia')
        return this
    }

    cadastrandoDescontoPeriodoDeTempoMidia() {
        this.cadastroDescontoPeriodoDeTempo('AAAA Automação desconto período de tempo', 'Mídia')
        return this
    }

    cadastrandoDescontoDiaInteiroEmv() {
        this.cadastroDescontoDiaInteiro('AAAA Automação desconto default dia inteiro', 'EMV')
        return this
    }

    cadastrandoDescontoPeriodoDeTempoEmv() {
        this.cadastroDescontoPeriodoDeTempo('AAAA Automação desconto período de tempo', 'EMV')
        return this
    }

    cadastrandoDescontoDiaInteiroVendaABordo() {
        this.cadastroDescontoDiaInteiro('AAAA Automação desconto default dia inteiro', 'Venda a bordo')
        return this
    }

    cadastrandoDescontoPeriodoDeTempoVendaABordo() {
        this.cadastroDescontoPeriodoDeTempo('AAAA Automação desconto período de tempo', 'Venda a bordo')
        return this
    }


    cadastroDescontoPeriodoDeTempo(descricao, tipo) {
        componente
            .clicaBotaoNovo()
            .escreveDescricao(descricao)
            .clicaBotaoProximo()
            .clicaBotao('Adicionar mais descontos')
        this
            .selecionaTipo(tipo)
            .selecionaDiaDaSemana('Segunda')
            .periodoDeTempo()
            .valorDoDesconto('050')
            .selecionaTipoDeDesconto('Desconto')
        componente
            .clicaBotaoProximo()
            .clicaBotao('Adicionar mais descontos')
        this
            .selecionaTipoPeriodo('default')
            .selecionaTipoDeDescontoPeriodo('Desconto')
            .escolherDatas()
            .valorDoDescontoPeriodo('100')
        componente
            .clicaBotaoSalvar()
            .clicaBotaoModal('Sim')
            .validaMensagem('Seu desconto foi cadastrado com sucesso')
        return this
    }

    cadastroDescontoDiaInteiro(descricao, tipo) {
        componente
            .clicaBotaoNovo()
            .escreveDescricao(descricao)
            .clicaBotaoProximo()
            .clicaBotao('Adicionar mais descontos')
        this
            .selecionaTipo(tipo)
            .selecionaDiaDaSemana('Segunda')
            .selecionaDiaInteiro()
            .valorDoDesconto('050')
            .selecionaTipoDeDesconto('Desconto')
        componente
            .clicaBotaoProximo()
            .clicaBotao('Adicionar mais descontos')
        this
            .selecionaTipoPeriodo('default')
            .selecionaTipoDeDescontoPeriodo('Desconto')
            .escolherDatas()
            .valorDoDescontoPeriodo('100')
        componente
            .clicaBotaoSalvar()
            .clicaBotaoModal('Sim')
            .validaMensagem('Seu desconto foi cadastrado com sucesso')
        return this
    }

    selecionaDiaInteiro() {
        cy.get('.ant-switch-inner').click()
        return this
    }

    escolherDatas() {
        cy.get('#createManyPeriod_0_date').click().type('22/01/2023').type(`{enter}`)
        cy.get('.ant-picker-input-active > input').click().type('22/01/2023').type(`{enter}`)
        return this
    }

    selecionaTipoDeDesconto(tipodesconto) {
        cy.get('#createManyWeekday_0_discountType').click()
        cy.get('.ant-select-item-option-content').contains(tipodesconto).click({ force: true })
        return this
    }

    selecionaTipoDeDescontoPeriodo(tipodesconto) {
        cy.get('#createManyPeriod_0_discountType').click()
        cy.get('.ant-select-item-option-content').contains(tipodesconto).click({ force: true })
        return this
    }

    periodoDeTempo() {
        cy.get('#createManyWeekday_0_timeRange').click()
        cy.get('.ant-picker-time-panel-cell-inner').contains('05').click()
        cy.get('.ant-picker-time-panel-cell-inner').contains('30').click()
        componente.clicaBotao('OK')
        cy.get('.ant-picker-time-panel-cell-inner').contains('18').click()
        cy.get('.ant-picker-time-panel-cell-inner').contains('30').click()
        componente.clicaBotao('OK')
        return this
    }

    selecionaTipo(tipo) {
        cy.get('#createManyWeekday_0_type').click()
        cy.get('.ant-select-item-option-content').contains(tipo).click({ force: true })
        return this
    }

    selecionaTipoPeriodo(tipo) {
        cy.get('#createManyPeriod_0_type').click()
        cy.get('.ant-select-item-option-content').contains(tipo).click({ force: true })
        return this
    }

    selecionaDiaDaSemana(dia) {
        cy.get('.ant-select-selection-overflow').click()
        cy.get('.ant-select-item-option-content').contains(dia).click({ force: true })
        return this
    }

    valorDoDesconto(desconto) {
        cy.get('#createManyWeekday_0_value').type(desconto)
        return this
    }

    valorDoDescontoPeriodo(desconto) {
        cy.get('#createManyPeriod_0_value').type(desconto)
        return this
    }


    filtroPorId() {
        componente
            .escreveDescricao('AAAA DESCONTO AUTOMAÇÃO')
            .validaPesquisaTitle('AAAA DESCONTO AUTOMAÇÃO')
            .validaPesquisaDataRowKey('52')
        return this
    }

    filtroPorNome() {
        componente
            .escreveDescricao('50')
            .validaPesquisaTitle('Bototoeira')
            .validaPesquisaDataRowKey('50')
        return this
    }

    filtroPorStatusAtivo() {
        regras.filtroPorStatusAtivo()
        return this
    }

    filtroPorStatusInativo() {
        regras.filtroPorStatusInativo()
        return this
    }

    botaoNovo() {
        componente
            .clicaBotaoNovo()
            .validaTexto('Preencha os campos abaixo para o cadastro do desconto')
        return this
    }

    botaoEditar() {
        regras.botaoEditar()
        return this
    }

    botaoVisualizar() {
        regras.botaoVisualizar()
        return this
    }

    botaoLimpaFiltro() {
        componente
            .escreveDescricao('Limpa Filtros')
            .limpaFiltro()
            .validaFuncaolimparFiltro()
        return this
    }
}
export default new DescontosPage