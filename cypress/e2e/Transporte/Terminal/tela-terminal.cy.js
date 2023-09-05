import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
import terminal from "../../../pages/Transporte/Terminal/TerminalPage"

describe('Testando as funcionalidades da tela "Terminal"', () => {

    beforeEach(() => {
        login.go()
        login.signin()
        home.transporte()
    })

    it('Cenário: pesquisa terminal', () => {
        terminal.pesquisarTerminal('ANCHIETA')
        terminal.validaResultadoDaPesquisaTerminal('228 - MCC ANCHIETA')
    })

    it('Cenário: clicar em ver mais', () => {
        terminal.clicarEmVerMais()
    })

    it('Cenário: clicar em fechar tudo', () => {
        terminal.clicarEmFecharTudo()
    })

    it('Cenário: clicar em mostrar deletados', () => {
        terminal.clicarEmMostrarDeletados()
    })

    it('Cenário: clicar em mostrar apenas os teminais associados', () => {
        terminal.clicarEmMostrarTerminaisAssociados()
    })

    it('Cenário: clicar em limpar filtros', () => {
        terminal.clicarEmLimparfiltros()
    })

    it('Cenário: clicar em recarregar', () => {
        terminal.clicarEmRecarregar()
    })

    it('Cenário: clicar em ações', () => {
        terminal.clicarEmAcoes()
    })
})