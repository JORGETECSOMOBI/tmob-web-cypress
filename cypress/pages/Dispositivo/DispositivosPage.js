import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'

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
        const guid = '283b323d-21e3-4279-b0cb-13ace0626671'
        cy.get('#thingName').type(guid)
        componente
            .validaDescriçãoTitle('283b323d-21e3-4279-b0cb-13ace0626671')
        return this
    }

    pesquisaPorSerialHardware() {
        cy.get('#thingName').type()
        componente
            .validaDescriçãoTitle()
        return this
    }

    pesquisaPorUltimaComunicacao() {
        cy.get('.ant-picker > :nth-child(1) > input').type('20/10/2023', { force: true }).type(`{enter}`)
        cy.get('.ant-picker-input-active > input').type('20/12/2023', { force: true }).type(`{enter}`)
        componente.validaDescriçãoTitle('08/12/2023 16:30:46')
        return this
    }

    pesquisaPorOperadorDeTransporte() {
        cy.get('#rc_select_2', { force: true }).type('TMOB', { force: true })
        cy.contains('Operadora TMOB', { force: true }).click({ force: true })
    }

    pesquisaPorTerminal() {
        this.pesquisaPorOperadorDeTransporte()
        cy.get('#rc_select_3', { force: true }).type('999999', { force: true }).wait(1000).type(`{enter}`, { force: true })
        cy.get('.ant-table-row > :nth-child(3) > .ant-row-middle', { force: true }).should('have.text', '999999 ', { force: true })
        return this
    }

    pesquisaPorDeviceAtm() {
        cy.get('#deviceType').click()
        cy.get('.ant-select-item-option-content').contains('atm').click()
        cy.xpath('//div[@id="root"]//tbody/tr[2]/td[5]').should('have.text', 'atm');
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
        cy.xpath('//div[@id="root"]//tbody/tr[2]/td[5]').should('have.text', 'pos')
        return this
    }

    pesquisaPorDeviceStatiosHub() {
        cy.get('#deviceType').click()
        cy.get('.ant-select-item-option-content').contains('stationHub').click()
        cy.xpath('//div[@id="root"]//tbody/tr[2]/td[5]').should('have.text', 'stationHub')
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
        cy.xpath('//div[@id="root"]//tbody/tr[2]/td[5]').should('have.text', 'validator')
        return this
    }

    pesquisaPorStatusFechado() {
        cy.get('#serviceStatus').click({ force: true })
        cy.contains('Fechado').click()
        componente
            .validaStatusAusente('Aberto')
            .validaStatusAusente('Ocioso')
            .validaStatusAusente('Suspenso')
            .validaStatusAusente('Manutenção')
        return this
    }

    pesquisaPorStatusOcioso() {
        cy.get('#serviceStatus').click({ force: true })
        cy.contains('Ocioso').click()
        componente
            .validaStatusAusente('Aberto')
            .validaStatusAusente('Fechado')
            .validaStatusAusente('Suspenso')
            .validaStatusAusente('Manutenção')
        return this
    }

    pesquisaPorStatusAberto() {
        cy.get('#serviceStatus').click({ force: true })
        cy.contains('Aberto').click()
        componente
            .validaStatusAusente('Fechado')
            .validaStatusAusente('Ocioso')
            .validaStatusAusente('Suspenso')
            .validaStatusAusente('Manutenção')
        return this
    }

    pesquisaPorStatusSuspenso() {
        cy.get('#serviceStatus').click({ force: true })
        cy.contains('Suspenso').click()
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
        cy.contains('Não configurado').click()
        return this
    }

    pesquisaPorStatusAbertoOuOcioso() {
        cy.get('#serviceStatus').click({ force: true })
        cy.contains('Aberto ou ocioso').click()
        return this
    }

    pesquisaPorStatusFechadoOuSuspenso() {
        cy.get('#serviceStatus').click({ force: true })
        cy.contains('Fechado ou suspenso')
        return this
    }

    pesquisaPorVersaoAlfa() {
        cy.get('#rc_select_8', { force: true }).type('recharge-v770w')
        cy.get('svg[data-icon="plus-square"]').click()
        cy.contains('Alfa').click()
        return this
    }

    pesquisaPorVersaoBeta() {
        cy.get('#rc_select_8', { force: true }).type('recharge-v770w')
        cy.get('svg[data-icon="plus-square"]').click()
        cy.contains('Beta').click()
        return this
    }

    pesquisaPorVersaoEstavel() {
        cy.get('#rc_select_8', { force: true }).type('recharge-v770w')
        cy.get('svg[data-icon="plus-square"]').click()
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

    pesquisaPorTipoHardwareStationHubx86_64() {
        componente.pesquisaNomeId('x86')
        cy.get('.ant-select-item-option-content').contains('stationHub').click()
        cy.get('.ant-spin-container').should('contain', 'stationHub')
        cy.get('.ant-spin-container').should('contain', 'x86')
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
            .validatexto('Detalhes')

        return this
    }

    editar() {
        componente
            .clicaBotaoHomeEditar()
            .validatexto('Editar')
        return this
    }

    validaLimpaFitroGuid() {
        cy.get('#thingName').should('have.value', '')
        return this
    }
}
export default new DispositivosPage