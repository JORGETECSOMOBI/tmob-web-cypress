import login from '../Login/LoginPage'
import home from '../Home/HomePage'
import componente from '../ComponentesPadrao/ComponentesPadraoPage'

class ServicoPage {

    beforeServico() {
        login.go()
        login.signin()
        home.comercializacao()
        componente
            .clicaBotao('Serviços')
            .selecionaIdioma('PT')
        return this
    }

    filtroPorGuidDoServico() {
        componente
            .escreveGuid("df29fcab-d280-45da-8f71-a4be7d5040b4")
            .validaPesquisaTitle("df29fcab-d280-45da-8f71-a4be7d5040b4")
        return this
    }

    filtroPorTipoFechamentoBackEnd() {
        cy.get('#closeType').click({ force: true })
        cy.get('.ant-select-item-option-content').contains('Backend').click({ force: true })
        componente.validaPesquisaTitle('Backend')
        return this
    }

    filtroPorTipoFechamentoOperador() {
        cy.get('#closeType').click({ force: true })
        cy.get('.ant-select-item-option-content').contains('Operador').click({ force: true })
        componente.validaPesquisaTitle('Operador')
        return this
    }

    filtroPorTipoFechamentoAgendado() {
        cy.get('#closeType').click({ force: true })
        cy.get('.ant-select-item-option-content').contains('Agendado').click({ force: true })
        componente.validaPesquisaTitle('Agendado')
        return this
    }

    filtroRedeDeVendas() {
        cy.get('#comMerchantId').type('Rede Autopass', { force: true }).type(`{enter}`)
        return this
    }

    filtroPorTerminal() {
        cy.get('#code').type('Automação', { force: true }).type(`{enter}`)
        return this
    }

    filtroPorOperador() {
        cy.get('#usrOperatorId').type('Automação', { force: true }).type(`{enter}`)
        return this
    }

    filtroPorTipoTerminalAtm() {
        cy.get('#closingPinRequired').click({ force: true })
        cy.get('.ant-select-item-option-content').contains('ATM').click({ force: true })
        return this
    }

    filtroPorTipoTerminaPos() {
        cy.get('#closingPinRequired').click({ force: true })
        cy.get('.ant-select-item-option-content').contains('POS').click({ force: true })
        return this
    }

    filtroPorPeriodo() {
        cy.get('.ant-picker-input-active > input').type('23/01/2022', { force: true }).type(`{enter}`)
        cy.get(':nth-child(3) > input').type('20/01/2025', { force: true }).type(`{enter}`)
        return this
    }

    filtroPorValorMinimo() {
        cy.get('.ant-input-number-input').type('1000', { force: true })
        return this
    }

    botaoLimpaFiltro() {
        componente
            .escreveGuid('9c56c7bf-2029-4186-a5c7-38ad5b00626b')
            .limpaFiltro()
        cy.get('#guid').should('have.text', '')
        return this
    }

    Botaovisualizar() {
        componente
            .clicaBotaoVisualizar()
            .validaTexto('Detalhes')
        return this
    }
}
export default new ServicoPage