import login from '../Login/LoginPage'
import home from '../Home/HomePage'
import componente from '../ComponentesPadrao/ComponentesPadraoPage'
import dispositivo from './DispositivosPage'
import faker from 'faker-br'

class FirmwarePage {

    beforeFirmware() {
        login.go()
        login.signin()
        home.dispositivos()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('Firmware')
        return this
    }

    selecionaDeviceAtm() {
        cy.get('#deviceType').click()
        cy.get('.ant-select-item-option-content').contains('Atm').click()
        return this
    }

    selecionaDevicePos() {
        cy.get('#deviceType').click()
        cy.get('.ant-select-item-option-content').contains('Pos').click()
        return this
    }

    selecionaDeviceStationHub() {
        cy.get('#deviceType').click()
        cy.get('.ant-select-item-option-content').contains('StationHub').click()
        return this
    }

    selecionaDeviceValidator() {
        cy.get('#deviceType').click()
        cy.get('.ant-select-item-option-content').contains('Validator').click()
        return this
    }

    cadastroFirmWareAtm() {
        componente
            .clicaBotao('Novo Firmware')
            .escreveNome(faker.name.findName())
        this
            .selecionaDeviceAtm()
            .selecionaHardwareATMat1985_1()
        componente
            .selecionaStatus('Inativo')
            .clicaBotaoSalvar()
            .clicaBotaoSim()
            .validaMensagem('Seu Firmware foi criado com sucesso')
        return this
    }

    cadastroFirmWarePos() {
        componente
            .clicaBotao('Novo Firmware')
            .escreveNome(faker.name.findName())
        this
            .selecionaDevicePos()
            .selecionaHardwarePosTsg800()
        componente
            .selecionaStatus('Inativo')
            .clicaBotaoSalvar()
            .clicaBotaoSim()
            .validaMensagem('Seu Firmware foi criado com sucesso')
        return this
    }

    cadastroFirmWareStationhub() {
        componente
            .clicaBotao('Novo Firmware')
            .escreveNome(faker.name.findName())
        this
            .selecionaDeviceStationHub()
            .selecionaHardwareStationHubst420_1()
        componente
            .selecionaStatus('Inativo')
            .clicaBotaoSalvar()
            .clicaBotaoSim()
            .validaMensagem('Seu Firmware foi criado com sucesso')
        return this
    }

    cadastroFirmWareValidator() {
        componente
            .clicaBotao('Novo Firmware')
            .escreveNome(faker.name.findName())
        this
            .selecionaDeviceValidator()
            .selecionaHardwareValidatorv3695()
        componente
            .selecionaStatus('Inativo')
            .clicaBotaoSalvar()
            .clicaBotaoSim()
            .validaMensagem('Seu Firmware foi criado com sucesso')
        return this
    }

    EditaFirmwareMultiplosHardware() {
        
        componente
            .escreveNome('AAAA')
            .clicaBotao('Editar')
        this
            .selecionaMultiplosHardwares()
        componente
            .selecionaStatus('Inativo')
            .clicaBotaoSalvar()
            .clicaBotaoSim()
            .validaMensagem('Seu firmware foi editado com sucesso')
        return this
    }

    filtroPorNome() {
        componente
            .escreveNome('AAAA FIRMWARE AUTOMAÇÃO')
            .validaPesquisaTitle('AAAA FIRMWARE AUTOMAÇÃO')
        return this
    }

    filtroPorId() {
        componente
            .escreveNome('1094')
            .validaPesquisaDataRowKey('1094')
        return this
    }

    pesquisaPorTipoHardwareATMat1985_1() {
        cy.get('.ant-select-selection-search > #name').type('at1985-1')
        cy.get('.ant-select-item-option-content').contains('at1985-1').click()
        cy.get('.ant-spin-container').should('contain', 'atm')
        cy.get('.ant-spin-container').should('contain', 'at1985-1')
        return this
    }

    pesquisaPorTipoHardwareStationHubst420_1() {
        cy.get('.ant-select-selection-search > #name').type('st420-1')
        cy.get('.ant-select-item-option-content').contains('stationHub').click()
        cy.get('.ant-spin-container').should('contain', 'stationHub')
        cy.get('.ant-spin-container').should('contain', 'st420-1')
        return this
    }

    pesquisaPorTipoHardwarePosP2607_1() {
        cy.get('.ant-select-selection-search > #name').type('p2607-1')
        cy.get('.ant-select-item-option-content').contains('p2607-1').click()
        cy.get('.ant-spin-container').should('contain', 'pos')
        cy.get('.ant-spin-container').should('contain', 'p2607-1')
        return this
    }

    pesquisaPorTipoHardwarePosTsg800() {
        cy.get('.ant-select-selection-search > #name').type('TSG800')
        cy.get('.ant-select-item-option-content').contains('TSG800').click()
        cy.get('.ant-spin-container').should('contain', 'pos')
        cy.get('.ant-spin-container').should('contain', 'TSG800')
        return this
    }

    pesquisaPorTipoHardwareValidatorv5001() {
        cy.get('.ant-select-selection-search > #name').type('v500-1')
        cy.get('.ant-select-item-option-content').contains('v500-1').click()
        cy.get('.ant-spin-container').should('contain', 'validator')
        cy.get('.ant-spin-container').should('contain', 'v500-1')
        return this
    }

    pesquisaPorTipoHardwareValidatorv5002() {
        cy.get('.ant-select-selection-search > #name').type('v500-2')
        cy.get('.ant-select-item-option-content').contains('v500-2').click()
        cy.get('.ant-spin-container').should('contain', 'validator')
        cy.get('.ant-spin-container').should('contain', 'v500-2')
        return this
    }

