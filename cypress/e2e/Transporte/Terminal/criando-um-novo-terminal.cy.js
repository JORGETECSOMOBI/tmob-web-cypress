import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
import terminal from "../../../pages/Transporte/TerminalPage"
import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'

describe('Criendo um novo terminal', () => {

    beforeEach(() => {
        login
            .go()
            .signin()
        home
            .transporte()
        componente
            .selecionaLinguagem('PT')
    })

    it('Criando um terminal', () => {
        componente
            .clicaBotao('Criar terminal')
    })
})