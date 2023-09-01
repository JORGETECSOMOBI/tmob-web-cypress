class NovoPostoAtendimentoPage {

    novo() {
        cy.get('span.anticon > .ant-btn > :nth-child(2)').click()
        return this
    }

    descricao(descricao) {
        cy.get('#name').type(descricao)
        return this
    }

    limpaDescricao() {
        cy.get('#name').clear({ force: true })
        return this
    }

    nome(nome) {
        cy.get('#shortName').type(nome, { force: true })
        return this
    }

    limpaNome() {
        cy.get('#shortName').clear({ force: true })
        return this
    }

    cep(cep) {
        cy.get('#zipCode').type(cep, { force: true })
        return this
    }

    limpaCep() {
        cy.get('#zipCode').clear({ force: true })
        return this
    }

    numero(numero) {
        cy.get('#number').type(numero)
        return this
    }

    limpaNumero() {
        cy.get('#number').clear({ force: true })
        return this
    }

    complemento(complemento) {
        cy.get('#complement').type(complemento)
        return this
    }

    limpaComplemento() {
        cy.get('#complement').clear({ force: true })
        return this
    }

    salvar() {
        cy.contains('Salvar').click({ force: true })
        return this
    }

    cadastrarSim() {
        cy.get('.ant-modal-confirm-btns > .ant-btn-primary').click({ force: true })
        return this
    }

    validaMensagemDesucesso(texto) {
        cy.get('.ant-result-title').should('have.text', texto)
        return this
    }
}
export default new NovoPostoAtendimentoPage