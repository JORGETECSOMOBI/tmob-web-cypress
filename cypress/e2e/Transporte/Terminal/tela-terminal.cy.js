import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
<<<<<<< HEAD
import terminal from "../../../pages/Transporte/TerminalPage"
=======
import terminal from "../../../pages/Transporte/Terminal/TerminalPage"
>>>>>>> 8008ab4d4b57842f31632335a444713d0f355b2e
import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'

describe('Testando as funcionalidades da tela "Terminal"', () => {

    beforeEach(() => {
<<<<<<< HEAD
        login
        .go()
        .signin()
        home
        .transporte()
=======
        login.go()
            .signin()
        home.transporte()
>>>>>>> 8008ab4d4b57842f31632335a444713d0f355b2e
        componente
            .selecionaLinguagem('PT')
    })

    it('Pesquisa pelo terminal', () => {
        terminal
            .pesquisarTerminal('ANCHIETA')
            .validaResultadoDaPesquisaTerminal('228 - MCC ANCHIETA')
    })

    it('Clicar em fechar tudo', () => {
        terminal
            .clicarEmFecharTudo()
    })

    it('Clicar em mostrar deletados', () => {
        terminal
            .clicarEmMostrarDeletados()
    })

    it('Clicar em mostrar apenas os teminais associados', () => {
        terminal
            .clicarEmMostrarTerminaisAssociados()
    })

    it('Clicar em limpar filtros', () => {
        terminal
            .clicarEmLimparfiltros()
    })

    it('Clicar em recarregar', () => {
        terminal
            .clicarEmRecarregar()
    })

    it('Clicar em ações', () => {
        terminal
            .clicarEmAcoes()
    })
})