import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'

class OrdemDeGravacaoPage {

    beforeOrdemDegravacao() {
        login.go()
        login.signin()
        home.tiposDeUso()
        home.midia()
        componente
            .selecionaIdioma('PT')
        this.acessaPaginaOrdemgravação()
        return this
    }

    criandoUmaNovaOrdemSingleImediatamente() {
        this
            .novoCadastroOrdemDeGravacao()
            .selecionaTipoDeOrdem('Single')
            .selecionaTipoDeMidiaSingle('52.01.00000002-5')
        componente
            .clicaBotao('Salvar')
        this
            .iniciarOrdemImediatamente()
        componente
            .clicaBotao('Sim')
            .validaTexto('Selecione um dispositivo')
        return this
    }

    criandoUmaNovaOrdemSingleMaistarde() {
        this
            .novoCadastroOrdemDeGravacao()
            .selecionaTipoDeOrdem('Single')
            .selecionaTipoDeMidiaSingle('52.01.00000002-5')
        componente
            .clicaBotao('Salvar')
        cy.wait(1000)
        componente
            .clicaBotao('Sim')
            .validaMensagem('A ordem de gravação foi cadastrada com sucesso')
            .clicaBotao('Visualizar ordens')
            .validaTexto('Novo')
        return this
    }

    criandoUmaNovaOrdemBureauImediatamente() {
        this
            .novoCadastroOrdemDeGravacao()
            .selecionaTipoDeOrdem('Bureau')
            .selecionaTipoDeMidiaBureau('VTComum')
            .selecionaEmissor('Autopass')
            .selecionaStatus('Pendente')
            .quantidadeDeMidias('5')
        componente
            .clicaBotao('Salvar')
        this
            .iniciarOrdemImediatamente()
        componente
            .clicaBotao('Sim')
            .validaTexto('Selecione um dispositivo')
        return this
    }

    criandoUmaNovaOrdemBureauMaisTarde() {
        this
            .novoCadastroOrdemDeGravacao()
            .selecionaTipoDeOrdem('Bureau')
            .selecionaTipoDeMidiaBureau('VTComum')
            .selecionaEmissor('Autopass')
            .selecionaStatus('Pendente')
            .quantidadeDeMidias('5')
        componente
            .clicaBotao('Salvar')
        cy.wait(1000)
        componente
            .clicaBotao('Sim')
            .validaMensagem('A ordem de gravação foi cadastrada com sucesso')
            .clicaBotao('Visualizar ordens')
            .validaTexto('Novo')
        return this
    }

    cancelandoOrdemGravacao() {
        componente.selecionaStatus('Pendente')
        this
            .visualizar()
            .cancelarOrdem()
        componente
            .validaTextoAusente('Cancelar')
        return this
    }

    gravandoOrdemGravacao() {
        componente
            .selecionaStatus('Pendente')
        this
            .visualizar()
            .gravarOrdem()
        return this
    }

    imprimindoOrdemDeGravacao() {
        this
            .visualizar()
        componente
            .clicaBotao('Imprimir')
            .clicaBotaoModal('Download')
        return this
    }

    voltarParahome() {
        this
            .visualizar()
        componente
            .clicaBotao('Voltar')
            .validaTexto('Novo')
        return this
    }

    quantidadeDeMidias(quantidade) {
        cy.get('#selectMedias').type(quantidade, { force: true })
        return this
    }

    selecionaStatus(status) {
        cy.get('#hasPersoOrderDetailError').click({ force: true })
        cy.contains(status).click({ force: true })
        return this
    }

    selecionaEmissor(emissor) {
        cy.get('#issuerCode').click({ force: true })
        cy.contains(emissor).click({ force: true })
        return this
    }

    iniciarOrdemImediatamente() {
        cy.get(':nth-child(2) > .ant-radio-wrapper > .ant-radio > .ant-radio-inner').click({ force: true })
        return this
    }

    iniciarOrdemMaisTarde() {
        cy.get('[style=""] > .ant-radio-wrapper > .ant-radio > .ant-radio-inner').click({ force: true })
        return this
    }


    acessaPaginaOrdemgravação() {
        componente.clicaBotao('Ordem de gravação')
        return this
    }

