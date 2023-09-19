import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
import dash from "../../../pages/Emv/DashboardPage"
import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'

describe('acessando o emv e Testando a página Dashboard', () => {
    beforeEach(() => {
<<<<<<< HEAD
        login
            .go()
            .signin()
        home
            .tiposDeUso()
=======
        login.go()
            .signin()
        home.tiposDeUso()
>>>>>>> 8008ab4d4b57842f31632335a444713d0f355b2e
            .emv()
        componente
            .selecionaLinguagem('PT')
    })

    it('Selecionando um período para pesquisa', () => {
        dash
            .periodoPesquisa('60 dias')
    })
})