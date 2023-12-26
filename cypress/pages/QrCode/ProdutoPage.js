import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'

class ProdutoPage {

    beforeProduto() {
        login
            .go()
            .signin()
        home
            .tiposDeUso()
            .qrCode()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('Produto')
        return this
    }

    cadastroNovoProdutoLoteavel() {
        componente
            .clicaBotao('Novo Produto')
            .escreveDescricao('AAAA PRODUTO AUTOMAÇÃO LOTEÁVEL')
        this.selecionaEmissor()
            .clicaBotaoLoteavel()
            .clicaBotaoAbt()
        componente
            .clicaBotaoProximo()
        this
            .tipoDeExpiracao('Por uso')
            .tempoDeExpiracao('5')
            .dataDeExpiracao('22/12/2028')
            .reimpressao('10')
            .estoqueOffline('500')
            .dataInicial('20/12/2023')
            .dataAceiteOffLine('20/12/2023')
            .limiteDeIntegracoes('5')
            .mensagemDisplay('415')
            .escopodeDistribuicao('Distribuição Automação')
            .selecionaOperadora('Operadora Autopass')
        componente
            .clicaBotaoProximo()
        this
            .tipoDePreco('Estático')
            .precoVigente('500')
        componente
            .clicaBotaoSalvar()
            .clicaBotaoSim()
            .validaMensagem('Seu produto foi cadastrado com sucesso')
        return this
    }

    editaProdutoLoteavel() {
        componente
            .escreveDescricao('AAAA ')
            .clicaBotao('Editar')
            .limpaDescricao()
            .escreveDescricao('AAAA PRODUTO AUTOMAÇÃO LOTEÁVEL EDITADO')
        this.selecionaEmissor()
            .clicaBotaoLoteavel()
            .clicaBotaoAbt()
        this
            .tipoDeExpiracao('Na geração')
            .limpaTempoDeExpiracao()
            .tempoDeExpiracao('20')
        componente
            .clicaBotaoSalvar()
            .clicaBotaoModal('Sim')
            .validaMensagem('Seu produto foi editado com sucesso')
        return this
    }

    tipoDePreco(tipo) {
        cy.get('.ant-select-selector').eq(1).click({ force: true })
        cy.get('.ant-select-item-option-content').contains(tipo, { force: true }).click({ force: true })
        return this
    }

    precoVigente(preco) {
        cy.get('#value').type(preco)
        return this
    }

    selecionaOperadora() {
        cy.get('.ant-input').eq(0).type('Operadora Autopass', { force: true })
        cy.get('.ant-checkbox-input').eq(2).click({ force: true })
        cy.get('.ant-transfer-operation > :nth-child(1)').click({ force: true })
        return this
    }

    selecionaEmissor() {
        cy.get('#toIssuerCode', { force: true }).type('Emissor teste', { force: true }).type(`{enter}`, { force: true })
        return this
    }

    clicaBotaoLoteavel() {
        cy.get('#isBatchable > .ant-switch-handle').click({ force: true })
        return this
    }

    clicaBotaoAbt() {
        cy.get('#allowAbt > .ant-switch-inner').click({ force: true })
        return this
    }

    tipoDeExpiracao(tipo) {
        cy.get('#expirationType').click({ force: true })
        cy.get('.ant-select-item-option-content').contains(tipo, { force: true }).click({ force: true })
        return this
    }

    tempoDeExpiracao(tempo) {
        cy.get('#expirationTime', { force: true }).type(tempo, { force: true })
        return this
    }

    limpaTempoDeExpiracao() {
        cy.get('#expirationTime', { force: true }).clear({ force: true })
        return this
    }

    dataDeExpiracao(data) {
        cy.get('#expirationDate', { force: true }).type(data, { force: true }).type(`{enter}`)
        return this
    }

    reimpressao(reimprime) {
        cy.get('#maxRegenerate', { force: true }).type(reimprime, { force: true })
        return this
    }

    estoqueOffline(estoque) {
        cy.get('#offlineStorage', { force: true }).type(estoque, { force: true })
        return this
    }

    dataInicial(data) {
        cy.get('#productStartDate', { force: true }).type(data, { force: true }).type(`{enter}`)
        return this
    }

    dataAceiteOffLine(dias) {
        cy.get('#offlineAcceptanceDays', { force: true }).type(dias, { force: true })
        return this
    }

    limiteDeIntegracoes(limite) {
        cy.get('#maxIntegrationCount', { force: true }).type(limite, { force: true })
        return this
    }

    escopodeDistribuicao(escopo) {
        cy.get('#distributionLevel', { force: true }).type(escopo, { force: true })
        return this
    }

    mensagemDisplay(mensagem) {
        cy.get('#dvcDisplayMessageCode', { force: true }).click({ force: true })
        cy.get('.ant-select-item-option-content').contains(mensagem, { force: true }).click({ force: true })
        return this
    }

    filtrandoPorDescricao() {
        componente
            .escreveDescricao('PRODUTO TMOB QRCODE')
            .validaPesquisaTitle('PRODUTO TMOB QRCODE')
        return this
    }

    filtrandoPorId() {
        componente
            .escreveDescricao('3686')
            .validaPesquisaDataRowKey('3686')
        return this
    }

    filtrandoPorFiltroAtivo() {
        componente
            .selecionaStatus('Ativo')
            .validaPesquisaAntTableRow('Ativo')
            .validaStatusAusente('Inativo')
        return this
    }

    filtrandoPorFiltroInativo() {
        componente
            .selecionaStatus('Inativo')
            .validaPesquisaAntTableRow('Inativo')
            .validaStatusAusente('Ativo')
        return this
    }

    botaoNovoProduto() {
        componente
            .clicaBotao('Novo Produto')
            .validaTexto('Preencha os campos abaixo para o cadastro do produto')
        return this
    }

    botaoVisualizar() {
        componente
            .clicaBotaoHomeVisualizar()
            .validaTexto('Detalhes')
        return this
    }

    botaoEditar() {
        componente
            .clicaBotaoEditar()
            .validaTexto('Editar')
        return this
    }

    botaoLimparFiltro() {
        componente
            .escreveDescricao('PROD QRCODE TMOB')
            .limpaFiltro()
            .validaFuncaolimparFiltro()
        return this
    }
}
export default new ProdutoPage