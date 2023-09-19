import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
import emv from "../../../pages/Emv/EmvPage"
import par from "../../../pages/Emv/ParPage"
import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'
describe('acessando emv e Testando a página Par', () => {
    beforeEach(() => {
        login
            .go()
            .signin()
        home
            .tiposDeUso()
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