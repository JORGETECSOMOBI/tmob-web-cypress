import login from '../Login/LoginPage'
import home from '../Home/HomePage'
import componente from '../ComponentesPadrao/ComponentesPadraoPage'
import faker from 'faker-br'

class RelatoriosPage {

    beforeRelatorios() {
        login.go()
        login.signin()
        home.comercializacao()
        componente
            .clicaBotao('Relatórios')
            .selecionaIdioma('PT')
        return this
    }

    gerandoRelatorioSangriaFiltroInicioXLSX() {
        this
            .selecionaTipoRelatorioSangria()
            .inicio()
            .formatoArquivo('XLSX')
            .botaoGerarRelatorioXLSX()
        componente
            .clicaBotaoModal('Gerar relatório')
            .clicaBotaoModal('Baixar relatório')
            .fecharJanelaCypress()
        componente
            .clicaBotao('Dashboard')
            .clicaBotao('Relatórios')
        return this
    }

    gerandoRelatorioSangriaFiltroInicioCSV() {
        this
            .selecionaTipoRelatorioSangria()
            .inicio()
            .formatoArquivo('CSV')
            .botaoGerarRelatorioCSV()
        componente
            .clicaBotaoModal('Gerar relatório')
            .clicaBotaoModal('Baixar relatório')
            .fecharJanelaCypress()
        return this
    }

    gerandoRelatorioTransacoesAnaliticasFiltroInicioXLSX() {
        this
            .selecionaTipoRelatorioTransacoesAnaliticas()
            .inicio()
            .formatoArquivo('XLSX')
            .botaoGerarRelatorioXLSX()
        componente
            .clicaBotaoModal('Gerar relatório')
            .clicaBotaoModal('Baixar relatório')
            .fecharJanelaCypress()
        return this
    }

    gerandoRelatorioTransacoesAnaliticasFiltroInicioCSV() {
        this
            .selecionaTipoRelatorioTransacoesAnaliticas()
            .inicio()
            .formatoArquivo('CSV')
            .botaoGerarRelatorioCSV()
        componente
            .clicaBotaoModal('Gerar relatório')
            .clicaBotaoModal('Baixar relatório')
            .fecharJanelaCypress()
        return this
    }

    selecionaTipoRelatorioSangria() {
        cy.get('#name').click({ force: true })
        cy.get('.ant-select-item-option-content').contains('Sangria').click({ force: true })
        return this
    }

    selecionaTipoRelatorioTransacoesAnaliticas() {
        cy.get('#name').click({ force: true })
        cy.get('.ant-select-item-option-content').contains('Transações analiticas').click({ force: true })
        return this
    }

    selecionaCodigoTerminal() {
        cy.get('#toTerminalCode')
        return this
    }

    inicio() {
        cy.get('#startDate').clear({ force: true })
        cy.get('#startDate').type('2021-01-15', { force: true }).type(`{enter}`)
        cy.get('.ant-picker-input-active > input').clear({ force: true })
        cy.get('.ant-picker-input-active > input').type('2023-01-15', { force: true }).type(`{enter}`)
        return this
    }

    estacao() {
        cy.get('#terminalGroup1')
        return this
    }

    linha() {
        cy.get('#terminalGroup2')
        return this
    }

    empresa() {
        cy.get('#terminalGroup3')
        return this
    }

    statusSessao() {
        cy.get('#isClosed')
        return this
    }

    fechamentoSessao() {
        cy.get('#closeDate')
        return this
    }

    formatoArquivo(formato) {
        cy.get('#fileFormats').click({ force: true })
        cy.get('.ant-select-item-option-content').contains(formato).click({ force: true })
        return this
    }

    botaoGerarRelatorioXLSX() {
        componente.clicaBotao('Gerar relatório (XLSX)')
        return this
    }

    botaoGerarRelatorioCSV() {
        componente.clicaBotao('Gerar relatório (CSV)')
        return this
    }

    validaUltimoRelatorio() {
        const relatorio = 'Último relatório'
        const data = faker.date.recent().toLocaleDateString()
        cy.contains(relatorio).contains('contain',relatorio)
        return this
    }
}
export default new RelatoriosPage