import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import faker from 'faker-br'

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

    selecionaUsuarioMidia() {
        cy.get('#usrUser').click()
        cy.get('.ant-select-item-option-content').eq(0).click()
        return this
    }

    selecionaEmissor() {
        cy.get('#issuer').click()
        cy.get('.ant-select-item-option-content').eq(0).click()
        return this
    }

    selecionaTipoMidia() {
        cy.get('#mediaType').click()
        cy.get('.ant-select-item-option-content').contains('VTComum').click({ force: true })
        return this
    }

    selecionaTipoSL3() {
        cy.get('#tagType').click()
        cy.get('.ant-select-item-option-content').eq(1).click({ force: true })
        return this
    }

    selecionaTipoClassic() {
        cy.get('#tagType').click()
        cy.get('.ant-select-item-option-content').eq(2).click({ force: true })
        return this
    }

    selecionaTipoTempo() {
        const tempo = 'Dia'
        cy.get('#limitType').click()
        cy.contains(tempo).click()
        return this
    }

    selecionaLimiteTempo() {
        const tempo = '5'
        cy.get('#limitUsage').type(tempo)
        return this
    }

    acessalimiteDeUso() {
        cy.contains('Limite de uso').click()
        return this
    }

    escreveDescricao() {
        const descricao = faker.name.firstName()
        cy.get('#description').type(descricao, { force: true }).wait(1000)
        return this
    }

    limiteHorario() {
        
    }

}
export default new MidiaHome