import login from '../Login/LoginPage'
import home from '../Home/HomePage'
import componente from '../ComponentesPadrao/ComponentesPadraoPage'
import faker from 'faker-br'

class RedeDeVendasPage {

    beforeRedeDeVendas() {
        login.go()
        login.signin()
        home.comercializacao()
        componente
            .clicaBotao('Rede de vendas')
            .selecionaIdioma('PT')
        return this
    }

    criandoRedeDeVendas() {
        componente
            .clicaBotaoNovo()
        this
            .escreveNome()
            .selecionaTipo('Operador')
            .selecionaOperadora('Operadora Autopass')
            .tipoProduto('Mídia')
            .subTipo('Fidelidade')
            .tipoDeOperacao('Venda')
            .semDataLimite()
            .dataVigencia('22/12/2023')
            .selecionaStatusAtivo()
        componente
            .clicaBotaoProximo()
            .clicaBotaoProximo()
        this
            .selecionaFuncao()
            .incluiFuncao()
        componente
            .clicaBotaoProximo()
        this
            .metodoDePagamento('Dinheiro')
        componente
            .clicaBotaoProximo()
            .clicaBotaoProximo()
            .clicaBotaoProximo()
            .clicaBotaoSalvar()
            .clicaBotaoModal('Salvar')
            .validaMensagem('Rede de vendas foi criada com sucesso!')
    }

    editandoRedeDeVendas() {
        componente
            .escreveNome('REDE DE EDITADA Consuelo')
            .clicaBotaoHomeEditar()
            .limpaNome()
        this
            .escreveNomeEditado()
        componente
            .clicaBotaoSalvar()
            .clicaBotaoModal('Salvar')
            .validaMensagem('Rede de vendas foi editado com sucesso!')
        return this
    }

    selecionaFuncao() {
        cy.get('[data-row-key="3"] > .ant-table-selection-column > .ant-checkbox-wrapper').click({ force: true })
        return this
    }

    metodoDePagamento(metodo) {
        cy.get('span').contains(metodo, { force: true }).click({ force: true })
    }

    incluiFuncao() {
        cy.get('.ant-transfer-operation > :nth-child(1)').click({ force: true })
        return this
    }

    selecionaStatusAtivo() {
        cy.get('#comMerchantProducts_0_isActive >').eq(0).click({ force: true })
        return this
    }

    selecionaStatusInativo() {
        cy.get('#comMerchantProducts_0_isActive >').eq(1).click({ force: true })
        return this
    }

    escreveNome() {
        const nome = 'REDE DE VENDAS AUTOMAÇÃO'
        const complemento = faker.name.firstName()
        const nomeCompleto = `${nome} ${complemento}`
        componente.escreveNome(nomeCompleto)
        return this
    }

    escreveNomeEditado() {
        const nome = 'REDE DE VENDAS EDITADA'
        const complemento = faker.name.firstName()
        const nomeCompleto = `${nome} ${complemento}`
        componente.escreveNome(nomeCompleto)
        return this
    }

    filtroPorId() {
        componente
            .escreveNome('149')
            .validaPesquisaDataRowKey('149')
        return this
    }

    filtroPorDescricao() {
        componente
            .escreveNome('ClientId Secret')
            .validaPesquisaTitle('ClientId Secret ')
        return this
    }

    filtroPorTipoOperador() {
        componente
            .selecionaTipo('Operador')
            .validaPesquisaAntTableCell('Operador')
        return this
    }

    filtroPorTipoGateway() {
        componente
            .selecionaTipo('Gateway')
            .validaPesquisaAntTableCell('Gateway')
        return this
    }


    filtroPorStatusAtivo() {
        componente
            .selecionaStatus('Ativo')
            .validaStatusAtivo()
            .validaStatusAusente('Inativo')
        return this
    }

    filtroPorStatusInativo() {
        componente
            .selecionaStatus('Inativo')
            .validaStatusInativo()
            .validaStatusAusente('Ativo')
        return this
    }

    botaoNovo() {
        componente
            .clicaBotaoNovo()
            .validaMensagem('Novo')
        return this
    }

    botaoVisualizar() {
        componente
            .clicaBotaoVisualizar()
            .validaTexto('Detalhes')
        return this
    }

    botaoEditar() {
        componente
            .clicaBotaoEditar()
            .validaTexto('Editar')
        return this
    }

    botaoLimpaFiltro() {
        componente
            .escreveNome('Testando limpar filtro')
            .limpaFiltro()
        return this
    }

    selecionaOperadora(operadora) {
        cy.get('#toTransportOperator').click({ force: true })
        cy.get('.ant-select-item-option-content').contains(operadora).click({ force: true })
        return this
    }

    tipoProduto(tipo) {
        cy.get('#comMerchantProducts_0_productType').click({ force: true })
        cy.get('.ant-select-item-option-content').contains(tipo).click({ force: true })
        return this
    }

    subTipo(subTipo) {
        cy.get('#comMerchantProducts_0_subType').click({ force: true })
        cy.get('.ant-select-item-option-content').contains(subTipo).click({ force: true })
        return this
    }

    tipoDeOperacao(tipoOperacao) {
        cy.get('.ant-select-selection-overflow').click({ force: true })
        cy.get('.ant-select-item-option-content').contains(tipoOperacao).click({ force: true })
        return this
    }

    dataVigencia() {
        cy.get('#comMerchantProducts_0_vigencyDate').click({ force: true })
        cy.get('.ant-picker-today-btn').contains('Hoje').click({ force: true })
        return this
    }

    semDataLimite() {
        cy.get('.ant-switch-inner').click({ force: true })
        return this
    }

    selecionaTipo(tipo) {
        cy.get('#type').click({ force: true })
        cy.get('.ant-select-item-option-content').contains(tipo).click({ force: true })
        return this
    }
}
export default new RedeDeVendasPage