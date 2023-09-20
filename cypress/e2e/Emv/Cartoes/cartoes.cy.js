import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
import cartoes from "../../../pages/Emv/CartoesPage"
import emvPage from "../../../pages/Emv/EmvPage"
import componente from "../../../pages/ComponentesPadrao/ComponentesPadraoPage"

describe('acessando emv e Testando a página de Cartões', () => {
    beforeEach(() => {
        login.go()
            .signin()
        home.tiposDeUso()
            .emv()
        componente
            .selecionaIdioma('PT')

    })

    it(' pesquisando usando o filtro "Pan Token', () => {
        emvPage
            .cartoes()
        cartoes
            .pesquisaPanToken('534693BEBF33C10D2237')
    })
})