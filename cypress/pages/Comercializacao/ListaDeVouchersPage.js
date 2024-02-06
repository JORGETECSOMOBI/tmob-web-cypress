import login from '../Login/LoginPage'
import home from '../Home/HomePage'
import componente from '../ComponentesPadrao/ComponentesPadraoPage'
import faker from 'faker-br'

class ListaDeVouchersPage {

    beforeListaDeVouchers() {
        login.go()
        login.signin()
        home.comercializacao()
        componente
            .clicaBotao('Lista de Vouchers')
            .selecionaIdioma('PT')
        return this
    }

    filtroNumeroVoucher() {
        cy.get('#mediaId').type('702-8662073')
        componente.validaPesquisaTitle('702-8662073')
        return this
    }

    filtroPeriodo() {
        const data = faker.date.between(new Date(), new Date()).toLocaleDateString('pt-BR')
        const regexData = new RegExp(data)
        cy.get('input[placeholder="Data inicial"]').click({ force: true }).type('19/12/1963').type(`{enter}`)
        cy.get('input[placeholder="Data final"]').click({ force: true }).type(data).type(`{enter}`)
        cy.get('.ant-table-cell').invoke('text').should('match', regexData)
        return this
    }

    filtroDataDeExpiracao() {
        cy.get('.ant-row-bottom > :nth-child(3)').click({ force: true }).type('29/02/2024').type(`{enter}`)
        cy.get('.ant-table-cell').should('contain', '29/02/2024')
        return this
    }

    filtroTerminal() {
        cy.get('#toTerminal').type('4001-Terminal 4001 Test Erik')
        cy.contains('span', '4001').click({ force: true })
        cy.contains('4001-Terminal 4001 Test Erik')
        return this
    }

    filtroMododeGeracaoManual() {
        cy.get('#voucherType').click({ force: true })
        cy.get('.ant-select-item-option-content').contains('manual').click({ force: true })
        componente.validaStatusAusente('auto')
        return this
    }

    filtroMododeGeracaoAuto() {
        cy.get('#voucherType').click({ force: true })
        cy.get('.ant-select-item-option-content').contains('auto').click({ force: true })
        componente.validaStatusAusente('manual')
        return this
    }

    filtroStatusExpirado() {
        cy.get('#isProcessed').click({ force: true })
        cy.get('.ant-select-item-option-content').contains('Expirado').click({ force: true })
        componente
            .validaStatusAusente('Usado')
            .validaStatusAusente('Sem uso')
            .validaStatusAusente('Bloqueado')
        return this
    }

    filtroStatusBloqueado() {
        cy.get('#isProcessed').click({ force: true })
        cy.get('.ant-select-item-option-content').contains('Bloqueado').click({ force: true })
        componente
            .validaStatusAusente('Usado')
            .validaStatusAusente('Sem uso')
            .validaStatusAusente('Expirado')
        return this
    }

    filtroStatusSemUso() {
        cy.get('#isProcessed').click({ force: true })
        cy.get('.ant-select-item-option-content').contains('Sem uso').click({ force: true })
        componente
            .validaStatusAusente('Usado')
            .validaStatusAusente('Expirado')
            .validaStatusAusente('Bloqueado')
        return this
    }

    filtroStatusUsado() {
        cy.get('#isProcessed').click({ force: true })
        cy.get('.ant-select-item-option-content').contains('Usado').click({ force: true })
        componente
            .validaStatusAusente('Expirado')
            .validaStatusAusente('Sem uso')
            .validaStatusAusente('Bloqueado')
        return this
    }

    botaoVisualizarGeracaoAuto() {
        cy.get('#mediaId').type('703-2c99c10d')
        componente
            .clicaBotaoVisualizar()
            .validaTexto('Valor recebido')
    }

    botaoVisualizarGeracaoManual() {
        cy.get('#mediaId').type('702-8662073')
        componente
            .clicaBotaoVisualizar()
            .validaTexto('Valor recebido')
    }

    botaoLimpaFiltro() {

        cy.get('#mediaId').type('Testando limpar filtro')
        componente
            .limpaFiltro()
        cy.get('#mediaId').should('have.text', '')
        return this
    }
}
export default new ListaDeVouchersPage