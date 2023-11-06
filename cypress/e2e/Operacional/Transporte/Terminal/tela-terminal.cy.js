
import terminal from "../../../../pages/Transporte/TerminalPage"


describe('Testando as funcionalidades da tela "Terminal"', () => {

    beforeEach(() => {
terminal.beforeTerminal()
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