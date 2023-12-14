import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'
import usuario from '../../pages/Atendimento/UsuarioPage'
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
            .selecionaEmissor('Autopass')
            .codigo('444')
            .maximoDeIntegracoes('8')
            .grupoDerelatorio('TOP - Funcional')
            .displayValidador('Automação')
        usuario
            .selecionaTipoUsuario('Estudante')
        componente
            .clicaBotaoProximo()
            .escreveDescricao('AAAA Automação Valorado')
            .clicaBotaoProximo()
        this
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
            .selecionaTipoDeProduto('Gratuidade')
            .selecionaEmissor('Top')
            .codigo('666')
            .maximoDeIntegracoes('8')
            .grupoDerelatorio('TOP - Funcional')
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
            .validaDescriçãoTitle('AAAAAA PRODUTO TRANSPORTE EDIÇÃO')
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

    maximoDeIntegracoes(maximo) {
        cy.get('#maxIntegrationCounter').type(maximo, { force: true })
        return this
    }

    codigo(codigo) {
        cy.get('#code').type(codigo)
        return this
    }

    grupoDerelatorio(grupo) {
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
            .validaDescriçãoTitle('AAAAAA PRODUTO TRANSPORTE EDIÇÃO')
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
            .validatexto('Novo')
        return this
    }

    testandoBotãoEditar() {
        componente
            .clicaBotaoEditar()
            .validatexto('Editar')
        return this
    }

    testandoBotãoVisualizar() {
        componente
            .clicaBotaoHomeVisualizar()
            .validatexto('Detalhes')
        return this
    }
}
export default new ProdutoDetransportePge