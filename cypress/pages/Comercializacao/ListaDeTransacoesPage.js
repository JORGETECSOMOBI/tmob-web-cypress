import login from '../Login/LoginPage'
import home from '../Home/HomePage'
import componente from '../ComponentesPadrao/ComponentesPadraoPage'

class ListaDeTransacoesPage {

    beforeListaDetransacoes() {
        login.go()
        login.signin()
        home.comercializacao()
        componente
            .clicaBotao('Lista de Transações')
            .selecionaIdioma('PT')
        return this
    }

    filtroPorGUID() {
        componente
            .escreveGuid('1c22dbb1-1ff8-496d-abf9-4c8d3f7bdb7f')
            .validaPesquisaDataRowKey('1c22dbb1-1ff8-496d-abf9-4c8d3f7bdb7f')
        return this
    }

    filtroPorNumeroRecibo() {
        componente
            .escreveGuid('34000000000000009757')
            .clicaBotaoHomeVisualizar()
            .validaTexto('Recibo nº 34000000000000009757')
        return this
    }

    filtroPorRedeVendas() {
        cy.get('#name').type('Rede Autopass', { force: true }).type(`{enter}`)
        componente
            .validaPesquisaDataRowKey('Rede Autopass')
        return this
    }

    filtroPorPeriodo() {
        cy.get('input[placeholder="Data inicial"]').type('22/05/2024', { force: true }).type(`{enter}`)
        cy.get('input[placeholder="Data final"]').type('22/05/2024', { force: true }).type(`{enter}`)
        return this
    }

    filtroPorTerminal() {
        cy.get('#toTerminalCode').click({ force: true })
        cy.get('.ant-select-item-option-content').contains('2147483647').wait(1000).click({ force: true })
        componente
            .validaPesquisaDataRowKey('2147483647')
        return this
    }

    filtroPorGrupoTerminal() {
        cy.get('#toTerminalGroupId').click({ force: true })
        cy.get('.ant-select-item-option-content').contains('2147483647').wait(1000).click({ force: true })
        componente
            .validaPesquisaDataRowKey('2147483647')
        return this
    }

    filtroPorTipoOperaçãoCompraRecarga() {
        cy.get('#operationType').click({ force: true })
        cy.get('.ant-select-item-option-content').contains('Compra de recarga').wait(1000).click({ force: true })
        componente
            .validaPesquisaDataRowKey('Compra de recarga')
        return this
    }

    filtroPorTipoOperacaoVenda() {
        cy.get('#operationType').click({ force: true })
        cy.get('.ant-select-item-option-content').contains('Venda').wait(1000).click({ force: true })
        componente
            .validaPesquisaDataRowKey('Venda')
        return this
    }

    filtroPorTipoOperacaoCancelamentoVenda() {
        cy.get('#operationType').click({ force: true })
        cy.get('.ant-select-item-option-content').contains('Cancelamento de venda').wait(1000).click({ force: true })
        componente
            .validaPesquisaDataRowKey('Cancelamento de venda')
        return this
    }

    filtroPorTipoOperacaoRecargaMidia() {
        cy.get('#operationType').click({ force: true })
        cy.get('.ant-select-item-option-content').contains('Recarga de midia').wait(1000).click({ force: true })
        componente
            .validaPesquisaDataRowKey('Recarga de midia')
        return this
    }

    filtroPorTipoAbt() {
        cy.get('#type').click({ force: true })
        cy.get('.ant-select-item-option-content').contains('Abt').wait(1000).click({ force: true })
        componente
            .validaPesquisaDataRowKey('Abt')
        return this
    }

    filtroPorTipoMidiaExterna() {
        cy.get('#type').click({ force: true })
        cy.get('.ant-select-item-option-content').contains('Mídia externa').wait(1000).click({ force: true })
        componente
            .validaPesquisaAntTableCell('Mídia externa')
        return this
    }

    filtroPorTipoMidia() {
        cy.get('#type').click({ force: true })
        cy.get('div.ant-select-item-option:contains("Mídia"):not(:contains("Mídia externa"))').click({ force: true })
        componente
            .validaPesquisaAntTableCell('Mídia')
        return this
    }

    filtroPorTipoQrCode() {
        cy.get('#type').click({ force: true })
        cy.get('.ant-select-item-option-content').contains('QR Code').wait(1000).click({ force: true })
        componente
            .validaPesquisaAntTableCell('QR Code')
        return this
    }

    filtroPorMídia() {
        cy.get('#id').click({ force: true })
        return this
    }

    filtroPorFormaPagamentoDinheiro() {
        cy.get('#comPaymentModeId').click({ force: true })
        cy.get('.ant-select-item-option-content').contains('Dinheiro').wait(1000).click({ force: true })
        componente
            .validaPesquisaAntTableCell('Dinheiro')
        return this
    }

    filtroPorFormaPagamentoDebito() {
        cy.get('#comPaymentModeId').click({ force: true })
        cy.get('.ant-select-item-option-content').contains('Debito').wait(1000).click({ force: true })
        componente
            .validaPesquisaAntTableCell('Debito')
        return this
    }

    filtroPorFormaPagamentoVoucher() {
        cy.get('#comPaymentModeId').click({ force: true })
        cy.get('.ant-select-item-option-content').contains('Voucher').wait(1000).click({ force: true })
        componente
            .validaPesquisaAntTableCell('Voucher')
        return this
    }


    filtroPorStatusCompleto() {
        cy.get('#rc_select_10').click({ force: true })
        return this
    }

    filtroPorStatusPago() {
        cy.get('#rc_select_10').click({ force: true })
        return this
    }

    filtroPorStatusNaoProcessado() {
        cy.get('#rc_select_10').click({ force: true })
        return this
    }
}
export default new ListaDeTransacoesPage