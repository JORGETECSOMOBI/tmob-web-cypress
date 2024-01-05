import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'

class UsoPage {

    beforeUso() {
        login
            .go()
            .signin()
        home
            .tiposDeUso()
            .qrCode()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('Uso')
        return this
    }

    filtrandoPorId() {
        this.filtrandoPorDatadeUso()
        componente
            .escreveId('939980')
            .validaPesquisaDataRowKey('939980')
        return this
    }

    filtrandoPorEmpresa() {
        cy.get('#rc_select_10').click().type('Operadora TMOB').wait(1000).type(`{enter}`)
        componente
            .validaPesquisaTitle('Operadora TMOB')
        return this
    }

    filtrandoPorCodigoTerminal() {
        this.filtrandoPorDatadeUso()
        cy.get('#toTerminalCode').click({force:true}).type('5004').wait(1000).type(`{enter}`)
        componente
            .validaPesquisaTitle('5004')
        return this
    }

    filtrandoPorDatadeUso() {
        cy.get('input[placeholder="Data inicial"]').clear({ force: true })
        cy.get('input[placeholder="Data inicial"]').type('26/12/2023', { force: true })
        cy.get('input[placeholder="Data final"]').clear({ force: true })
        cy.get('input[placeholder="Data final"]').type('26/12/2023', { force: true }).type(`{enter}`)
        componente
            .validaPesquisaTitle('26/12/2023 17:28:40')
            .validaTextoAusente('22/12/2023 17:10:52')
        return this
    }

    filtrandoPorLinha() {
        cy.get('#rc_select_11').click().type('Miracatiba 1').wait(1000).type(`{enter}`)
        componente
            .validaPesquisaTitle('Miracatiba 1')
        return this
    }

    filtrandoPorIdQrMidia() {
        this.filtrandoPorDatadeUso()
        cy.get('#qrMediaId').click({ force: true }).type('3928189').wait(1000).type(`{enter}`)
        componente
            .validaPesquisaDataRowKey('3928189')
        return this
    }

    filtrandoPorSistemaTopMercury() {
        cy.get('#rc_select_12').click().type('TOP-Mercury')
        cy.contains('TOP-Mercury').click({ force: true })
        componente
            .validaPesquisaTitle('TOP-Mercury')
        return this
    }

    filtrandoPorOrigemDoUsoInterno() {
        this
            .selecionaOrigemDoUso('Interno')
        componente
            .validaTextoAusente('Externo')
        return this
    }

    filtrandoPorStatusRevertido() {
        this
            .selecionaStatus('Revertido')
        componente
            .validaTextoAusente('Revertido')
        return this
    }

    filtrandoPorStatusRejeitado() {
        this
            .selecionaStatus('Rejeitado')
        componente
            .validaTextoAusente('Uso Excessivo')
            .validaTextoAusente('Esgotado')
            .validaTextoAusente('Integrado')
            .validaTextoAusente('Revertido')
            .validaTextoAusente('Usado')
        return this
    }

    filtrandoPorStatusEsgotado() {
        this
            .selecionaStatus('Esgotado')
        componente
            .validaTextoAusente('Uso Excessivo')
            .validaTextoAusente('Rejeitado')
            .validaTextoAusente('Integrado')
            .validaTextoAusente('Revertido')
            .validaTextoAusente('Usado')
        return this
    }

    filtrandoPorStatusUsoExcessivo() {
        this
            .selecionaStatus('Uso Excessivo')
        componente
            .validaTextoAusente('Rejeitado')
            .validaTextoAusente('Esgotado')
            .validaTextoAusente('Integrado')
            .validaTextoAusente('Revertido')
            .validaTextoAusente('Usado')
        return this
    }

    filtrandoPorStatusIntegrado() {
        this
            .selecionaStatus('Integrado')
        componente
            .validaTextoAusente('Uso Excessivo')
            .validaTextoAusente('Esgotado')
            .validaTextoAusente('Rejeitado')
            .validaTextoAusente('Revertido')
            .validaTextoAusente('Usado')
        return this
    }

    filtrandoPorStatusUsado() {
        this
            .selecionaStatus('Usado')
        componente
            .validaTextoAusente('Uso Excessivo')
            .validaTextoAusente('Esgotado')
            .validaTextoAusente('Integrado')
            .validaTextoAusente('Revertido')
            .validaTextoAusente('Rejeitado')
        return this
    }

    selecionaOrigemDoUso(origem) {
        cy.get('#origin').click()
        cy.contains(origem).click({ force: true })
        componente
            .validaPesquisaTitle(origem)
        return this
    }

    filtrandoPorModoDeUso() {
        this.selecionaModoDeUso('Online')
        return this
    }

    filtrandoPorModoDeUsoOnline() {
        this.selecionaModoDeUso('Online')
        componente
            .validaPesquisaDataRowKey('Online')
            .validaTextoAusente('Offline')
        return this
    }

    filtrandoPorModoDeUsoOffline() {
        this.selecionaModoDeUso('Offline')
        componente
            .validaPesquisaDataRowKey('Offline')
            .validaTextoAusente('Online')
        return this
    }

    selecionaStatus(status) {
        cy.get('#isOverused').click()
        cy.contains(status).click({ force: true })
        componente
            .validaPesquisaTitle(status)
        return this
    }

    selecionaModoDeUso(modo) {
        cy.get('#isOffline').click()
        cy.get('.ant-select-item-option-content').contains(modo).click()
        return this
    }

    botaoVerQrCode() {
        this.filtrandoPorDatadeUso()
        componente
            .clicaBotao("Ver QR Code")
            .validaTexto('Preço unitário')
        return this
    }

    LinkIdMidia() {
        this.filtrandoPorDatadeUso()
        cy.get('[data-row-key]').contains('3928189').click({ force: true })
        componente
            .validaTexto('Preço unitário')
        return this
    }
}
export default new UsoPage