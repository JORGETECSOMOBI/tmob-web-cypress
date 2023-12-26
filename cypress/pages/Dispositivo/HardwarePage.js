import login from '../Login/LoginPage'
import home from '../Home/HomePage'
import componente from '../ComponentesPadrao/ComponentesPadraoPage'
import firmware from '../../pages/Dispositivo/FirmwarePage'
import faker from 'faker-br'

class HardwarePage {

    beforeHardware() {
        login.go()
        login.signin()
        home.dispositivos()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('Hardware')
        return this
    }

    pesquisandoPorSerial() {
        this.escreveSerial('2431130')
        componente.validaPesquisaTitle('2431130')
        return this
    }

    pesquisandoDeviceAtm() {
        this.pesquisaPorTipoDevice('atm')
        return this
    }

    pesquisandoDevicePerso() {
        this.pesquisaPorTipoDevice('perso')
        return this
    }

    pesquisandoDevicePos() {
        this.pesquisaPorTipoDevice('pos')
        return this
    }

    pesquisandoDeviceStationhub() {
        this.pesquisaPorTipoDevice('stationHub')
        return this
    }

    pesquisandoDeviceToten() {
        this.pesquisaPorTipoDevice('atm')
        return this
    }

    pesquisandoDeviceValidator() {
        this.pesquisaPorTipoDevice('atm')
        return this
    }

    pesquisandoHardware() {
        this.pesquisaPorTipoHardware('TSG800')
        return this
    }

    escreveSerial(serial) {
        cy.get('#hardwareSerial').type(serial)
        return this
    }

    pesquisaPorTipoDevice(device) {
        cy.get('#deviceType').click()
        cy.get('.ant-select-item-option-content').contains(device).click()
        cy.get('.ant-table-cell').should('contain', device)
        return this
    }

    pesquisaPorTipoHardware(hardware) {
        cy.get('#dvcHardwareType').type(hardware)
        cy.get('.ant-select-item-option-content').contains(hardware).click()
        cy.get('.ant-table-cell').should('contain', hardware)
        return this
    }

    pesquisandoPorFiltroAtivo() {
        componente
            .selecionaStatus('Ativo')
            .validaStatusAusente('Inativo')
        return this
    }

    pesquisandoPorFiltroInativo() {
        componente
            .selecionaStatus('Inativo')
            .validaStatusAusente('Ativo')
        return this
    }

    pesquisandoPorFiltroExpirado() {
        componente
            .selecionaStatus('Expirado')
            .validaStatusAusente('Ativo')
        return this
    }

    botaoVisualizar() {
        componente
            .clicaBotaoHomeVisualizar()
            .validaTexto('Detalhes')
        return this
    }

    botaoNovoHardware() {
        componente
            .clicaBotao('Novo hardware')
            .validaTexto('Preencha os campos abaixo para o cadastro do hardware')
        return this
    }

    escreveSerial() {
        cy.get('#hardwareSerial').type(faker.random.number())
        return this
    }

    dataEspiracao(data) {
        cy.get('#expirationDate').click().type(data).type(`{enter}`)
        return this
    }

    selecionaDevice(device) {
        cy.get('#deviceType').click()
        cy.get('.ant-select-item-option-content').contains(device).click()
        return this
    }

    selecionaHardware(hardware) {
        cy.get('#dvcHardwareType').click()
        cy.get('.ant-select-item-option-content').contains(hardware).click()
        return this
    }

    cadastroNovoHardware() {
        componente
            .clicaBotao('Novo hardware')
        this
            .escreveSerial()
            .dataEspiracao('19/12/1963')
            .selecionaDevice('pos')
            .selecionaHardware('v500-1')
        componente
            .selecionaStatus('Ativo')
            .clicaBotaoSalvar()
            .clicaBotaoSim()
        return this
    }
}
export default new HardwarePage