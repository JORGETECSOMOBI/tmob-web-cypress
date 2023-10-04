import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
import terminal from "../../../pages/Transporte/TerminalPage"
import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'

describe('Criando um novo terminal', () => {

    beforeEach(() => {
        login
            .go()
            .signin()
        home
            .transporte()
        componente
            .selecionaIdioma('PT')
    })

    it('Criando um terminal', () => {
        componente
            .clicaBotao('Criar terminal')
        terminal
            .clicarEmCriarTerminal()
        componente
            .selecionaOperadora('Operadora Autopass')
        terminal
            .escreveNumeroTerminal('1500')
            .selecionaGrupoterminal('teste criação')
            .selecionaCalendarioOperacional('Teste Augusto calendario')
        componente
            .escreveDescricao('Blá, Blá, Blá, Blá, Blá, Blá, Blá, Blá, Blá, ')
            .selecionaStatus('Inativo')
            .clicaBotao('OK')
    })
})