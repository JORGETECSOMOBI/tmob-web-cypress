import login from "../../pages/Login/LoginPage"
import home from "../../pages/Home/HomePage"
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'
import faker from 'faker-br'

class TeminalPage {

    beforeTerminal() {
        login
            .go()
            .signin()
        home
            .transporte()
        componente
            .selecionaIdioma('PT')
        return this
    }

    criandoUmTerminal() {
        this
            .clicarEmCriarTerminal()
        componente
            .selecionaOperadora('Operadora Autopass')
        this
            .escreveNumeroTerminal()
            .selecionaGrupoterminal('Automação Teste')
            .selecionaCalendarioOperacional('Teste Augusto calendario')
        componente
            .escreveDescricao(faker.name.findName())
            .selecionaStatus('Inativo')
            .clicaBotao('OK')
            .validaMensagem('Terminal criado com sucesso')
        return this
    }

    clicarEmCriarTerminal() {
        cy.contains('Criar terminal').click({ force: true })
        return this
    }

    pesquisarTerminal() {
        cy.get('.ant-input').type('ANCHIETA')
        this.validaResultadoDaPesquisaTerminal('228 - MCC ANCHIETA')
        return this
    }

    clicarEmVerMais() {
        cy.contains('Ver mais').click({ force: true })
        return this
    }

    clicarEmFecharTudo() {
        cy.contains('Fechar tudo').click({ force: true })
        return this
    }

    clicarEmMostrarTerminaisAssociados() {
        cy.get(':nth-child(2) > .ant-checkbox > .ant-checkbox-input').click({ force: true })
        return this
    }

    clicarEmMostrarDeletados() {
        cy.get(':nth-child(1) > .ant-checkbox > .ant-checkbox-input').click({ force: true })
        return this
    }

    clicarEmLimparfiltros() {
        cy.contains('Limpar filtro').click({ force: true })
        return this
    }

    clicarEmAcoes() {
        cy.get(':nth-child(2) > .ant-row > :nth-child(1) > .ant-btn').click({ force: true })
        return this
    }

    clicarEmRecarregar() {
        cy.get('span.anticon > .anticon').click({ force: true })
        return this
    }

    validaResultadoDaPesquisaTerminal(terminal) {
        cy.get('.ant-row-space-between > :nth-child(1) > :nth-child(4)').should('have.text', terminal)
        return this
    }

    selecionaGrupoterminal(grupo) {
        cy.get('#toTerminalGroup', { force: true }).click({ force: true }).wait(2000)
        cy.contains(grupo, { force: true }).wait(2000).click({ force: true })

        return this
    }

    selecionaCalendarioOperacional(cadastro) {
        cy.get('#toOperationScheduleId').click({ force: true })
        cy.contains(cadastro).click()
        return this
    }

    escreveNumeroTerminal() {
        const numero = faker.random.number({ min: 1, max: 10000 })
        cy.get('#code').type(numero, { force: true })
        return this
    }

}
export default new TeminalPage