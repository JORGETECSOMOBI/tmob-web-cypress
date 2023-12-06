import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'
import url from '../../fixtures/url.json'

class GrupoTerminaisPage {

    beforeGrupoTerminais() {
        login.go()
            .signin()
        home.transporte()
        componente
            .validaURL(url.transporte)
            .selecionaIdioma('PT')
            .clicaBotao('Grupo de terminais')
        return this
    }

    botaoEditaGrupo() {
        cy.get('[title="Editar um grupo de terminal"]').eq(1).click({ force: true })
        return this
    }

    botaoAdicionaItem() {
        cy.get('[title="Adicionar um grupo de terminal"]').eq(1).click({ force: true })
        return this
    }

    botaoExcluiGrupo() {
        cy.get('[title="Remover um grupo de terminal"]').eq(1).click({ force: true })
        cy.wait(3000)
        return this
    }
    
    botaoExcluiAgupador() {
        cy.get(':nth-child(5) > .ant-btn').eq(1).click({ force: true })
        return this
    }

    botaoMais() {
        cy.get(':nth-child(1) > ant-tree-switcher>.anticon . svg').eq(1).click({ force: true })
        return this
    }

    pesquisarNoGrupo(item) {
        cy.get('.ant-input-affix-wrapper > .ant-input', { force: true }).type(item, { force: true })
        return this
    }

    selecionaTipoInstalação(instalacao) {
        cy.get('#facilityType').click({ force: true })
        cy.contains(instalacao, { force: true }).click({ force: true })
        return this
    }

    selecionaGrupoTerminais(grupo) {
        cy.get('.ant-select-selector', { force: true }).eq(3).click({ force: true }).wait(5000)
        cy.contains(grupo, { force: true }).should('have.text', grupo).click({ force: true })
        return this
    }

    selecionaCalendarioOperacional(calendario) {
        cy.get('.ant-select-selector', { force: true }).eq(4).click({ force: true })
        cy.contains(calendario).click({ force: true })
        return this
    }

    stepRegrassDeProduto() {
        cy.get('#rc-tabs-1-tab-product').click()
        return this
    }

    restringir() {
        cy.get('.ant-radio-wrapper-checked > .ant-radio > .ant-radio-inner').click({ force: true })
        return this
    }

    permitir() {
        cy.get('#isRestriction > :nth-child(1) > :nth-child(2)').click({ force: true })
        return this
    }

    tipoRestricao(tipo) {
        cy.get('#createProductRestriction_0_type').click({ force: true })
        cy.contains(tipo).click({ force: true })
        return this
    }

    subTipoRestricao(subtipo) {
        cy.get('#createProductRestriction_0_subType').click({ force: true })
        cy.contains(subtipo).click({ force: true })
        return this
    }

    excluirestrição() {
        cy.get(':nth-child(2) > .ant-row-middle > :nth-child(5)').click({ force: true })
        return this
    }

    restricaoFuncao() {
        cy.get('#rc-tabs-1-tab-functionRestriction').click({ force: true })
        return this
    }

    adicionaRestricao() {
        cy.get(':nth-child(3) > .ant-btn > :nth-child(2)').click({ force: true })
        return this
    }

    selecionaFuncao(funcao) {
        cy.get('#createFunctionRestriction_0_type').click()
        cy.contains(funcao, { force: true }).click({ force: true })
        return this
    }

    remotamenteOperavel() {
        cy.get('.ant-switch-handle').click({ force: true })
        return this
    }

    propagarAlteracao() {
        cy.get('.ant-modal-content').click({ force: true })
        return this
    }
}
export default new GrupoTerminaisPage