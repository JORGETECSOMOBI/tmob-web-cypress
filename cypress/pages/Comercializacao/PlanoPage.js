import login from '../Login/LoginPage'
import home from '../Home/HomePage'
import componente from '../ComponentesPadrao/ComponentesPadraoPage'

class PlanoPage {

    beforePlano() {
        login.go()
        login.signin()
        home.comercializacao()
        componente
            .clicaBotao('Plano')
            .selecionaIdioma('PT')
        return this
    }

    filtroPorModoDePagamento() {
        cy.get('#id').type('Dinheiro', { force: true }).type(`{enter}`, { force: true })
        componente.validaPesquisaDataRowKey('Dinheiro')
        return this
    }

    filtroPorFechamento() {
        cy.get('#closeDay').type('10', { force: true }).type(`{enter}`, { force: true })
        componente.validaPesquisaDataRowKey('10')
        return this
    }

    filtroPorVencimento() {
        cy.get('#dueDay').type('8', { force: true }).type(`{enter}`, { force: true })
        componente.validaPesquisaDataRowKey('5')
        return this
    }

    filtroPorId() {
        componente
            .escreveDescricao('3')
            .validaPesquisaDataRowKey('3')
        return this
    }

    filtroPorDescricao() {
        componente
            .escreveDescricao('AAAA  PLANO AUTOMAÇÃO')
        cy.get('[data-row-key="3"] > :nth-child(2)').contains('AAAA PLANO AUTOMAÇÃO')
        return this
    }

    filtroPorStatusAtivo() {
        componente
            .selecionaStatus('Ativo')
            .validaStatusAtivo()
            .validaStatusAusente('Inativo')
        return this
    }

    filtroPorStatusInativo() {
        componente
            .selecionaStatus('Inativo')
            .validaStatusInativo()
            .validaStatusAusente('Ativo')
        return this
    }

    botaoNovo() {
        componente
            .clicaBotaoNovo()
            .validaMensagem('Novo')
        return this
    }

    botaoVisualizar() {
        componente
            .clicaBotaoVisualizar()
            .validaTexto('Detalhes')
        return this
    }

    botaoEditar() {
        componente
            .clicaBotaoEditar()
            .validaTexto('Editar')
        return this
    }

    botaoLimpaFiltro() {
        componente
            .escreveDescricao('Testando limpar filtro')
            .limpaFiltro()
        return this
    }
}
export default new PlanoPage