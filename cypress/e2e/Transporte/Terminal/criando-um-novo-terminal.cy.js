import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
<<<<<<< HEAD
import terminal from "../../../pages/Transporte/TerminalPage"
import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'
=======
import terminal from "../../../pages/Transporte/Terminal/TerminalPage"
import componente from "../../../pages/ComponentesPadrao/ComponentesPadraoPage"
>>>>>>> 8008ab4d4b57842f31632335a444713d0f355b2e

describe('Criendo um novo terminal', () => {

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

    it('Criando um terminal', () => {
<<<<<<< HEAD
        componente
            .clicaBotao('Criar terminal')
=======
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
>>>>>>> 8008ab4d4b57842f31632335a444713d0f355b2e
    })
})