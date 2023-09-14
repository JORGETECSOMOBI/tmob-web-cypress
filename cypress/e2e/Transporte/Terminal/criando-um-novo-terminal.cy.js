import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
import terminal from "../../../pages/Transporte/Terminal/TerminalPage"
import componente from "../../../pages/ComponentesPadrao/ComponentesPadraoPage"

describe('Testando as funcionalidades da tela "Terminal"', () => {

    beforeEach(() => {
        login.go()
            .signin()
        home.transporte()
        componente
            .selecionaLinguagem('PT')
    })

    it('Criando um terminal', () => {
        terminal
            .clicarEmCriarTerminal()
        componente
            .selecionaOperadora('Operadora Autopass')
        terminal
            .escreveNumeroTerminal('1500')
            .selecionaGrupoterminal('ANCHIETA')
            .selecionaCalendarioOperacional('Teste Augusto calendario')
        componente
            .escreveDescricao('Blá, Blá, Blá, Blá, Blá, Blá, Blá, Blá, Blá, ')
            .selecionaStatus('Inativo')
    })
})