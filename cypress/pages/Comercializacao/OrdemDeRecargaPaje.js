import login from '../Login/LoginPage'
import home from '../Home/HomePage'
import componente from '../ComponentesPadrao/ComponentesPadraoPage'

class OrdemDeRecargaPage {

    beforeOrdemDeRecarga() {
        login.go()
        login.signin()
        home.comercializacao()
        componente
            .clicaBotao('Ordem de recarga')
            .selecionaIdioma('PT')
        return this
    }

    pesquisaPorId() {
        cy.get('#orderNumber').type('1185', { force: true })
        componente.validaPesquisaAntTableRow('1185')
        return this
    }

    pesquisaPorNumeroPedido() {
        cy.get('#orderNumber').type('1696252329001471820593', { force: true })
        componente.validaPesquisaAntTableRow('1696252329001471820593')
        return this
    }

    pesquisaPorRedeDeVenda() {
        cy.get('#comMerchantId').click({ force: true })
        cy.get('.ant-select-item-option-content').contains('91 - REDE DE VENDAS').click({ force: true })
        componente.validaPesquisaDataRowKey('REDE DE VENDAS')
        return this
    }

    pesquisaPorDataDoPedido() {
        cy.get('input[placeholder="Data inicial"]').eq(0).type('15/05/2023', { force: true }).type(`{enter}`)
        cy.get('input[placeholder="Data final"]').eq(0).type('16/10/2023', { force: true }).type(`{enter}`)
        cy.get('[data-row-key]').should('contain', '11/10/2023')
        return this
    }

    pesquisaPorLiberadoCancelado() {
        cy.get('input[placeholder="Data inicial"]').eq(1).type('15/05/2023', { force: true }).type(`{enter}`)
        cy.get('input[placeholder="Data final"]').eq(1).type('16/10/2023', { force: true }).type(`{enter}`)
        cy.get('[data-row-key]').should('contain', '03/10/2023')
        return this
    }

    pesquisaPorOrganizacao() {
        cy.get('#usrOrganization').type('AUTOMÁTICO')
        cy.get('.ant-select-item-option-content').contains('AUTOMÁTICO').click({ force: true })
        return this
    }

    pesquisaPorStatusEmAberto() {
        cy.get('.ant-select-selection-overflow').click()
        cy.get('.ant-select-item-option-content').contains('Em aberto').click({ force: true })
        componente.clicaBotaoVisualizar()
        cy.contains('Em aberto')
        return this
    }

    pesquisaPorStatusAguardandoLiberacao() {
        cy.get('.ant-select-selection-overflow').click()
        cy.get('.ant-select-item-option-content').contains('Aguardando liberação').click({ force: true })
        componente.clicaBotaoVisualizar()
        cy.contains('Aguardando liberação')
        return this
    }

    pesquisaPorStatusLiberado() {
        cy.get('.ant-select-selection-overflow').click()
        cy.get('.ant-select-item-option-content').contains('Liberado').click({ force: true })
        componente.clicaBotaoVisualizar()
        cy.contains('Liberado')
        return this
    }

    pesquisaPorStatusCancelado() {
        cy.get('.ant-select-selection-overflow').click()
        cy.get('.ant-select-item-option-content').contains('Cancelado').click({ force: true })
        componente.clicaBotaoVisualizar()
        cy.contains('Cancelado')
        return this
    }

    pesquisaPorPagamentoDinheiro() {
        return this
    }

    pesquisaPorPagamentoDebito() {
        return this
    }
    pesquisaPorPagamentoCredito() {
        return this
    }

    pesquisaPorPagamentoVoucher() {
        return this
    }

    botaoNovo() {
        return this
    }

    botaoVisualizar() {
        return this
    }

    limparFiltros() {
        return this
    }
}
export default new OrdemDeRecargaPage