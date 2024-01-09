import login from '../Login/LoginPage'
import home from '../Home/HomePage'
import componente from '../ComponentesPadrao/ComponentesPadraoPage'

class CorrelacaoTarifariaPage {

    beforeCorrelacaoTarifaria() {
        login
            .go()
            .signin()
        home
            .tiposDeUso()
            .tarifario()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('Correlação tarifária')
        return this
    }

    cadastroCorrelacaoTarifaria() {
        componente
        .clicaBotaoNovo()
        return this
    }

    editaCorrelacaoTarifaria() {
        componente
        .escreveId('41')
        .clicaBotaoEditar()
        return this
    }

    selecionaTipo(tipo) {
        cy.get('#type').click()
        cy.get('.ant-select-item-option-content').contains(tipo).click()
        return this
    }
    
    selecionaSubtipo(subtipo) {
        cy.get('#rc_select_12').click()
        cy.get('.ant-select-item-option-content').contains(subtipo).click()
        return this
    }

    selecionaCorrelacaoSubtipo(correlacao) {
        cy.get('#rc_select_13').type(correlacao).type(`{enter}`)
        return this
    }

    dataInicial(data) {
        cy.get('#FarCorrelationPercent_0_startDate').type(data).type(`{enter}`)
        return this
    }

    porcentagem(porcentagem) {
        cy.get('#FarCorrelationPercent_0_percent').type(porcentagem).type(`{enter}`)
        return this
    }
         
    filtroPorId() {
        componente
            .escreveId('21')
            .validaPesquisaAntTableRow('21')
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
            .validaMensagem('Preencha os campos abaixo para o cadastro da correlação tarifária')
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
            .escreveId('Testando limpar filtro')
            .limpaFiltro()
        return this
    }
}
export default new CorrelacaoTarifariaPage