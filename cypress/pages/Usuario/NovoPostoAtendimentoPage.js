class NovoPostoAtendimentoPage {

    novo() {
        cy.get('span.anticon > .ant-btn > :nth-child(2)').click()
        return this
    }

    descricao() {
        cy.get('#name').type("Teste automático")
        return this
    }

    nome() {
        cy.get('#shortName').type("Teste automático", {force: true})
        return this
    }

    cep() {
        cy.get('#zipCode').type("12903000", {force: true})
        return this
    }

    numero() {
        cy.get('#number').type('2000')
        return this
    }

    complemento(){
        cy.get('#complement').type('não tem')
        return this
    }

    salvar() {
        cy.get('.mastermasteruserspaceButton-0-2-93 > span').click({force: true})
        return this
    }

    cadastrarSim() {
        cy.get('.ant-modal-confirm-btns > .ant-btn-primary').click()
        return this
    }

    validaMensagemDesucesso() {
        cy.get('.ant-result-title').should('have.text', 'Posto de atendimento cadastrado com sucesso')
        return this
    }



}
export default new NovoPostoAtendimentoPage