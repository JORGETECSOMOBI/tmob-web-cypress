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

    cadastroIntegracaoTodasasLinhas() {
        componente
            .clicaBotaoNovo()
        this
            .origem('Todas as linhas')
            .selecionaDirecaoOrigem('Todas')
            .destino('Grupo de linhas')
            .selecionaDirecaoDoDestino('Indo')  
            //.selecionaTipo('Reguslar')
        //     .tempoMinutos('13')
        //     .valor('100')
        //     .selecionaDirecaoDoDestino('Todas')
        // componente
        //     .clicaBotaoSalvar()
        //     .clicaBotao('Sim')
        // this.selecionaDirecaoDoDestino('Retornando')
        //.validaMensagem('A integração foi registrada com sucesso')
        return this
    }

    cadastroIntegracaoGrupoDeLinhas() {
        componente
            .clicaBotaoNovo()
        this
            .origem('Grupo de linhas')
    }

    cadastroIntegracaoLinha() {
        componente
            .clicaBotaoNovo()
        this
            .origem('Linha')
    }

    cadastroIntegracaoTodasIntegracoes() {
        componente
            .clicaBotaoNovo()
        this
            .origem('Todas as integrações')
        return this
    }

    cadastroIntegracaoGrupoDeIntegracoes() {
        componente
            .clicaBotaoNovo()
        this
            .origem('Grupo de integrações')
        return this
    }

    cadastroIntegracaoUnica() {
        componente
            .clicaBotaoNovo()
        this
            .origem('Integração única')
        return this
    }

    origem(origem) {
        cy.get('#origin').contains(origem).click()
        return this
    }

    selecionaDirecaoOrigem(direcao) {
        cy.get('#origDirection').click({ force: true })
        cy.get('.ant-select-item-option-content').contains(direcao).click({ force: true })
        return this
    }

    selecionaDirecaoDoDestino(direcaodestino) {
        cy.get('#destDirection', { force: true }).click({ force: true })
        cy.get('[title]').contains(direcaodestino).click({ force: true })
        return this
    }

    selecionaOrigemGrupoDeLinhas() {
        cy.get('#farOrigIntegrationLineGroupId')
        return this
    }

    selecionaOrigemLinha() {
        cy.get('#toOrigLineId')
        return this
    }

    selecionaOrigemGrupoDeIntegraçoes() {
        cy.get('#farOrigIntegrationGroupId')
        return this
    }

    selecionaOrigemintegracao() {
        cy.get('#farOrigIntegrationId')
        return this
    }

    destino(destino) {
        cy.get('#destination').contains(destino).click({ force: true })
        return this
    }

    selecionaGrupoDeLinhaDodestino() {
        cy.get('#farDestIntegrationLineGroupId').click({ force: true })
        cy.get('.ant-select-item-option-content').contains('').click({ force: true })
        return this
    }

    selecionaLinhaDodestino() {
        cy.get('#toDestLineId').click()
        cy.get('.ant-select-item-option-content').contains('').click({ force: true })
        return this
    }

    tempoMinutos(minuto) {
        cy.get('#minutes').type(minuto)
        return this
    }

    selecionaTipoDestino(tipo) {
        cy.get('#type').click()
        cy.get('.ant-select-item-option-content').contains(tipo).click({ force: true })
        return this
    }

    valor(valor) {
        cy.get('#farRuleValue').type(valor).type(`{enter}`)
        return this
    }

    grupoDeTempo(grupo) {
        cy.get('#maxIntegrationCount').click()
        cy.get('.ant-select-item-option-content').contains(grupo).click({ force: true })
        return this
    }

    maxIntegracao() {
        cy.get('#maxIntegrationCount').type('5')
        return this
    }

    filtrandoPorTipoDeOrigemTodasAsLinhas() {
        this.filtroTipoDeOrigem('Todas as linhas')
        return this
    }

    filtrandoPorTipoDeOrigemLinha() {
        this.filtroTipoDeOrigem('Linha')
        return this
    }

    filtrandoPorTipodeOrigemGrupoDeLinhas() {
        this.filtroTipoDeOrigem('Grupo de linhas')
        return this
    }

    filtrandoPorTipoDeOrigemTodasIntegracoes() {
        this.filtroTipoDeOrigem('Todas as integrações')
        return this
    }

    filtrandoPorTipoDeOrigemIntegracao() {
        this.filtroTipoDeOrigem('Integração')
        return this
    }

    filtrandoPorTipoDeOrigemGrupoDeIntegracoes() {
        this.filtroTipoDeOrigem('Grupo de integrações')
        return this
    }

    filtrandoPorOrigemTodasAsLinhas() {
        this.filtroOrigem('Todas as linhas')
        return this
    }

    filtrandoPorOrigemLinha() {
        this.filtroOrigem('Linha')
        return this
    }

    filtrandoPorOrigemGrupoDeLinhas() {
        this.filtroOrigem('Grupo de linhas')
        return this
    }

    filtrandoPorOrigemTodasIntegracoes() {
        this.filtroOrigem('Todas as integrações')
        return this
    }

    filtrandoPorOrigemIntegracao() {
        this.filtroOrigem('Integração')
        return this
    }

    filtrandoPorOrigemGrupoDeIntegracoes() {
        this.filtroOrigem('Grupo de integrações')
        return this
    }

    filtrandoPorTipoDestinoTodasAsLinhas() {
        this.filtroTipoDestino('Todas as linhas')
        return this
    }

    filtrandoPorTipoDestinoLinha() {
        this.filtroTipoDestino('Linha')
        return this
    }

    filtrandoPorTipoDestinoGrupoDeLinhas() {
        this.filtroTipoDestino('Grupo de linhas')
        return this
    }

    filtrandoPorDestinoTodasAsLinhas() {
        this.filtroDestino('Todas as linhas')
        return this
    }

    filtrandoPorDestinoLinha() {
        this.filtroDestino('Linha')
        return this
    }

    filtrandoPorDestinoGrupoDeLinhas() {
        this.filtroDestino('Grupo de linhas')
        return this
    }

    filtroTipoDeOrigem(tipoOrigem) {
        cy.get('#toOrigLineId').click()
        cy.get('.ant-select-item-option-content').contains(tipoOrigem).click({ force: true })
        return this
    }

    filtroOrigem(origem) {
        cy.get('#toOrigLineId').click({ force: true })
        cy.get('.ant-select-item-option-content').contains(origem, { force: true }).click({ force: true })
        return this
    }

    filtroDestino(destino) {
        cy.get('#rc_select_7').click()
        cy.get('.ant-select-item-option-content').contains(destino).click({ force: true })
        return this
    }

    filtroTipoDestino(tipoDestino) {
        cy.get('#toDestLineId').click()
        cy.get('.ant-select-item-option-content').contains(tipoDestino).click({ force: true })
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
            .escreveId('21')
            .validaPesquisaAntTableRow('21')
        return this
    }

    selecionaTipo() {
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
            .escreveId('Testando limpar filtros')
            .limpaFiltro()
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