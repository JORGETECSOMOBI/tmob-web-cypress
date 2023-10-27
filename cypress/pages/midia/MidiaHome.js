import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'
import url from '../../fixtures/url.json'
import faker from 'faker-br'

class MidiaHome {
    beforeMidiaHome() {
        login.go()
        login.signin()
        home.tiposDeUso()
        home.midia()
        componente
            .validaURL(url.midia)
            .selecionaIdioma('PT')
    }

    pesquisarMidiaId(midiaId) {
        cy.get('#search', { force: true }).type(midiaId, { force: true })
        cy.get('.ant-table-row > :nth-child(1)', { force: true }).should('have.text', midiaId)
        return this
    }

    pesquisarMidiaNome(midiaNome) {
        cy.get('#search').type(midiaNome)
        return this
    }

    pesquisaMidiaPorStatus(status) {
        cy.get('#rc_select_4').click({ force: true })
        cy.get('.rc-virtual-list-holder-inner', { force: true }).contains(status, { force: true }).click({ force: true })
        
        return this
    }

    validaStatusMidiaAusente(status, status1, status2) {
        cy.get('[style="flex-direction: row;"] > .ant-layout', { force: true })
            .should('not.contain', status, status1, status2)
        return this
    }

    pesquisaPorTipoDeCartao(cartao) {
        cy.get(':nth-child(2) > .ant-select > .ant-select-selector', { force: true }).click({ force: true })
        cy.get('.ant-select-item-option-content', { force: true }).contains(cartao).click({ force: true })
    }

    selecionaUsuarioMidia() {
        cy.get('#usrUser').click({ force: true })
        cy.wait(1000)
        cy.get('.ant-form > :nth-child(1)').contains('23').click({ force: true })
        return this
    }

    selecionaEmissor() {
        cy.get('#issuer').click({ force: true })
        cy.get('.ant-select-item-option-content', { force: true }).eq(1).click({ force: true })
        return this
    }

    selecionaTipoMidia() {
        cy.get('#mediaType').click({ force: true })
        cy.get('.ant-select-item-option-content', { force: true }).eq(1).click({ force: true })
        return this
    }

    selecionaTipoSL3() {
        cy.get('#tagType').click()
        cy.get('.ant-select-item-option-content', { force: true }).eq(3).click({ force: true })
        return this
    }

    selecionaTipoClassic() {
        cy.get('#tagType').click()
        cy.get('.ant-select-item-option-content', { force: true }).eq(2).click({ force: true })
        return this
    }

    selecionaTipoTempo() {
        const tempo = 'Dia'
        cy.get('#limitType', { force: true }).click({ force: true })
        cy.contains(tempo, { force: true }).click({ force: true })
        return this
    }

    selecionaLimiteTempo() {
        const tempo = '5'
        cy.get('#limitUsage', { force: true }).type(tempo, { force: true })
        return this
    }

    limeiteHorario() {
        const hora = '5'
        cy.get('#hourLimit', { force: true }).type(hora, { force: true })
        return this
    }

    limiteDia() {
        const dia = '5'
        cy.get('#dayLimit', { force: true }).type(dia, { force: true })
        return this
    }

    acessalimiteDeUso() {
        cy.contains('Limite de uso', { force: true }).click({ force: true })
        return this
    }

    escreveDescricao() {
        const descricao = faker.name.firstName()
        cy.get('#description', { force: true }).type(descricao, { force: true }).wait(1000)
        return this
    }
}
export default new MidiaHome