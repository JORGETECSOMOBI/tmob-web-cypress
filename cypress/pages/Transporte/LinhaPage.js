import componente from '../ComponentesPadrao/ComponentesPadraoPage'
import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import texto from'../../fixtures/textos.json'
import faker from 'faker-br'

class LinhaPage {

    beforeLinha() {
        login.go()
            .signin()
        home.transporte()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('Linha')
        return this
    }

    criaLinha() {
        this.geral()
            .stepTarifa()
            .sistemasExternos()
        return this
    }

    editaLinha() {
        this.editaGeral()
            .editaSistemasExternos()
        return this
    }

    pesquisaPorNome() {
        componente
            .escreveDescricao('Fim do mundo')
        this
            .validaPesquisa('Fim do mundo')
        return this
    }

    pesquisaPorStatusAtivo() {
        componente
            .selecionaStatus('Ativo')
            .validaStatusAtivo()
        return this
    }

    pesquisaPorStatusInativo() {
        componente
            .selecionaStatus('Inativo')
            .validaStatusInativo()
        return this
    }

    testandoVisualizar() {
        componente
            .clicaBotao('Visualizar')
            .validatexto('Detalhes')
        return this
    }

    testandoEditar() {
        componente
            .clicaBotao('Editar')
            .validatexto('Editar')
        return this
    }

    botaoNovo() {
        componente
            .clicaBotao('Novo')
            .validaMensagem(texto.textoCadastroLinha)
        return this
    }

    pesquisaPorTarifa() {
        this
            .filtroTarifa('Tarifa Sato')
            .validaPesquisa('Tarifa Sato')
        return this
    }

    pesquisaPorSegundaTarifa() {
        this
            .filtroSegundaTarifa('Tarifa Sato')
            .validaPesquisa('Tarifa Sato')
        return this
    }

    pesquisaPorTarifaremuneracao() {
        this
            .filtroTarifaRemuneracao('E2E OPERATIONAL TEST')
            .validaPesquisaTarifaremuneração('E2E OPERATIONAL TEST')
        return this
    }

    pesquisaPorDescontoNaTarifa() {
        this
            .filtroDescontoTarifa('rasb')
            .validaPesquisaDescontotarifa('rasb')
        return this
    }

    pesquisaPorTipoDaLinha() {
        this
            .filtroTipoDeLinha('CIRCULAR')
            .validaPesquisa('CIRCULAR')
        return this
    }

    PesquisaPordetalheTipoDeLinha() {
        this
            .filtroDetalheTipoDeLinha('NORMAL')
            .validaPesquisa('NORMAL')
        return this
    }

    pesquisaPorAlcanceDaLinha() {
        this
            .filtroAlcanceLinha('MUNICIPAL')
            .validaPesquisa('MUNICIPAL')
        return this
    }

    pesquisaPorGrupoDeLinhaIntegracao() {
        this
            .filtroGrupoIntegracaoLinha('Integração teste 1')
            .validaPesquisa('Integração teste 1')
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
        cy.get('[data-row-key="7"] > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click({ force: true })
        cy.get('[data-row-key="8"] > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click({ force: true })
        cy.get('[data-row-key="9"] > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click({ force: true })
        return this
    }

    incluiLinha() {
        cy.get('.ant-transfer-operation > :nth-child(1)').click({ force: true })
        return this
    }

    tarifa(tarifa) {
        cy.get('#farRuleId', { force: true }).type(tarifa, { force: true }).wait(1000).type(`{enter}`, { force: true })
        return this
    }

    segundaTarifa() {
        cy.get('#farSecondaryRuleId', { force: true }).wait(1000).type(`{enter}`, { force: true })
        return this
    }

    tarifaRemuneracao(tarifaRemuneracao) {
        cy.get('#farRemunerationRuleId', { force: true }).type(tarifaRemuneracao, { force: true }).wait(1000).type(`{enter}`, { force: true })
        return this
    }

    descontoTarifa(descontoTarifa) {
        cy.get('#farDiscountId', { force: true }).type(descontoTarifa, { force: true }).wait(1000).type(`{enter}`, { force: true })
        return this
    }

    grupoIntegracao(grupoIntegracao) {
        cy.get('#farIntegrationLineGroupId', { force: true }).type(grupoIntegracao, { force: true }).wait(1000).type(`{enter}`, { force: true })
        return this
    }

    sistema(sistema) {
        cy.get('#toSystem').click({ force: true })
        cy.wait(1000)
        cy.contains(sistema, { force: true }).click({ force: true })
        return this
    }

    IdExternoMaster(master) {
        cy.get('#externalMasterId').type(master)
        return this
    }

    limpaIdExternoMaster() {
        cy.get('#externalMasterId').clear()
        return this
    }

    limpaDescricaoCurta() {
        cy.get('#shortDesc').clear({ force: true })
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
        cy.get('[title]', { force: true }).contains(pesquisa).should('be.visible')
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

    clicaProximoEdita() {
        cy.get('.steps-action', { force: true }).contains('Proximo', { force: true }).click({ force: true })
        return this;
    }

    geral() {
        componente
            .clicaBotao('Novo')
            .escreveDescricao('Fim do mundo')
        this
            .descricaoCurta('Fim do mundo')
            .telaDovalidador('Fim do mundo')
            .IdExterno(faker.random.number())
            .OrgaoGestor('ABASP')
            .tipoDaLinha('ALIMENTADORA')
            .detalheDoTipoDalinha('NORMAL')
            .alcanceDaLinha('MUNICIPAL')
            .selecionaPorEmpresa()
            .incluiLinha()
        componente
            .clicaBotaoProximo()
        return this
    }

    stepTarifa() {
        this
            .segundaTarifa('END2END OPERACIONAL TESTE')
            .descontoTarifa('Desconto 02')
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
            .IdExterno('99')
            .IdExternoMaster('99')
            .acoes()
        componente.clicaBotao('+ Integrar Sistema')
        this
            .sistema('BOM-Mercury')
            .IdExterno('99')
            .IdExternoMaster('99')
            .acoes()
        componente
            .clicaBotao('Salvar')
            .clicaBotaoModal('Sim')
            .validaMensagem('A linha foi cadastrada com sucesso')
        return this
    }

    editaGeral() {
        componente
            .escreveDescricao('Fim do mundo')
            .clicaBotaoEditar()
            .limpaDescricao()
            .escreveDescricao('Novo mundo')
        this
            .selecionaPorEmpresa()
            .limpaDescricaoCurta()
            .descricaoCurta('Novo mundo')
            .telaDovalidador('Novo mundo')
            .clicaProximoEdita()
        return this
    }

    editaSistemasExternos() {
        componente.clicaBotao('+ Integrar Sistema')
        this
            .sistema('TOP-Mercury')
            .IdExterno('99')
            .IdExternoMaster('99')
            .acoes()
        componente.clicaBotao('+ Integrar Sistema')
        this
            .sistema('POA-Mercury')
            .IdExterno('99')
            .IdExternoMaster('99')
            .acoes()
        componente
            .clicaBotao('Salvar')
            .clicaBotaoModal('Sim')
        return this
    }

    editaStepTarifa() {
        this
            .segundaTarifa('END2END OPERACIONAL TESTE')
            .descontoTarifa('Desconto 02')
            .grupoIntegracao('teste grupo de linha')
            .tarifaRemuneracao('Tarifa Sato 1')
            .tarifa('Tarifa Sato')
        componente.clicaBotao('Proximo')
        return this
    }
}
export default new LinhaPage