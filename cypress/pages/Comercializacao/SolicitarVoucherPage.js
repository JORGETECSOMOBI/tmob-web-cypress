import login from '../Login/LoginPage'
import home from '../Home/HomePage'
import componente from '../ComponentesPadrao/ComponentesPadraoPage'
import faker from 'faker-br'

class SolicitarVoucherPage {

    beforeSolicitarVoucher() {
        login.go()
        login.signin()
        home.comercializacao()
        componente
            .clicaBotao('Solicitar voucher')
            .selecionaIdioma('PT')
        return this
    }

    solicitandoVoucherMidia() {
        componente.clicaBotao('Criar voucher manualmente')
        this
            .solicitandoVoucherTipo('Mídia')
            .escreveNumeroMidia('3926789905')
            .motivo('Falha conexao atm')
            .escreveObservacao('Teste Automação voucher mídia')
        componente
            .clicaBotaoProximo()
        this
            .dataDeExpiracao('22/02/2028')
            .ValorVoucher('1000')
        componente
            .clicaBotaoSalvar()
        this.botaoSolicitarVoucher()
        componente
            .validaMensagem('Voucher foi cadastrado com sucesso')
            .clicaBotao('Ver voucher')
        this.validaDataVoucher()
        return this
    }

    solicitandoVoucherMidiaExterna() {
        componente.clicaBotao('Criar voucher manualmente')
        this
            .solicitandoVoucherTipo('Media externa')
            .escreveNumeroMidia('3926789905')
            .motivo('Falha conexao atm')
            .escreveObservacao('Teste Automação voucher mídia externa')
        componente
            .clicaBotaoProximo()
        this
            .dataDeExpiracao('22/02/2028')
            .ValorVoucher('1000')
        componente
            .clicaBotaoSalvar()
        this.botaoSolicitarVoucher()
        componente
            .validaMensagem('Voucher foi cadastrado com sucesso')
            .clicaBotao('Ver voucher')
        this.validaDataVoucher()
        return this
    }

    solicitandoVoucherQRcode() {
        componente.clicaBotao('Criar voucher manualmente')
        this
            .solicitandoVoucherTipo('QR Code')
            .escreveNumeroMidia('3926789905')
            .motivo('Falha conexao atm')
            .escreveObservacao('Teste Automação voucher QR code')
        componente
            .clicaBotaoProximo()
        this
            .dataDeExpiracao('22/02/2028')
            .ValorVoucher('1000')
        componente
            .clicaBotaoSalvar()
        this.botaoSolicitarVoucher()
        componente
            .validaMensagem('Voucher foi cadastrado com sucesso')
            .clicaBotao('Ver voucher')
        this.validaDataVoucher()
        return this
    }

    pesquisandoVoucherNumeroMidia() {
        this.escreveNumeroMidia('3926789905')
            .lupa()
        componente.validaPesquisaDataRowKey('3926789905')
        return this
    }

    pesquisandoVoucherTipoMidia() {
        this
            .solicitandoVoucherTipo('Mídia')
            .lupa()
        componente.validaPesquisaDataRowKey('Mídia')
        return this
    }

    pesquisandoVoucherTipoMidiaExterna() {
        this
            .solicitandoVoucherTipo('Media externa')
            .lupa()
        componente.validaPesquisaDataRowKey('Mídia externa')
        return this
    }

    pesquisandoVoucherTipoQRcode() {
        this
            .solicitandoVoucherTipo('QR Code')
            .lupa()
        componente.validaPesquisaDataRowKey('QR Code')
        return this
    }

    lupa() {
        cy.get('.ant-btn-icon-only').click({ force: true })
        return this
    }

    solicitandoVoucherTipo(tipo) {
        cy.get('#mediaType').click({ force: true })
        cy.get('.ant-select-item-option-content').contains(tipo).click({ force: true })
        return this
    }

    escreveNumeroMidia(numero) {
        cy.get('#mediaId').type(numero, { force: true })
        return this
    }

    motivo(motivo) {
        cy.get('#voucherReason').click({ force: true })
        cy.get('.ant-select-item-option-content').contains(motivo).click({ force: true })
        return this
    }

    escreveObservacao(observacao) {
        cy.get('#voucherComment').type(observacao)
        return this
    }

    dataDeExpiracao(data) {
        cy.get('#voucherExpiration').type(data, { force: true }).type(`{enter}`)
        return this
    }

    semDataLimite() {
        cy.get('.ant-switch-inner').click({ force: true })
        return this
    }

    ValorVoucher(valor) {
        cy.get('#voucherValue').type(valor, { force: true }).type(`{enter}`)
        return this
    }

    validaDataVoucher() {
        const data = faker.date.between(new Date(), new Date()).toLocaleDateString('pt-BR')
        const regexData = new RegExp(data)
        cy.get('[style=""]').invoke('text').should('match', regexData)
        return this
    }

    botaoSolicitarVoucher() {
        cy.get('.ant-modal-footer > .ant-btn-primary > span').click({ force: true })
        return this
    }
}
export default new SolicitarVoucherPage