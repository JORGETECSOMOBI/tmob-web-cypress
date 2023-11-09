import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'
import mensagem from '../../fixtures/mensagens.json'
import url from '../../fixtures/url.json'
import faker from 'faker-br'

class MidiaHome {
    beforeMidiaHome() {
        login.go()
        login.signin()
        home.tiposDeUso()
        home.midia()
        componente
            .validaURL(url.midia)
            .selecionaIdioma('PT')
    }

    cadastraNovoCartão() {
        componente
            .clicaBotaoNovo()
        midia
            .selecionaUsuarioMidia()
            .selecionaEmissor()
            .selecionaTipoMidiaEnter('VTcomum')
        componente
            .clicaBotaoSalvar()
            .clicaBotaoSim()
            .validaMensagem("Preencha os campos abaixo para o cadastro do cartão")
        return this
    }

    editaCartao() {
        componente
            .clicaBotaoEditar()
        midia
            .selecionaEmissor()
            .selecionaTipoMidia()
        componente
            .selecionaIdioma('PT')
            .clicaBotaoSalvar()
            .clicaBotaoSim()
            .validaMensagem(mensagem.criaCartaoMidiaSucesso)
        return this
    }


    pesquisarMidiaId(midiaId) {
        cy.get('#search', { force: true }).type(midiaId, { force: true })
        cy.get('.ant-table-row > :nth-child(1)', { force: true }).should('have.text', midiaId)
        return this
    }

    pesquisarMidiaNome() {
        const nome = 'Maria'
        cy.get('#search').type(nome)
        return this
    }

    pesquisaFiltroStatusProcessado() {
        this
            .pesquisaMidiaPorStatus('Processado')
            .validaStatusMidiaAusente('Inativo, Hotlist, Pendente')
        return this
    }

    pesquisaFiltroStatusInativo() {
        this.pesquisaMidiaPorStatus('Inativo')
            .validaStatusMidiaAusente('Processado, Hotlist, Pendente')
        return this
    }

    pesquisaFiltroStatusPendente() {
        this
            .pesquisaMidiaPorStatus('Pendente')
            .validaStatusMidiaAusente('Inativo, Hotlist, Processado')
        return this
    }

    pesquisaFiltroStatusHotlist() {
        this.pesquisaMidiaPorStatus('Hotlist')
            .validaStatusMidiaAusente('Inativo, Processado, Pendente')
        return this
    }

    funcionalidadeNovo() {
        componente
            .clicaBotaoNovo()
            .validaMensagem("Preencha os campos abaixo para o cadastro do cartão")
        return this
    }

    funcionalidadeVisualizar() {
        componente.clicaBotaoVisualizar()
        return this
    }

    funcionalidadeEditar() {
        componente.clicaBotaoEditar()
        return this
    }

    pesquisaMidiaPorStatus(status) {
        cy.get('#rc_select_4').click({ force: true })
        cy.wait(1000)
        cy.contains(status, { force: true }).click({ force: true })
        return this
    }


    validaStatusMidiaAusente(status, status1, status2) {
        cy.get('[style="flex-direction: row;"] > .ant-layout', { force: true })
            .should('not.contain', status, status1, status2)
        return this
    }

    pesquisaPorTipoDeCartao() {
        const cartao = 'VTComum'
        cy.get(':nth-child(2) > .ant-select > .ant-select-selector', { force: true }).click({ force: true })
        cy.get('.ant-select-item-option-content', { force: true }).contains(cartao).click({ force: true })
        return this
    }

    selecionaUsuarioMidia() {
        cy.get('#usrUser').click({ force: true })
        cy.wait(1000)
        cy.get('.ant-select-item-option-content').contains('Bruno').click()
        return this
    }

    selecionaEmissor() {
        cy.get('#issuer').click({ force: true })
        cy.get('.ant-select-item-option-content', { force: true }).eq(2).click({ force: true })
        return this
    }

    selecionaTipoMidia() {
        cy.get('#mediaType', { force: true }).click({ force: true })
        cy.get('.ant-select-item-option-content', { force: true }).eq(3).click({ force: true })
        return this
    }

    selecionaTipoMidiaEnter(tipo) {
        cy.get('#mediaType', { force: true }).type(tipo).type(`{enter}`)
        return this
    }

    selecionaTipoSL3() {
        cy.get('#tagType').click()
        cy.get('.ant-select-item-option-content', { force: true }).eq(3).click({ force: true })
        return this
    }

    selecionaTipoClassic() {
        cy.get('#tagType').click()
        cy.get('.ant-select-item-option-content', { force: true }).eq(2).click({ force: true })
        return this
    }

    selecionaTipoTempo() {
        const tempo = 'Dia'
        cy.get('#limitType', { force: true }).click({ force: true })
        cy.contains(tempo, { force: true }).click({ force: true })
        return this
    }

    selecionaLimiteTempo() {
        const tempo = '5'
        cy.get('#limitUsage', { force: true }).type(tempo, { force: true })
        return this
    }

    limeiteHorario() {
        const hora = '5'
        cy.get('#hourLimit', { force: true }).type(hora, { force: true })
        return this
    }

    limiteDia() {
        const dia = '5'
        cy.get('#dayLimit', { force: true }).type(dia, { force: true })
        return this
    }

    acessalimiteDeUso() {
        cy.contains('Limite de uso', { force: true }).click({ force: true })
        return this
    }

    escreveDescricao() {
        const descricao = faker.name.firstName()
        cy.get('#description', { force: true }).type(descricao, { force: true }).wait(1000)
        return this
    }
}
export default new MidiaHome