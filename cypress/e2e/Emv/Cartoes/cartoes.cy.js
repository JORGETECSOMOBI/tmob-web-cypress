import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
import cartoes from "../../../pages/Emv/CartoesPage"
import emvPage from "../../../pages/Emv/EmvPage"
<<<<<<< HEAD
import componente from "../../../pages/ComponentesPadrao/ComponentesPadraoPage"

describe('acessando emv e Testando a página de Cartões', () => {
    beforeEach(() => {
        login
            .go()
            .signin()
        home
            .tiposDeUso()
=======
import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'

describe('acessando emv e Testando a página de Cartões', () => {
    beforeEach(() => {
        login.go()
            .signin()
        home.tiposDeUso()
>>>>>>> 8008ab4d4b57842f31632335a444713d0f355b2e
            .emv()
        componente
            .selecionaLinguagem('PT')
    })

    it(' pesquisando usando o filtro "Pan Token', () => {
        emvPage
            .cartoes()
        cartoes
            .pesquisaPanToken('534693BEBF33C10D2237')
    })
})