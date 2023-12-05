import login from "../../../../pages/Login/LoginPage"
import home from "../../../../pages/Home/HomePage"
import emv from "../../../../pages/Emv/EmvPage"
import par from "../../../../pages/Emv/ParPage"
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'

class ParPage {

    beforePar() {
        login
        .go()
        .signin()
    home
        .tiposDeUso()
        .emv()
    componente
        .selecionaIdioma('PT')
        .clicaBotao('Par')
    }

    pesquisaNumeroPar() {
        cy.get('#par').type('50010CDJI5MPRIKKFO11ZQT9FTMDV')
    }
}
export default new ParPage