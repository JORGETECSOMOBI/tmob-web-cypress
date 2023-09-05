import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
import terminal from "../../../pages/Transporte/Terminal/TerminalPage"

describe('Testando as funcionalidades da tela "Terminal"', () => {

    beforeEach(() => {
        login.go()
        login.signin()
        home.transporte()
    })

    it('Cenário: criando um terminal', () => {
        terminal.clicarEmCriarTerminal()
    })
})