    pesquisaPorTipoHardwareValidatorv770w() {
        cy.get('.ant-select-selection-search > #name').type('v770w')
        cy.get('.ant-select-item-option-content').contains('v770w').click()
        cy.get('.ant-spin-container').should('contain', 'validator')
        cy.get('.ant-spin-container').should('contain', 'v770w')
        return this
    }

    pesquisaPorTipoHardwareValidatorv3695() {
        cy.get('.ant-select-selection-search > #name').type('v3695')
        cy.get('.ant-select-item-option-content').contains('v3695').click()
        cy.get('.ant-spin-container').should('contain', 'validator')
        cy.get('.ant-spin-container').should('contain', 'v3695')
        return this
    }

    pesquisaPorTipoHardwareValidatorTinkerS() {
        cy.get('.ant-select-selection-search > #name').type('tinkerS')
        cy.get('.ant-select-item-option-content').contains('tinkerS').click()
        cy.get('.ant-spin-container').should('contain', 'validator')
        cy.get('.ant-spin-container').should('contain', 'tinkerS')
        return this
    }

    pesquisaPorTipoHardwareValidatorDigiconMG() {
        cy.get('.ant-select-selection-search > #name').type('digiconMG')
        cy.get('.ant-select-item-option-content').contains('digiconMG').click()
        cy.get('.ant-spin-container').should('contain', 'validator')
        cy.get('.ant-spin-container').should('contain', 'digiconMG')
        return this
    }

    pesquisaPorTipoHardwareValidatorTinkerY() {
        cy.get('.ant-select-selection-search > #name').type('tinkerY')
        cy.get('.ant-select-item-option-content').contains('tinkerY').click()
        cy.get('.ant-spin-container').should('contain', 'validator')
        cy.get('.ant-spin-container').should('contain', 'tinkerY')
        return this
    }

    selecionaHardwareATMat1985_1() {
        cy.get('.ant-select-selection-overflow').click()
        cy.get('.ant-select-item-option-content').contains('at1985-1').click()
        return this
    }

    selecionaMultiplosHardwares() {
        cy.get('.ant-select-selection-overflow').click()
        cy.get('.ant-select-item-option-content').eq(2).click()
        cy.get('.ant-select-item-option-content').eq(3).click()
        cy.get('.ant-select-item-option-content').eq(4).click()
        cy.get('.ant-select-item-option-content').eq(5).click()
        return this
    }

    selecionaHardwareStationHubst420_1() {
        cy.get('.ant-select-selection-overflow').click()
        cy.get('.ant-select-item-option-content').contains('stationHub').click()
        return this
    }

    selecionaHardwarePosP2607_1() {
        cy.get('.ant-select-selection-overflow').click()
        cy.get('.ant-select-item-option-content').contains('p2607-1').click()
        return this
    }

    selecionaHardwarePosTsg800() {
        cy.get('.ant-select-selection-overflow').click()
        cy.get('.ant-select-item-option-content').contains('TSG800').click()
        return this
    }

    selecionaHardwareValidatorv5001() {
        cy.get('.ant-select-selection-overflow').click()
        cy.get('.ant-select-item-option-content').contains('v500-1').click()
        return this
    }

    selecionaHardwareValidatorv5002() {
        cy.get('.ant-select-selection-overflow').click()
        cy.get('.ant-select-item-option-content').contains('v500-2').click()
        return this
    }

    selecionaHardwareValidatorv770w() {
        cy.get('.ant-select-selection-overflow').click()
        cy.get('.ant-select-item-option-content').contains('v770w').click()
        return this
    }

    selecionaHardwareValidatorv3695() {
        cy.get('.ant-select-selection-overflow').click()
        cy.get('.ant-select-item-option-content').contains('v3695').click()
        return this
    }

    selecionaHardwareValidatorTinkerS() {
        cy.get('.ant-select-selection-overflow').click()
        cy.get('.ant-select-item-option-content').contains('tinkerS').click()
        return this
    }

    selecionaHardwareValidatorDigiconMG() {
        cy.get('.ant-select-selection-overflow').click()
        cy.get('.ant-select-item-option-content').contains('digiconMG').click()
        return this
    }

    selecionaHardwareValidatorTinkerY() {
        cy.get('.ant-select-selection-overflow').click()
        cy.get('.ant-select-item-option-content').contains('tinkerY').click()
        return this
    }

    filtroPorTipoDeDeviceAtm() {
        dispositivo.pesquisaPorDeviceAtm()
        return this
    }

    filtroPorTipoDeDevicePerso() {
        dispositivo.pesquisaPorDevicePerso()
        return this
    }

    filtroPorTipoDeDevicePos() {
        dispositivo.pesquisaPorDevicePos()
        return this
    }

    filtroPorTipoDeDeviceStationhub() {
        dispositivo.pesquisaPorDeviceStatiosHub()
        return this
    }

    filtroPorTipoDeDeviceToten() {
        dispositivo.pesquisaPorDeviceToten()
        return this
    }

    filtroPorTipoDeDeviceValidator() {
        dispositivo.pesquisaPorDeviceValidator()
        return this
    }

    filtroPorStatusAtivo() {
        componente.selecionaStatus('Ativo')
        return this
    }

    filtroPorStatusInativo() {
        componente.selecionaStatus('Inativo')
        return this

    }

    botaoNovoFirmWare() {
        componente
            .clicaBotao('Novo Firmware')
            .validaTexto('Preencha os campos abaixo para o cadastro do firmware')
        return this
    }

    botaoVisualizar() {
        componente
            .clicaBotao('Visualizar')
            .validaTexto('Detalhes')
        return this
    }

    botaoEditar() {
        componente
            .clicaBotao('Editar')
            .validaTexto('Editar')
        return this
    }
}
export default new FirmwarePage