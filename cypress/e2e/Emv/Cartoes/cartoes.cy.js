import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
import cartoes from "../../../pages/Emv/CartoesPage"
import emvPage from "../../../pages/Emv/EmvPage"

describe('acessando emv e Testando a página de Cartões', () => {
    beforeEach(() => {
        login.go()
        login.signin()
        home.tiposDeUso()
        home.emv()
    })

    it(' pesquisando usando o filtro "Pan Token', () => {
        emvPage
            .cartoes()
        cartoes
            .pesquisaPanToken('534693BEBF33C10D2237')
    })
})