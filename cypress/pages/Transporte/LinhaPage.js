import componente from '../ComponentesPadrao/ComponentesPadraoPage'
import url from '../../fixtures/url.json'
import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'

class LinhaPage {

    beforeLinha() {
        login.go()
            .signin()
        home.transporte()
        componente
            .validaURL(url.transporte)
            .selecionaIdioma('PT')
            .clicaBotao('Linha')
        return this
    }

    descricaoCurta(descricaoCurta) {
        cy.get('#shortDesc').type(descricaoCurta, { force: true })
        return this
    }

    telaDovalidador(telaDovalidador) {
        cy.get('#validatorDisplayText').type(telaDovalidador, { force: true })
        return this
    }
    IdExterno(IdExterno) {
        cy.get('#externalId').type(IdExterno, { force: true })
        return this
    }
    OrgaoGestor(orgao) {
        cy.get('#ToTransportAuthority_connect_id').click({ force: true })
        cy.contains(orgao).click({ force: true })
        return this
    }

    tipoDaLinha(tipoDaLinha) {
        cy.get('#ToLineType_connect_code').click({ force: true })
        cy.contains(tipoDaLinha).click({ force: true })
        return this
    }

    detalheDoTipoDalinha(detalheDoTipoDalinha) {
        cy.get('#ToLineDetailType_connect_code').click({ force: true })
        cy.contains(detalheDoTipoDalinha).click({ force: true })
        return this
    }

    alcanceDaLinha(alcanceDaLinha) {
        cy.get('#ToLineRange_connect_code').click({ force: true })
        cy.contains(alcanceDaLinha).click({ force: true })
        return this
    }

    selecionaPorEmpresa() {
        cy.get('[data-row-key="7"] > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click()
        cy.get('[data-row-key="8"] > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click()
        cy.get('[data-row-key="9"] > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click()
        return this
    }

    incluiLinha() {
        cy.get('.ant-transfer-operation > :nth-child(1)').click({ force: true })
        return this
    }

    tarifa(tarifa) {
        cy.get('#farRuleId', { force: true }).type(tarifa).wait(1000).type(`{enter}`)
        return this
    }

    segundaTarifa() {
        cy.get('#farSecondaryRuleId', { force: true }).wait(1000).type(`{enter}`)
        return this
    }

    tarifaRemuneracao(tarifaRemuneracao) {
        cy.get('#farRemunerationRuleId', { force: true }).type(tarifaRemuneracao).wait(1000).type(`{enter}`)
        return this
    }

    descontoTarifa(descontoTarifa) {
        cy.get('#farDiscountId', { force: true }).type(descontoTarifa).wait(1000).type(`{enter}`)
        return this
    }

    grupoIntegracao(grupoIntegracao) {
        cy.get('#farIntegrationLineGroupId', { force: true }).type(grupoIntegracao).wait(1000).type(`{enter}`)
        return this
    }

    sistema(sistema) {
        cy.get('#toSystem').click()
        cy.contains(sistema).click()
        return this
    }

    IdExternoMaster(master) {
        cy.get('#externalMasterId').type(master)
        return this
    }

    acoes() {
        cy.get('.ant-row > :nth-child(1) > .ant-btn').eq(0).click({ force: true })
        return this
    }

    filtroTarifa(tarifa) {
        cy.get('#farRule').click({ force: true })
        cy.contains(tarifa).click({ force: true })
        return this
    }

    filtroSegundaTarifa(tarifa) {
        cy.get('#farSecondaryRule').click({ force: true })
        cy.contains(tarifa).click({ force: true })
        return this
    }

    filtroTarifaRemuneracao(tarifa) {
        cy.get('#farRemunerationRule').click({ force: true })
        cy.contains(tarifa).click({ force: true })
        return this
    }

    filtroDescontoTarifa(tarifa) {
        cy.get('#farDiscount').click({ force: true })
        cy.contains(tarifa).click({ force: true })
        return this
    }

    filtroTipoDeLinha(tipoLinha) {
        cy.get('#toLineType').click({ force: true })
        cy.contains(tipoLinha).click({ force: true })
        return this
    }

    filtroDetalheTipoDeLinha(detalheDoTipoDalinha) {
        cy.get('#toLineDetailType').click({ force: true })
        cy.contains(detalheDoTipoDalinha).click({ force: true })
        return this
    }

    filtroAlcanceLinha(alcanceDaLinha) {
        cy.get('#toLineRange').click({ force: true })
        cy.contains(alcanceDaLinha).click({ force: true })
        return this
    }

    filtroGrupoIntegracaoLinha(GrupoIntegracaoLinha) {
        cy.get('#farIntegrationLineGroup').click({ force: true })
        cy.contains(GrupoIntegracaoLinha).click({ force: true })
        return this
    }

    validaPesquisa(pesquisa) {
        cy.get('[title]',{ force: true }).contains(pesquisa).should('be.visible')
        return this
    }

    validaPesquisaDescontotarifa(desconto) {
        cy.get('[data-row-key]').contains(desconto).should('be.visible')
        return this
    }

    validaPesquisaSegundaTarifa(segundaTarifa) {
        cy.get('[data-row-key]').contains(segundaTarifa).should('be.visible')
        return this
    }

    validaPesquisaTarifaremuneração(tarifaRemuneracao) {
        cy.get('[data-row-key]').contains(tarifaRemuneracao).should('be.visible')
        return this
    }

    validaStatus(status) {
        cy.get('.ant-tag').contains(status).should('be.visible')
        return this
    }

    geral() {
        componente
            .clicaBotao('Novo')
            .escreveDescricao('Fim do mundo')
        this
            .descricaoCurta('Fim do mundo')
            .telaDovalidador('Fim do mundo')
            .IdExterno('200')
            .OrgaoGestor('ABASP')
            .tipoDaLinha('ALIMENTADORA')
            .detalheDoTipoDalinha('NORMAL')
            .alcanceDaLinha('MUNICIPAL')
            .selecionaPorEmpresa()
            .incluiLinha()
        componente
            .clicaBotao('Proximo')
        return this
    }

    stepTarifa() {
        this
            .segundaTarifa('END2END OPERACIONAL TESTE')
            .descontaTarifa('Desconto 02')
            .grupoIntegracao('teste grupo de linha')
            .tarifaRemuneracao('Tarifa Sato 1')
            .tarifa('Tarifa Sato')
        componente.clicaBotao('Proximo')
        return this
    }

    sistemasExternos() {
        componente.clicaBotao('+ Integrar Sistema')
        this
            .sistema('TOP-Mercury')
            .IdExterno('13')
            .IdExternoMaster('26')
            .acoes()
        componente.clicaBotao('+ Integrar Sistema')
        this
            .sistema('BOM-Mercury')
            .IdExterno('13')
            .IdExternoMaster('26')
            .acoes()
        componente
            .clicaBotao('Salvar')
            .clicaBotaoModal('Sim')
        return this
    }
}
export default new LinhaPage