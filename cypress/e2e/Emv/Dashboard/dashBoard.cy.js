import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
import dash from "../../../pages/Emv/DashboardPage"

describe('acessando o emv e Testando a página Dashboard', () => {
    beforeEach(() => {
        login.go()
        login.signin()
        home.tiposDeUso()
        home.emv()
    })

    it('Selecionando um período para pesquisa', () => {
        dash
            .periodoPesquisa()
    })
})