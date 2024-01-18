import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'
import faker from 'faker-br'

class DispositivosPage {

    beforeDispositivo() {
        login.go()
        login.signin()
        home.dispositivos()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('Dispositivos')
        return this
    }

    pesquisaPorGuidSerial() {
        const guid = '29f5ce5a-4570-4582-8b6e-654556d5bdfc'
        cy.get('#thingName').type(guid)
        componente
            .validaPesquisaTitle(guid)
        return this
    }

    pesquisaPorSerialHardware() {
        cy.get('#thingName').type('5401052143018483')
        componente
            .validaPesquisaTitle('5401052143018483')
        return this
    }

    pesquisaPorUltimaComunicacao() {
        const comunicacao = faker.date.recent().toLocaleDateString('pt-BR')
        cy.get('.ant-picker > :nth-child(1) > input').type(comunicacao, { force: true }).type(`{enter}`)
        cy.wait(1000)
        cy.get('.ant-picker-input-active > input').type(comunicacao, { force: true }).type(`{enter}`)
        cy.contains(comunicacao).should('contain', comunicacao)
        return this
    }

    pesquisaPorOperadorDeTransporte() {
        cy.get('.ant-select-selection-search-input', { force: true }).eq(1).type('Operadora Autopass', { force: true })
        cy.get('.ant-select-item-option-content').contains('Operadora Autopass', { force: true }).click()
        componente.validaPesquisaDataRowKey('1 01 - Operadora Autopass')
    }

    pesquisaPorTerminal() {
        this.pesquisaPorOperadorDeTransporte()
        cy.get('.ant-select-selection-search-input', { force: true }).eq(2).type('7', { force: true }).wait(1000).type(`{enter}`, { force: true })
        cy.get('[data-row-key]').should('contain', '7', { force: true })
        return this
    }

    pesquisaPorDeviceAtm() {
        cy.get('#deviceType').click()
        cy.get('.ant-select-item-option-content').contains('atm').click()
        cy.get('.ant-table-cell').should('contain', 'atm')
        return this
    }

    pesquisaPorDevicePerso() {
        cy.get('#deviceType').click()
        cy.get('.ant-select-item-option-content').contains('perso').click()
        return this
    }
    pesquisaPorDevicePos() {
        cy.get('#deviceType').click()
        cy.get('.ant-select-item-option-content').contains('pos').click()
        cy.get('.ant-table-cell').should('contain', 'pos')
        return this
    }

    pesquisaPorDeviceStatiosHub() {
        cy.get('#deviceType').click()
        cy.get('.ant-select-item-option-content').contains('stationHub').click()
        cy.get('.ant-table-cell').should('contain', 'stationHub')
        return this
    }

    pesquisaPorDeviceToten() {
        cy.get('#deviceType').click()
        cy.get('.ant-select-item-option-content').contains('toten').click()
        return this
    }

    pesquisaPorDeviceValidator() {
        cy.get('#deviceType').click()
        cy.get('.ant-select-item-option-content').contains('validator').click()
        cy.get('.ant-table-cell').should('contain', 'validator')
        return this
    }

    pesquisaPorStatusFechado() {
        cy.get('#serviceStatus').click({ force: true })
        cy.contains('Fechado').click({ force: true })
        componente
            .validaStatusAusente('Aberto')
            .validaStatusAusente('Ocioso')
            .validaStatusAusente('Suspenso')
            .validaStatusAusente('Manutenção')
        return this
    }

    pesquisaPorStatusOcioso() {
        cy.get('#serviceStatus').click({ force: true })
        cy.contains('Ocioso').click({ force: true })
        componente
            .validaStatusAusente('Aberto')
            .validaStatusAusente('Fechado')
            .validaStatusAusente('Suspenso')
            .validaStatusAusente('Manutenção')
        return this
    }

    pesquisaPorStatusAberto() {
        cy.get('#serviceStatus').click({ force: true })
        cy.contains('Aberto').click({ force: true })
        componente
            .validaStatusAusente('Fechado')
            .validaStatusAusente('Ocioso')
            .validaStatusAusente('Suspenso')
            .validaStatusAusente('Manutenção')
        return this
    }

    pesquisaPorStatusSuspenso() {
        cy.get('#serviceStatus').click({ force: true })
        cy.contains('Suspenso').click({ force: true })
        componente
            .validaStatusAusente('Fechado')
            .validaStatusAusente('Ocioso')
            .validaStatusAusente('Aberto')
            .validaStatusAusente('Manutenção')
        return this
    }

    pesquisaPorStatusManutencao() {
        cy.get('#serviceStatus').click({ force: true })
        cy.contains('Manutenção').click()
        componente
            .validaStatusAusente('Fechado')
            .validaStatusAusente('Ocioso')
            .validaStatusAusente('Suspenso')
            .validaStatusAusente('Aberto')
        return this
    }

    pesquisaPorStatusNaoConfigurado() {
        cy.get('#serviceStatus').click({ force: true })
        cy.contains('Não configurado').click({ force: true })
        return this
    }

