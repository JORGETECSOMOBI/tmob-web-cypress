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
        cy.get('#rc_select_2', { force: true }).type('Operadora TMOB', { force: true })
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
        //cy.xpath('//tbody/tr[2]/td[9]/span').should('have.text', 'Fechado');
        return this
    }

    pesquisaPorStatusOcioso() {
        cy.get('#serviceStatus').click({ force: true })
        cy.contains('Ocioso').click()
        return this
    }

    pesquisaPorStatusAberto() {
        cy.get('#serviceStatus').click({ force: true })
        cy.contains('Aberto').click()
        return this
    }

    pesquisaPorStatusSuspenso() {
        cy.get('#serviceStatus').click({ force: true })
        cy.contains('Suspenso').click()
        return this
    }

    pesquisaPorStatusManutencao() {
        cy.get('#serviceStatus').click({ force: true })
        cy.contains('Manutenção').click()
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
        cy.contains('Fechado ou suspenso').click()
        return this
    }
}
export default new DispositivosPage