import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'
import url from '../../fixtures/url.json'

class DispositivosPage {

    beforeDispositivo() {
        login.go()
        login.signin()
        home.tiposDeUso()
        home.dispositivos()
        componente
            .validaURL(url.dispositivo)
            .selecionaIdioma('PT')
            .clicaBotao('Dispositivos')
        return this
    }

    pesquisaPorGuidSerial() {
        const guid = '283b323d-21e3-4279-b0cb-13ace0626671'
        cy.get('#thingName').type(guid)
        componente.validatexto('133 Tmob Delmon')
        return this
    }

}
export default new DispositivosPage