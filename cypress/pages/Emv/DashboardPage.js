import login from "../../../../pages/Login/LoginPage"
import home from "../../../../pages/Home/HomePage"
import componente from '../../../../pages/ComponentesPadrao/ComponentesPadraoPage'

class DashboardPage {
    beforeDashboard() {
        login
        .go()
        .signin()
    home
        .tiposDeUso()
        .emv()
    componente
        .selecionaIdioma('PT')
    }

    periodoPesquisa(dias) {
        cy.get('.ant-picker-input-active > input').click({ force: true })
        cy.get('.ant-picker-presets > ul > ').contains(dias).click({ force: true })
        return this
    }
}
export default new DashboardPage