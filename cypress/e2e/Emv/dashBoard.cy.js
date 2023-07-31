import login from "../../pages/LoginPage"
import home from "../../pages/HomePage"

describe('acessando o site Tmob', () => {
    beforeEach(() => {
        login.go()
        login.signin()
        home.tiposDeUso()
    })

    it('acessando dashboard abrindo default em emv', () => {       
        home.emv()
    })
})