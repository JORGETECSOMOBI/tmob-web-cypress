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
            .selecionaDirecaoOrigem('Indo')
            .destino('Todas as linhas')
            .selecionaDirecaoDoDestino('Indo')
            .filtroPorTipo('Regular')
            .tempoMinutos('13')
            .valor('100')
        componente
            .clicaBotaoSalvar()
            .clicaBotao('Sim')
            .validaMensagem('A integração foi registrada com sucesso')
        return this
    }

    cadastroIntegracaoGrupoDeLinhas() {
        componente
            .clicaBotaoNovo()
        this
            .origem('Grupo de linhas')
            .selecionaDirecaoOrigem('Indo')
            .selecionaOrigemGrupoDeLinhas('AAAAA AUTOMAÇÃO')
            .destino('Todas as linhas')
            .selecionaDirecaoDoDestino('Indo')
            .filtroPorTipo('Regular')
            .tempoMinutos('13')
            .valor('100')
        componente
            .clicaBotaoSalvar()
            .clicaBotao('Sim')
            .validaMensagem('A integração foi registrada com sucesso')
        return this
    }

    cadastroIntegracaoLinha() {
        componente
            .clicaBotaoNovo()
        this
            .origem('Linha')
            .selecionaDirecaoOrigem('Indo')
            .selecionaOrigemLinha('AAAA AUTOMAÇÃO LINHA')
            .destino('Linha')
            .selecionaDirecaoDoDestinoLinha('Todas')
            .selecionaLinhaDodestino('miracatibos')
            .filtroPorTipo('Regular')
            .tempoMinutos('13')
            .valor('100')
            .maxIntegracao('5')
        componente
            .clicaBotaoSalvar()
            .clicaBotao('Sim')
            .validaMensagem('A integração foi registrada com sucesso')
            return this
    }

    cadastroIntegracaoTodasIntegracoes() {
        componente
            .clicaBotaoNovo()
        this
            .origem('Todas as integrações')
            .selecionaDirecaoOrigem('Indo')
            .destino('Linha')
            .selecionaDirecaoDoDestinoLinha('Indo')
            .selecionaLinhaDodestino('miracatibos')
            .filtroPorTipo('Regular')
            .tempoMinutos('13')
            .valor('100')
            .maxIntegracao('5')
        componente
            .clicaBotaoSalvar()
            .clicaBotao('Sim')
            .validaMensagem('A integração foi registrada com sucesso')
        return this
    }

    cadastroIntegracaoGrupoDeIntegracoes() {
        componente
            .clicaBotaoNovo()
        this
            .origem('Grupo de integrações')
            .selecionaDirecaoOrigem('Indo')
            .destino('Linha')
            .selecionaDirecaoDoDestinoLinha('Indo')
            .selecionaLinhaDodestino('miracatibos')
            .filtroPorTipo('Regular')
            .tempoMinutos('13')
            .valor('100')
            .maxIntegracao('5')
        componente
            .clicaBotaoSalvar()
            .clicaBotao('Sim')
            .validaMensagem('A integração foi registrada com sucesso')
        return this
    }

    cadastroIntegracaoUnica() {
        componente
            .clicaBotaoNovo()
        this
            .origem('Integração única')
            .selecionaDirecaoOrigem('Indo')
            .destino('Linha')
            .selecionaDirecaoDoDestinoLinha('Indo')
            .selecionaLinhaDodestino('miracatibos')
            .filtroPorTipo('Regular')
            .tempoMinutos('13')
            .valor('100')
            .maxIntegracao('5')
        componente
            .clicaBotaoSalvar()
            .clicaBotao('Sim')
            .validaMensagem('A integração foi registrada com sucesso')
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

    selecionaDirecaoDoDestino(destino) {
        cy.get('#destDirection').click({ force: true })
        cy.get('.ant-select-item-option-content').eq(6).contains(destino).click({ force: true })
        return this
    }

    selecionaDirecaoDoDestinoLinha(destino) {
        cy.get('#destDirection').click({ force: true })
        cy.get('.ant-select-item-option-content').eq(6).should('have.text', destino).click()
        return this
    }

    selecionaOrigemGrupoDeLinhas(origem) {
        cy.get('#farOrigIntegrationLineGroupId').type(origem, { force: true },).type(`{enter}`)
        return this
    }

    selecionaOrigemLinha(linha) {
        cy.get('#toOrigLineId', { force: true }).type(linha, { force: true }).type(`{enter}`)
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

    selecionaLinhaDodestino(linha) {
        cy.get('#toDestLineId').type(linha, { force: true }).type(`{enter}`)
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

    maxIntegracao(max) {
        cy.get('#maxIntegrationCount').type(max, { force: true })
        return this
    }

    limpaMaxIntegracao() {
        cy.get('#maxIntegrationCount').clear({ force: true })
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

    filtrandoPorDestino() {
        this.filtrandoPorTipoDestinoLinha()
        cy.get('#rc_select_14').type('AAAA AUTOMAÇÃO LINHA').wait(2000).type(`{enter}`)
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
        this
            .origem('Todas as integrações')
            .limpaMaxIntegracao()
            .maxIntegracao('20')
        componente
            .clicaBotaoSalvar()
            .clicaBotao('Sim')
            .validaMensagem('A integração foi editada com sucesso')
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