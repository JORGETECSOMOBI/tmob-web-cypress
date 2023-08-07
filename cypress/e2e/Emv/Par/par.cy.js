import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
import emv from "../../../pages/Emv/EmvPage"
import par from "../../../pages/Emv/ParPage"

describe('acessando emv e testando a página Par', () => {
    beforeEach(() => {
        login.go()
        login.signin()
        home.tiposDeUso()
        home.emv()
    })

    it('Cenário: pesquisando usando como filtro o número do "Par', () => {
        emv.par()
        par.pesquisaNumeroPar()
    })
})