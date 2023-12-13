import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'

class DashboardPage {

    beforeDispositivo() {
        login.go()
        login.signin()
        home.dispositivos()
        componente
            .selecionaIdioma('PT')
    }

    selecionaEmpresa() {
        cy.get('#rc_select_2').click({ force: true })
        cy.get('.ant-select-item-option-content').eq(2).click({ force: true })
        return this
    }

    selecionaMensagem() {
        cy.get('#rc-tabs-0-tab-3').click({ force: true })
    }
}
export default new DashboardPage