import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
import emv from "../../../pages/Emv/EmvPage"
import par from "../../../pages/Emv/ParPage"
import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'
<<<<<<< HEAD
describe('acessando emv e Testando a página Par', () => {
    beforeEach(() => {
        login
            .go()
            .signin()
        home
            .tiposDeUso()
=======

describe('acessando emv e Testando a página Par', () => {
    beforeEach(() => {
        login.go()
            .signin()
        home.tiposDeUso()
>>>>>>> 8008ab4d4b57842f31632335a444713d0f355b2e
            .emv()
        componente
            .selecionaLinguagem('PT')
    })

    it(' pesquisando usando como filtro o número do "Par', () => {
        emv
            .par()
        par
            .pesquisaNumeroPar()
    })
})