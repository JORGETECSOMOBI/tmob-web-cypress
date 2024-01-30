import login from '../Login/LoginPage'
import home from '../Home/HomePage'
import componente from '../ComponentesPadrao/ComponentesPadraoPage'

class FormaDePagamentoPage {

    beforeFormaDePagamento() {
        login.go()
        login.signin()
        home.comercializacao()
        componente
            .clicaBotao('Forma de pagamento')
            .selecionaIdioma('PT')
        return this
    }

    criandoFormadePagamento() {
        componente
            .clicaBotaoNovo()
            .escreveDescricao('AAAA AUTOMAÇÃO FORMA DE PAGAMENTO')
            .selecionaStatus('Inativo')
        this
            .recebimentosFrequentes('1000')
            .metodoPagamento('Dinheiro')
            .voucherSim()
        componente
            .clicaBotaoSalvar()
            .clicaBotaoModal('Salvar')
            .validaMensagem('Forma de pagamento foi criado com sucesso!')
        return this
    }

    editandoFormadePagamento() {
        componente
            .escreveDescricao('AAAA AUTOMAÇÃO FORMA DE PAGAMENTO')
            .clicaBotaoEditar()
            .limpaDescricao()
            .escreveDescricao('AAAA AUTOMAÇÃO FORMA DE PAGAMENTO ')
            .selecionaStatus('Inativo')
            .clicaBotaoSalvar()
            .clicaBotaoModal('Salvar')
            .validaMensagem('Forma de pagamento foi editado com sucesso!')
        return this
    }

    voucherSim() {
        cy.get('#allowVoucher >').eq(0).click()
        return this
    }

    voucherNao() {
        cy.get('#allowVoucher >').eq(1).click()
        return this
    }

    metodoPagamento(metodo) {
        cy.get('#paymentMethod').click()
        cy.get('.ant-select-item-option-content').contains(metodo).wait(1000).click({ force: true })
        return this
    }

    recebimentosFrequentes(valor) {
        cy.get('#usualReceivedList_0_usualReceived').type(valor)
        return this
    }

    permiteTrocoNao() {
        cy.get('.ant-switch-inner').click()
        return this
    }

    filtroPorId() {
        componente
            .escreveDescricao('29')
            .validaPesquisaDataRowKey('29')
        return this
    }

    filtroPorDescricao() {
        componente
            .escreveDescricao('AAAA AUTOMAÇÃO FORMA DE PAGAMENTO')
            .validaPesquisaTitle('AAAA AUTOMAÇÃO FORMA DE PAGAMENTO')
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
            .validaMensagem('Preencha os campos abaixo para criar uma forma de pagamento')
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
            .escreveDescricao('Testando limpar filtro')
            .limpaFiltro()
        cy.get('#description').should('have.text', '')
        return this
    }
}
export default new FormaDePagamentoPage