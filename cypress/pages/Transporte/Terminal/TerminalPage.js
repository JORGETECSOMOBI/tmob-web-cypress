class TeminalPage{

   clicarEmCriarTerminal() {
        cy.contains('Criar terminal').click()
        return this
    }

    pesquisarTerminal(codigoOuDescricao) {
        cy.get('.ant-input').type(codigoOuDescricao)
        return this
    }

   clicarEmVerMais() {
        cy.contains('Ver mais').click()
        return this
    }

   clicarEmFecharTudo() {
        cy.contains('Fechar tudo').click()
        return this
    }

   clicarEmMostrarTerminaisAssociados() {
        cy.get(':nth-child(2) > .ant-checkbox > .ant-checkbox-input').click()
        return this
    }

   clicarEmMostrarDeletados() {
        cy.get(':nth-child(1) > .ant-checkbox > .ant-checkbox-input').click()
        return this
    }

   clicarEmLimparfiltros() {
        cy.contains('Limpar filtro').click()
        return this
    }

   clicarEmAcoes() {
        cy.get(':nth-child(2) > .ant-row > :nth-child(1) > .ant-btn').click({force: true})
        return this
    }

   clicarEmRecarregar() {
        cy.get('span.anticon > .anticon').click()
        return this
    }

    validaResultadoDaPesquisaTerminal(terminal) {
        cy.get('.ant-row-space-between > :nth-child(1) > :nth-child(4)').should('have.text', terminal)
        return this
    }
}
export default new TeminalPage