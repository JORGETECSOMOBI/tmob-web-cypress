import login from '../Login/LoginPage'
import home from '../Home/HomePage'
import componente from '../ComponentesPadrao/ComponentesPadraoPage'

class ArquivosOperacionaisPage {

    beforeArquivosOperacionais() {
        login.go()
        login.signin()
        home.comercializacao()
        componente
            .clicaBotao('Arquivos Operacionais')
            .selecionaIdioma('PT')
    }

    filtroPoId() {
        componente
            .pesquisaId('244')
            .validaPesquisaAntTableCell('244')
        return this
    }

    filtroPoNomeArquivo() {
        componente
            .pesquisaId('1707232227015_op.enc')
            .validaPesquisaTitle('1707232227015_op.enc')
        return this
    }

    filtroPoTagAtual() {
        cy.get('#status').click({ force: true })
        cy.contains('Atual').click({ force: true })
        componente
            .validaPesquisaTitle('Atual')
        return this
    }

    filtroPoTagPrincipal() {
        cy.get('#status').click({ force: true })
        cy.contains('Principal').click({ force: true })
        componente
            .validaPesquisaTitle('Principal')
        return this
    }

    filtroPoTagAlt() {
        cy.get('#status').click({ force: true })
        cy.contains('Alt').click({ force: true })
        componente
            .validaPesquisaTitle('Alt')
        return this
    }

    forcarGeracao() {
        componente
            .clicaBotao('Forçar geração')
            .clicaBotaoModal('Sim')
        return this
    }

    limpaFiltro() {
        componente
            .escreveId('123123')
            .limpaFiltro()
        return this
    }
}
export default new ArquivosOperacionaisPage