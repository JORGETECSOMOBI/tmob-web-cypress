class TeminalPage {

    clicarEmCriarTerminal() {
        cy.contains('Criar terminal').click({ force: true })
        return this
    }

    pesquisarTerminal(codigoOuDescricao) {
        cy.get('.ant-input').type(codigoOuDescricao)
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

    escreveNumeroTerminal(numero) {
        cy.get('#code').type(numero, { force: true })
        return this
    }
}
export default new TeminalPage