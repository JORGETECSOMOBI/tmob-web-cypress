import login from "../../pages/Login/LoginPage"
import home from "../../pages/Home/HomePage"
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'

class ParPage {

    beforePar() {
        login
        .go()
        .signin()
    home
        .tiposDeUso()
        .emv()
    componente
        .selecionaIdioma('PT')
        .clicaBotao('Par')
    }

    pesquisaNumeroPar() {
        cy.get('#par').type('50010CDJI5MPRIKKFO11ZQT9FTMDV')
        return this
    }

    filtroPorPeriodo() {
        componente.selecionaPeriodoDeTempo('Ano')
        return this
    }

    filtroPorHotlistBloqueado() {
        this.filtroStatusHotlist('Bloqueado')
        componente.validaStatusAusente('Desbloqueado')
        return this
    }

    filtroPorHotlistDesbloqueado() {
        this.filtroStatusHotlist('Desbloqueado')
        componente.validaStatusAusente('Bloqueado')
        return this
    }

    filtroPorStatusAtivo() {
        componente
        .selecionaStatus('Ativo')
        .validaStatusAusente('Inativo')
        return this
    }

    filtroPorStatusInativo() {
        componente
        .selecionaStatus('Inativo')
        .validaStatusAusente('Ativo')
        return this
    }

    botaoVisualizar() {
        componente
        .clicaBotao('Visualizar')
        .validaTexto('Detalhes')
        return this
    }

    filtroStatusHotlist(status) {
        cy.get(':nth-child(3) > .ant-select > .ant-select-selector').click()
        cy.contains(status).click()
        return this
    }
}
export default new ParPage