    selecionaTipoDeOrdem(tipo) {
        cy.get('#type').click()
        cy.contains(tipo).click({ force: true })
        return this
    }

    selecionaTipoDeMidiaSingle(midia) {
        cy.get('#mediaCount').click()
        cy.contains(midia).click({ force: true })
        return this
    }

    selecionaTipoDeMidiaBureau(midia) {
        cy.get('#MedMediaType').click()
        cy.contains(midia).click({ force: true })
        return this
    }

    filtroPorNumeroCartao() {
        const numero = '52.28.00000001-0'
        cy.get('#formatedLogical').type(numero)
        cy.get('[title]').contains(numero).should('have.text', numero)
    }

    filtroTipoDeOrdemBureau() {
        const ordem = 'bureau'
        cy.get('#type').click()
        cy.get('[title]').contains(ordem).click({ force: true })
        cy.get('.ant-table-content').contains(ordem).should('have.text', ordem)
        return this
    }

    filtroTipoDeOrdemExternal() {
        const ordem = 'external'
        cy.get('#type').click()
        cy.get('[title]').contains(ordem).click({ force: true })
        cy.get('.ant-table-content').contains(ordem).should('have.text', ordem)
        return this
    }

    filtroTipoDeOrdemSingle() {
        const ordem = 'single'
        cy.get('#type').click()
        cy.get('[title]').contains(ordem).click({ force: true })
        cy.get('.ant-table-content').contains(ordem).should('have.text', ordem)
        return this
    }

    filtroTipoDeMidia() {
        const tipo = 'VTComum'
        cy.get(':nth-child(3) > .ant-select > .ant-select-selector').click()
        cy.get('[title]').contains(tipo).click({ force: true })
        cy.get('[data-row-key]').contains(tipo).should('have.text', tipo)
        return this
    }

    filtroStatusPendente() {
        const status = 'Pendente'
        cy.get('#isActive').click()
        cy.get('[title]').contains(status).click({ force: true })
        cy.get('[data-row-key]').contains(status).should('have.text', status)
        return this
    }

    filtroStatusProcessando() {
        const status = 'Processando'
        const status2 = ' Processando'
        cy.get('#isActive').click()
        cy.get('[title]').contains(status).click({ force: true })
        cy.get('[data-row-key]').contains(status2).should('have.text', status2)
        return this
    }

    filtroStatusPausado() {
        const status = 'Pausado'
        cy.get('#isActive').click()
        cy.get('[title]').contains(status).click({ force: true })
        cy.get('[data-row-key]').contains(status).should('have.text', status)
        return this
    }

    filtroStatusErro() {
        const status = 'Erro'
        cy.get('#isActive').click()
        cy.get('[title]').contains(status).click({ force: true })
        cy.get('[data-row-key]').contains(status).should('have.text', status)
        return this
    }

    filtroStatusProcessado() {
        const status = 'Processado'
        cy.get('#isActive').click()
        cy.get('[title]').contains(status).click({ force: true })
        cy.get('[data-row-key]').contains(status).should('have.text', status)
        return this
    }

    filtroStatusCancelado() {
        const status = 'Cancelado'
        cy.get('#isActive').click()
        cy.get('[title]').contains(status).click({ force: true })
        cy.get('[data-row-key]').contains(status).should('have.text', status)
        return this
    }

    novoCadastroOrdemDeGravacao() {
        componente
            .clicaBotao('Novo')
            .validaMensagem('Preencha os campos abaixo para o cadastro da ordem de gravação')
        return this
    }

    gravarOrdem() {
        componente
            .clicaBotao('Gravar')
            .clicaBotao('Sim')
            .validaTexto('Selecione um dispositivo')
        return this
    }

    cancelarOrdem() {
        componente
            .clicaBotao('Cancelar')
            .clicaBotaoModal('Sim')
        return this
    }

    visualizar() {
        componente
            .clicaBotao('Visualizar')
            .validaTexto('Detalhes')
        return this
    }

    clicaBotaoGravar() {
        cy.get('.mastermastermediawriteBtn-0-2-125').click()
        return this
    }
}
export default new OrdemDeGravacaoPage