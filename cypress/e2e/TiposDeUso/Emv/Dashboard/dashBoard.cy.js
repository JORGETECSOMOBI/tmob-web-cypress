import login from "../../../../pages/Login/LoginPage"
import home from "../../../../pages/Home/HomePage"
import dash from "../../../../pages/Emv/DashboardPage"
import componente from '../../../../pages/ComponentesPadrao/ComponentesPadraoPage'

describe('acessando o emv e Testando a página Dashboard', () => {
    beforeEach(() => {

        login
            .go()
            .signin()
        home
            .tiposDeUso()
            .emv()
        componente
            .selecionaIdioma('PT')
    })

    it('Selecionando um período para pesquisa', () => {
        dash
            .periodoPesquisa('60 dias')
    })
})