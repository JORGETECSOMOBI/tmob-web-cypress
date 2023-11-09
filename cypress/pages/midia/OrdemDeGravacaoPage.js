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

    acessaPaginaOrdemgravação() {
        componente.clicaBotao('Ordem de gravação')
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
        cy.get(':nth-child(4) > .ant-select > .ant-select-selector').click()
        cy.get('[title]').contains(status).click({ force: true })
        cy.get('[data-row-key]').contains(status).should('have.text', status)
        return this
    }

    filtroStatusProcessando() {
        const status = 'Processando'
        const status2 = ' Processando'
        cy.get(':nth-child(4) > .ant-select > .ant-select-selector').click()
        cy.get('[title]').contains(status).click({ force: true })
        cy.get('[data-row-key]').contains(status2).should('have.text', status2)
        return this
    }

    filtroStatusPausado() {
        const status = 'Pausado'
        cy.get(':nth-child(4) > .ant-select > .ant-select-selector').click()
        cy.get('[title]').contains(status).click({ force: true })
        cy.get('[data-row-key]').contains(status).should('have.text', status)
        return this
    }

    filtroStatusErro() {
        const status = 'Erro'
        cy.get(':nth-child(4) > .ant-select > .ant-select-selector').click()
        cy.get('[title]').contains(status).click({ force: true })
        cy.get('[data-row-key]').contains(status).should('have.text', status)
        return this
    }

    filtroStatusProcessado() {
        const status = 'Processado'
        cy.get(':nth-child(4) > .ant-select > .ant-select-selector').click()
        cy.get('[title]').contains(status).click({ force: true })
        cy.get('[data-row-key]').contains(status).should('have.text', status)
        return this
    }

    filtroStatusCancelado() {
        const status = 'Cancelado'
        cy.get(':nth-child(4) > .ant-select > .ant-select-selector').click()
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
            .validatexto('Detalhes')
        return this
    }
}
export default new OrdemDeGravacaoPage