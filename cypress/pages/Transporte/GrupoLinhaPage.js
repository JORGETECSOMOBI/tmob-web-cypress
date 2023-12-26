import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'
import mensagem from '../../fixtures/mensagens.json'
import faker from 'faker-br'

class GrupoLinhaPage {

    beforeGrupoLinha() {
        login.go()
            .signin()
        home.transporte()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('Grupo de linha')
        return this
    }

    criaGrupoDeLinhaEmLote() {
        componente
            .clicaBotao('Novo')
            .escreveDescricao(faker.name.firstName())
            .selecionaStatus('Inativo')
        this
            .selecionaTodasLinhas2()
            .incluiLinhas()
        componente
            .clicaBotao('Proximo')
            .clicaBotao('+ Integrar Sistema')
        this
            .selecionaSistema('TOP-Mercury')
            .escreveIdExterno('33')
            .clicaBotao('Salvar')
        componente
            .clicaBotaoModal('Sim')
            .validaMensagem(mensagem.cadastraGrupoDeLinhaSucesso)
        return this
    }

    desabilitaLinha() {
        componente
            .escreveDescricao('313')
            .clicaBotao('Editar')
            .limpaDescricao()
            .escreveDescricao(faker.name.lastName())
            .selecionaStatus('Inativo')
        this
            .escreveLinhaNomeId0('54170')
            .selecionaTodasLinhas1()
            .excluiLinhas()
            .validaExclusaoDeLinha('L09 - RINCÃO')
        componente
            .clicaBotao('Proximo')
            .clicaBotao('Salvar')
            .clicaBotaoModal('Sim')
            .validaMensagem(mensagem.editaGrupoLinha)
        return this
    }

    habilitaLinha() {
        componente
            .escreveDescricao('313')
            .clicaBotao('Editar')
            .limpaDescricao()
            .escreveDescricao(faker.name.lastName())
            .selecionaStatus('Inativo')
        this
            .escreveLinhaNomeId0('54170')
            .selecionaTodasLinhas0()
            .incluiLinhas()
            .validaInclusaoDeLinha('L09 - RINCÃO')
        componente
            .clicaBotao('Proximo')
            .clicaBotao('Salvar')
            .clicaBotaoModal('Sim')
            .validaMensagem(mensagem.editaGrupoLinha)
        return this
    }

    testandoFiltroId() {
        componente
        .escreveDescricao('313')
        .validaId('313')
        return this
    }

    testandoStatusAtivo() {
        componente
        .selecionaStatus('Ativo')
        .validaStatusAtivo()
        return this
    }

    testandostatusInativo() {
        componente
            .selecionaStatus('Inativo')
            .validaStatusInativo()
        return this
    }

    testandoVisualizar() {
        componente
        .escreveDescricao('313')
        .clicaBotao('Visualizar')
        .validaTexto('ID #313')
        return this
    }

    testandoEditar() {
        componente
        .escreveDescricao('313')
        .clicaBotao('Editar')
        .validaTexto('ID #313')
        return this
    }

    testandoLimparfiltros() {
        componente
            .escreveDescricao('313')
            .selecionaStatus('Inativo')
            .clicaBotao('Limpar filtro')
            .validaFuncaolimparFiltro()
        return this
    }

    escreveLinhaNomeId0(idNome) {
        cy.get('.ant-transfer-list-body .ant-input').eq(0).type(idNome, { force: true })
        return this
    }

    escreveIdExterno(id) {
        cy.get('#externalId').type(id)
        return this
    }

    escreveLinhaNomeId01(idNome) {
        cy.get('.ant-transfer-list-body .ant-input').eq(1).type(idNome, { force: true })
        return this
    }

    selecionaSistema(sistema) {
        cy.get('#toSystem', { force: true }).click({ force: true })
        cy.contains(sistema).click()
        return this
    }

    selecionaTodasLinhas0() {
        cy.get('.ant-transfer-list-header .ant-checkbox-input', { force: true }).eq(0).wait(15000).click({ force: true })
        return this
    }

    selecionaTodasLinhas1() {
        cy.get('.ant-transfer-list-header .ant-checkbox-input', { force: true }).eq(1).wait(5000).click({ force: true })
        return this
    }

    selecionaTodasLinhas2() {
        cy.get(':nth-child(1) > .ant-transfer-list-header > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input', { force: true }).wait(5000).click({ force: true })
        return this
    }

    incluiLinhas() {
        cy.get('.ant-transfer-operation > :nth-child(1)').wait(2000).click({ force: true })
        return this
    }

    excluiLinhas() {
        cy.get('.ant-transfer-operation > :nth-child(2)').wait(2000).click({ force: true })
        return this
    }

    validaExclusaoDeLinha(linha) {
        cy.get(':nth-child(1) > .ant-transfer-list-body').contains(linha).should('have.text', linha)
        return this
    }

    validaInclusaoDeLinha(linha) {
        cy.get(':nth-child(3) > .ant-transfer-list-body').wait(1000).contains(linha).should('have.text', linha)
        return this
    }

    clicaBotao(label) {
        cy.get('.steps-action').eq(0).contains(label).click({ force: true })
        return this
    }
}
export default new GrupoLinhaPage