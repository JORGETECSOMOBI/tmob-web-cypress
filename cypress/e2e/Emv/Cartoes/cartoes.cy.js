import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
import cartoes from "../../../pages/Emv/CartoesPage"
import emvPage from "../../../pages/Emv/EmvPage"

describe('acessando o site Tmob', () => {
    beforeEach(() => {
        login.go()
        login.signin()
        home.tiposDeUso()
        home.emv()
    })

    it('Cenário: pesquizando usando o filtro "Pan Token', () => {
        emvPage.cartoes()
        cartoes.pesquisaPanToken()
    })
})