    pesquisaPorStatusAbertoOuOcioso() {
        cy.get('#serviceStatus').click({ force: true })
        cy.contains('Aberto ou ocioso').click({ force: true })
        return this
    }

    pesquisaPorStatusFechadoOuSuspenso() {
        cy.get('#serviceStatus').click({ force: true })
        cy.contains('Fechado ou suspenso').click({ force: true })
        return this
    }

    pesquisaPorVersaoAlfa() {
        cy.get('#rc_select_8', { force: true }).type('recharge-v770w')
        cy.get('svg[data-icon="plus-square"]').click({ force: true })
        cy.contains('Alfa').click({ force: true })
        return this
    }

    pesquisaPorVersaoBeta() {
        cy.get('#rc_select_8', { force: true }).type('recharge-v770w')
        cy.get('svg[data-icon="plus-square"]').click()
        cy.contains('Beta').click({ force: true })
        return this
    }

    pesquisaPorVersaoEstavel() {
        cy.get('#rc_select_8', { force: true }).type('recharge-v770w')
        cy.get('svg[data-icon="plus-square"]').click({ force: true })
        cy.contains('Estável').click()
        return this
    }

    pesquisaPorTipoHardwareATMx86_64() {
        componente.pesquisaNomeId('x86_64')
        cy.get('.ant-select-item-option-content').contains('x86_64').click()
        cy.get('.ant-spin-container').should('contain', 'atm')
        cy.get('.ant-spin-container').should('contain', 'x86_64')
        return this
    }

    pesquisaPorTipoHardwareStationHub_tsation() {
        componente.pesquisaNomeId('tsation')
        cy.get('.ant-select-item-option-content').contains('stationHub').click()
        cy.get('.ant-spin-container').should('contain', 'stationHub')
        cy.get('.ant-spin-container').should('contain', 'tsation')
        return this
    }

    pesquisaPorTipoHardwarePosTsg800() {
        componente.pesquisaNomeId('TSG800')
        cy.get('.ant-select-item-option-content').contains('TSG800').click()
        cy.get('.ant-spin-container').should('contain', 'pos')
        cy.get('.ant-spin-container').should('contain', 'TSG800')
        return this
    }

    pesquisaPorTipoHardwareValidatorv5001() {
        componente.pesquisaNomeId('v500-1')
        cy.get('.ant-select-item-option-content').contains('v500-1').click()
        cy.get('.ant-spin-container').should('contain', 'validator')
        cy.get('.ant-spin-container').should('contain', 'v500-1')
        return this
    }

    pesquisaPorTipoHardwareValidatorv3695() {
        componente.pesquisaNomeId('v3695')
        cy.get('.ant-select-item-option-content').contains('v3695').click()
        cy.get('.ant-spin-container').should('contain', 'validator')
        cy.get('.ant-spin-container').should('contain', 'v3695')
        return this
    }

    pesquisaPorTipoHardwareValidatorTinkerS() {
        componente.pesquisaNomeId('tinkerS')
        cy.get('.ant-select-item-option-content').contains('tinkerS').click()
        cy.get('.ant-spin-container').should('contain', 'validator')
        cy.get('.ant-spin-container').should('contain', 'tinkerS')
        return this
    }

    pesquisaPorTipoHardwareValidatorDigiconMG() {
        componente.pesquisaNomeId('digiconMG')
        cy.get('.ant-select-item-option-content').contains('digiconMG').click()
        cy.get('.ant-spin-container').should('contain', 'validator')
        cy.get('.ant-spin-container').should('contain', 'digiconMG')
        return this
    }

    pesquisaPorTipoHardwareValidatorTinkerY() {
        componente.pesquisaNomeId('tinkerY')
        cy.get('.ant-select-item-option-content').contains('tinkerY').click()
        cy.get('.ant-spin-container').should('contain', 'validator')
        cy.get('.ant-spin-container').should('contain', 'tinkerY')
        return this
    }

    pesquisaPorConectividadeOnline() {
        cy.get('#isConnected').click()
        cy.get('.ant-select-item-option-content').contains('Online').click()
        cy.get('.ant-spin-container').should('contain', 'Online')
        return this
    }

    pesquisaPorConectividadeOffline() {
        cy.get('#isConnected').click()
        cy.get('.ant-select-item-option-content').contains('Offline').click()
        cy.get('.ant-spin-container').should('contain', 'Offline')
        return this
    }

    limparFiltro() {
        this
            .pesquisaPorDeviceAtm()
        componente
            .limpaFiltro()
        this.validaLimpaFitroGuid()
        return this
    }

    visualizar() {
        componente
            .clicaBotaoHomeVisualizar()
            .validaTexto('Detalhes')

        return this
    }

    editar() {
        componente
            .clicaBotaoHomeEditar()
            .validaTexto('Editar')
        return this
    }

    validaLimpaFitroGuid() {
        cy.get('#thingName').should('have.value', '')
        return this
    }
}
export default new DispositivosPage