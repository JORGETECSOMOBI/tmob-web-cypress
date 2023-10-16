import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'

class MidiaHome {
    beforeMidiaHome() {
        login.go()
        login.signin()
        home.tiposDeUso()
        home.midia()
    }

    pesquisarMidiaId(midiaId) {
        cy.get('#search').type(midiaId)
        cy.get('.ant-table-row > :nth-child(1)').should('have.text', midiaId)
        return this
    }

    pesquisarMidiaNome(midiaNome) {
        cy.get('#rc_select_3').type(midiaNome)
        cy.get('.ant-select-item-option-content').eq(0).click()
        cy.get('.ant-table-row > :nth-child(2)').should('have.text', midiaNome)
        return this
    }

    pesquisaMidiaPorStatus(status) {
        cy.get('#rc_select_4').click()
        cy.get('.ant-select-item-option-content').contains(status).click()
        return this
    }

    validaStatusMidiaAusente(status, status1, status2) {
        cy.get('[style="flex-direction: row;"] > .ant-layout')
            .should('not.contain', status, status1, status2)
        return this
    }

    pesquisaPorTipoDeCartao(cartao) {
        cy.get(':nth-child(2) > .ant-select > .ant-select-selector').click()
        cy.get('.ant-select-item-option-content').contains(cartao).click()
    }

}
export default new MidiaHome