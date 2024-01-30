import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'
import url from '../../fixtures/url.json'
import faker from 'faker-br'

class ProdutoDetransportePge {
    beforeProdutoDeTrasnporte() {
        login.go()
        login.signin()
        home.tiposDeUso()
        home.midia()
        componente
            .validaURL(url.midia)
            .selecionaIdioma('PT')
            .clicaBotao('Produto de transporte')
        return this
    }

    criandoUmProdutoDeTransporteValorado() {
        componente
            .clicaBotao('Produto de transporte')
            .clicaBotaoNovo()
        this
            .selecionaTipoDeProduto('Valorado')
            .selecionaTipoUsuario('Operador')
            .selecionaEmissor('Teste Augusto Emissor')
            .codigo(faker.random.number())
            .maximoDeIntegracoes('8')
            .selecionaTipoDeChave('Padrão')
            .grupoDeColeta('TOP - Funcional')
            .grupoDeRelatorio('Botoeira')
            .displayValidador('Automação')
        componente
            .escreveDescricao('AAAA Automação Valorado')
            .clicaBotaoProximo()
        this
            .poderDeCompra('Manter tarifa da compra sempre')
            .valorMaximo('100')
            .inicioValidade()
            .selecionaPrioridade(faker.random.number())
        componente
            .clicaBotaoProximo()
        this
            .selecionaLimiteUso('Especial')
            .selecionaGrupoTempo('Augusto')
        componente
            .clicaBotaoProximo()
            .clicaBotaoProximo()
            .clicaBotaoSalvar()
            .clicaBotaoModal('Sim')
        return this
    }

    criandoUmProdutoDeTransporteGratuidade() {
        componente
            .clicaBotaoNovo()
        this
            .selecionaTipoUsuario('Operador')
            .selecionaTipoDeProduto('Gratuidade')
            .selecionaEmissor('Top')
            .codigo('666')
            .maximoDeIntegracoes('8')
            .grupoDeColeta('TOP - Funcional')
            .displayValidador('Automação')
        componente
            .escreveDescricao('AAAA Automação Gratuidade')
        return this
    }

    criandoUmProdutoDeTransporteGratuidadeFuncional() {
        componente
            .clicaBotaoNovo()
        this
            .selecionaTipoDeProduto('Gratuidade funcional')
            .selecionaEmissor('Autopass')
            .codigo('888')
            .maximoDeIntegracoes('8')
            .grupoDerelatorio('TOP - Funcional')
            .displayValidador('Automação')
        componente
            .escreveDescricao('AAAA Automação Gratuidade funcional')
        return this
    }

    criandoUmProdutoDeTransporteEspecialAcompanhante() {
        componente
            .clicaBotaoNovo()
        this
            .selecionaTipoDeProduto('Especial acompanhante')
            .selecionaEmissor('Top')
            .maximoDeIntegracoes('8')
            .grupoDerelatorio('TOP - Funcional')
            .displayValidador('Automação')
        componente
            .escreveDescricao('AAAA Automação Especial acompanhante')
        return this
    }

    editandoUmGrupoDeTransporte() {
        componente
            .escreveDescricao('AAAA')
            .clicaBotaoEditar()
            .limpaDescricao()
            .escreveDescricao('AAAA PRODUTO TRANSPORTE EDITADO')
            .clicaBotaoSalvar()
            .clicaBotaoModal('Sim')
        this
            .clicaBotaoVerProdutos()
        componente
            .escreveDescricao('AAAA PRODUTO TRANSPORTE EDITADO')
            .clicaBotaoEditar()
            .limpaDescricao()
            .escreveDescricao('AAAAAA PRODUTO TRANSPORTE EDIÇÃO')
        componente
            .clicaBotaoSalvar()
            .clicaBotaoModal('Sim')
            .validaMensagem('Produto editado com sucesso')
        this
            .clicaBotaoVerProdutos()
        componente
            .validaPesquisaTitle('AAAAAA PRODUTO TRANSPORTE EDIÇÃO')
        return this
    }

