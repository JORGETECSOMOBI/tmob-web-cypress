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
        const guid = '1badfe6d-4f1c-421d-af84-0ba40408d32e'
        cy.get('#thingName').type(guid)
        componente.validatexto('133 Tmob Delmon')
        return this
    }

}
export default new DispositivosPage