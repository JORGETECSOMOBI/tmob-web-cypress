import componente from '../ComponentesPadrao/ComponentesPadraoPage'
import home from '../Home/HomePage'
import login from '../Login/LoginPage'
import faker from 'faker-br'

class PostoAtendimentoPage {

    beforePostosAtendimento() {
        login.go()
            .signin()
        home.usuario()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('Postos de atendimento')
        return this
    }

    criaPostodeAtendimento() {
        const descricao = faker.name.firstName()
        const nome = 'AAAAAA AUTOMAÇÂO'
        const posto = `${nome} ${descricao}`
        componente
            .clicaBotao('Novo')
        this
            .descricao(posto)
            .nome('AAAAAA AUTOMAÇÂO')
            .cep(12903000)
            .numero(2000)
            .complemento('não tem')
            .salvar()
            .cadastrarSim()
            .validaMensagemDesucesso('Posto de atendimento cadastrado com sucesso')
        return this
    }

    editaPostodeAtendimento() {
        componente
            .clicaBotao('Novo')
            .selecionaStatus('Inativo')
        this
            .limpaDescricao()
            .descricao('Teste de inativo')
            .limpaNome()
            .nome('Teste de edição')
            .limpaCep()
            .cep(12903443)
            .numero(2000)
            .complemento('nãotem')
            .salvar()
            .cadastrarSim()
            .validaMensagemDesucesso('Posto de atendimento cadastrado com sucesso')
        return this
    }

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
export default new PostoAtendimentoPage