    valorMaximo(valor) {
        cy.get('#maxValue').type(valor, { force: true })
        return this
    }

    poderDeCompra(poder) {
        cy.get('#fareGraceType').click({ force: true })
        cy.get('.ant-select-item-option-content').contains(poder).click({ force: true })
        return this
    }

    grupoDeRelatorio(grupo) {
        cy.get('#medTransitProductReportGroup').click({ force: true })
        cy.get('.ant-select-item-option-content').contains(grupo).click({ force: true })
        return this
    }

    selecionaTipoDeChave(chave) {
        cy.get('#keyType').click({ force: true })
        cy.get('.ant-select-item-option-content').contains(chave).click({ force: true })
        return this
    }

    selecionaTipoDeProduto(produto) {
        cy.contains(produto).click({ force: true })
        return this
    }

    selecionaEmissor(emissor) {
        cy.get('#toIssuerCode').click({ force: true })
        cy.contains(emissor).click({ force: true })
        return this
    }

    selecionaPrioridade(prioridade) {
        cy.get('#priority').type(prioridade).type(`{enter}`)
        return this
    }

    selecionaGrupoTempo(tempo) {
        cy.get('#specialConditions_0_MedTimeGroupRole').type(tempo, { force: true })
        return this
    }

    selecionaLimiteUso(uso) {
        cy.get('#specialConditions_0_MedUseLimitRole').type(uso, { force: true })
        return this
    }

    selecionaTipoUsuario(tipoUsuario) {
        cy.get('.ant-select-selection-overflow').click({ force: true })
        cy.get('.ant-select-item-option-content').contains(tipoUsuario).click({ force: true })
        return this
    }

    maximoDeIntegracoes(maximo) {
        cy.get('#maxIntegrationCounter').type(maximo, { force: true })
        return this
    }

    codigo(codigo) {
        cy.get('#code').type(codigo)
        return this
    }

    grupoDeColeta(grupo) {
        cy.get('#medTransitProductCollectorGroup').click({ force: true })
        cy.contains(grupo).click({ force: true })
        return this
    }

    validaTextoTipoTextoId(texto) {
        cy.get('[data-row-key]').contains(texto).should('have.text', texto)
        return this
    }

    displayValidador(nome) {
        cy.get('#displayName').type(nome)
        return this
    }

    clicaBotaoVerProdutos() {
        cy.get('.ant-btn-primary > a').click({ force: true })
        return this
    }

    testandoFiltroId() {
        componente
            .escreveDescricao('205')
            .validaId('205')
        return this
    }

    testandoFiltroDescricao() {
        componente
            .escreveDescricao('AAAAAA PRODUTO TRANSPORTE EDIÇÃO')
            .validaPesquisaTitle('AAAAAA PRODUTO TRANSPORTE EDIÇÃO')
        return this
    }

    testandoFiltroTipo() {
        this
            .selecionaTipoDeProduto('Serviço de operador')
            .validaTextoTipoTextoId('Serviço de operador')
        return this
    }

    testandoFiltroStatus() {
        componente
            .selecionaStatus('Ativo')
            .validaStatusAtivo()
        return this
    }

    testandoBotãoNovo() {
        componente
            .clicaBotaoNovo()
            .validaTexto('Novo')
        return this
    }

    testandoBotãoEditar() {
        componente
            .clicaBotaoEditar()
            .validaTexto('Editar')
        return this
    }

    testandoBotãoVisualizar() {
        componente
            .clicaBotaoHomeVisualizar()
            .validaTexto('Detalhes')
        return this
    }

    inicioValidade() {
        cy.get('#startDate').click({ force: true }).get('.ant-picker-today-btn').click({ force: true })
        return this
    }
}
export default new ProdutoDetransportePge