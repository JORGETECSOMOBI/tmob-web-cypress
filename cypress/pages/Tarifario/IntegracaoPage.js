import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'

class IntegracaoPage {

    beforeIntegracao() {
        login
            .go()
            .signin()
        home
            .tiposDeUso()
            .tarifario()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('Integração')
        return this
    }

    cadastroIntegracao() {
        componente
            .clicaBotaoNovo()
        return this
    }

    editaIntegracao() {
        componente
            .clicaBotaoEditar()
        return this
    }

    selecionaPorTipoRegular() {
        this.filtroPorTipo('Regular')
        componente.validaPesquisaDataRowKey('Regular')
        return this
    }

    selecionaPorTipoTranferencia() {
        this.filtroPorTipo('Transferência')
        componente.validaPesquisaDataRowKey('Transferência')
        return this
    }

    filtroPorId() {
        componente
            .escreveId('281963')
            .validaPesquisaAntTableRow('281963')
        return this
    }

    filtroPorTipoOrigem(tipoOrigem) {
        cy.get('#toOrigLineId').click()
        cy.get('.ant-select-item-option-content').contains(tipoOrigem).click()
        return this
    }

    filtroPorTipo(tipo) {
        cy.get('#type').click()
        cy.get('.ant-select-item-option-content').contains(tipo).click()
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
            .validaMensagem('Preencha os campos abaixo para o cadastro da integração')
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
            .escreveId("Teste limpar filtro")
            .limpaFiltro()
        cy.get('#id').should('have.text', '')
        return this
    }

    filtrandoPorTipoOrigemTodasAsLinhas() {
        this.filtroPorTipoOrigem('Todas as linhas')
        componente.validaPesquisaDataRowKey('Todas as linhas')
        return this
    }

    filtrandoPorTipoOrigemLinha() {
        this.filtroPorTipoOrigem('Linha')
        componente.validaPesquisaDataRowKey('Linha')
        return this
    }

    filtrandoPorTipoOrigemGrupoDeLinhas() {
        this.filtroPorTipoOrigem('Grupo de linhas')
        componente.validaPesquisaDataRowKey('Grupo de linhas')
        return this
    }

    filtrandoPorTipoOrigemTodasAsIntegracoes() {
        this.filtroPorTipoOrigem('Todas as integrações')
        componente.validaPesquisaDataRowKey('Todas as integrações')
        return this
    }

    filtrandoPorTipoOrigemIntegracao() {
        this.filtroPorTipoOrigem('Integração')
        componente.validaPesquisaDataRowKey('Integração')
        return this
    }

    filtrandoPorTipoOrigemGrupoDeIntegracoes() {
        this.filtroPorTipoOrigem('Grupo de integrações')
        componente.validaPesquisaDataRowKey('Grupo de integrações')
        return this
    }
}
export default new IntegracaoPage