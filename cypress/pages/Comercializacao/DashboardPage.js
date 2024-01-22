import login from '../Login/LoginPage'
import home from '../Home/HomePage'
import componente from '../ComponentesPadrao/ComponentesPadraoPage'

class DashboardPage {

    beforeDashboard() {
        login.go()
        login.signin()
        home.comercializacao()
        componente
            .selecionaIdioma('PT')
    }

    filtroPorPeriodo() {
        cy.get('.ant-picker-input-active > input').click({ force: true })
        cy.get('.ant-picker-presets').contains('Trimestre').click({ force: true })
        return this
    }

    filtroporRedeDeVendas() {
        cy.get('#rc_select_2').type('Rede Autopass', { force: true }).wait(1000).type(`{enter}`)
        return this
    }
}
export default new DashboardPage