import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import linha from '../../pages/Transporte/GrupoLinhaPage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'
import mensagem from '../../fixtures/mensagens.json'
import faker from 'faker-br'

class OperadoraPage {

    beforeOperadora() {
        login.go()
            .signin()
        home.transporte()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('Operadora')
        return this
    }

    criandoOperadora() {
        componente
            .clicaBotao('Novo')
            .escreveNomeId(faker.name.lastName())
        this
            .selecionaConsorcio('teste')
            .selecionaGrupoOperadora('Grupo de Operadora')
            .selecionaSindicato('Autopass Sindicato')
        componente
            .clicaBotao('Proximo')
            .clicaBotao('Salvar')
            .clicaBotaoModal('Sim')
            .validaMensagem(mensagem.cadastroOperadoraSucesso)
        return this
    }

    editandoOperadora() {
        componente
            .escreveNomeId('146')
            .clicaBotao('Editar')
            .limpaNome()
            .escreveNomeId(faker.name.firstName())
        this
            .selecionaConsorcio('teste 123reasde')
            .selecionaGrupoOperadora('Grupo de Operadora')
            .selecionaSindicato('Autopass Sindicato')
        componente
            .clicaBotao('Proximo')
            .clicaBotao('+ Integrar Sistema')
        linha
            .selecionaSistema('TOP-Mercury')
        this
            .clicaBotaoSalvar()
        componente
            .clicaBotaoModal('Sim')
            .validaMensagem('A operadora foi editada com sucesso')
        return this
    }

    escreveIdExterno() {
        const id = faker.random.number()
        cy.get('#externalId').type(id)
        return this
    }

    selecionaConsorcio(consorcio) {
        cy.get('#associationId').click({ force: true })
        cy.contains(consorcio).click({ force: true })
        return this
    }

    selecionaGrupoOperadora(operadora) {
        cy.get('#operatorGroupId').click({ force: true })
        cy.contains(operadora).click({ force: true })
        return this
    }

    selecionaSindicato(sindicato) {
        cy.get('#syndicateId').click({ force: true })
        cy.contains(sindicato).click({ force: true })
        return this
    }

    escreveIdLinha(id) {
        cy.get(':nth-child(1) > .ant-transfer-list-body > .ant-transfer-list-body-search-wrapper > ').type(id)
        cy.get('.ant-input-affix-wrapper ant-transfer-list-search css-12jzuas').click()
    }

    clicaBotaoSalvar() {
        cy.get('.steps-action').contains('Salvar').click({ force: true })
        return this
    }
}
export default new OperadoraPage
