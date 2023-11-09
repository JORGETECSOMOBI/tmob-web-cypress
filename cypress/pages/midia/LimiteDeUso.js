import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'
import faker from 'faker-br'
import url from '../../fixtures/url.json'

class LimiteDeUsoPage {

    beforeLimiteUso() {
        login.go()
        login.signin()
        home.tiposDeUso()
        home.midia()
        componente
            .validaURL(url.midia)
            .clicaBotao('Limite de uso')
            .selecionaIdioma('PT')
    }

    cadastraLimiteDeUso() {
        const nome = `Geraldo`
        const sobrenome = faker.name.findName()
        componente
            .clicaBotaoNovo()
            .escreveDescricao(`${nome} ${sobrenome}`)
        this.selecionaTipocartao('Classic')
            .selecionaTipoTempo('Dia')
            .determinaLimiteDeUso('5')
        componente.clicaBotao('Salvar')
            .clicaBotaoModal('Sim')
            .validaMensagem('Concluido')
        return this
    }

    editaLimiteDeUso() {
        componente
            .escreveDescricao('Geraldo')
            .clicaBotaoEditar()
            .limpaDescricao()
            .escreveDescricao('Caetano')
        this.selecionaTipocartao()
            .selecionaTipoTempo()
            .determinaLimiteDeUso()
        componente.clicaBotao('Salvar')
            .clicaBotaoModal('Sim')
            .validaMensagem('Limite de uso foi editado com sucesso!')
        return this
    }

    selecionaTipocartao() {
        const tipo = 'SL3'
        cy.get('.ant-select-selection-search-input').eq(1).click({ force: true })
        cy.contains(tipo).click({ force: true })
        return this
    }

    selecionaTipoTempo() {
        const tempo = 'Semana'
        cy.get('.ant-select-selection-search-input').eq(2).click({ force: true })
        cy.contains(tempo).click({ force: true })
        return this
    }

    determinaLimiteDeUso() {
        const limite = '25'
        cy.get('#limitUsage').type(limite)
        return this
    }

    pesquisaPorId() {
        const id = '126'
        componente.escreveDescricao(id)
        this.validaId(id)
        return this
    }


    pesquisaPorDescricao() {
        const nome = 'Geraldo'
        componente
            .escreveDescricao(nome)
        this.validaDescricao(nome)
        return this
    }

    pesquisaPorStatus() {
        const status = 'Ativo'
        componente
            .selecionaStatus(status)
            .validaStatusAtivo()
        return this
    }

    visualizar() {
        const id = '126'
        const texto = 'ID #126'
        componente
            .escreveDescricao(id)
            .clicaBotao('Visualizar')
            .validatexto(texto)
        return this
    }

    editar() {
        const mensagem = 'Mensagem Importante!Você não pode editar esse limite de uso completamente'
        componente
            .clicaBotaoEditar()
            .validaMensagem(mensagem)
        return this
    }

    novo() {
        componente
            .clicaBotaoNovo()
        return this
    }

    validaId(id) {
        cy.get('.ant-table-row > :nth-child(1)').contains(id).should('have.text', id)
        return this
    }

    validaDescricao(nome) {
        cy.get('.ant-table-row > .ant-table-cell-ellipsis').contains(nome).should('have.text', nome)
        return this
    }
}
export default new LimiteDeUsoPage