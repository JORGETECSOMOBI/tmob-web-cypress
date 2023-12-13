import terminal from "../../../../pages/Transporte/TerminalPage"

describe('Criando um novo terminal', () => {

    beforeEach(() => {
        terminal.beforeTerminal()
    })

    it('Criando um terminal', () => {
        terminal.criandoUmTerminal()
    })
})