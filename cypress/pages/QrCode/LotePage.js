import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'

class LotePage {

    beforeLote() {
        login
            .go()
            .signin()
        home
            .tiposDeUso()
            .qrCode()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('Lote')
        return this
    }

    criandoLote() {
        componente
            .clicaBotao('Novo Lote')
        this
            .selecionaProduto('AAAA PRODUTO AUTOMAÇÃO LOTEÁVEL')
            .selecionaQuantidade('20')
        componente
            .selecionaStatus('Inativo')
            .escreveDescricao('AAAA LOTE TESTES AUTOMAÇÃO')
            .clicaBotaoSalvar()
            .clicaBotaoModal('Sim')
            .validaMensagem('Seu Lote foi cadastrado com sucesso')
        return this
    }

    cadastrandoNovoLote() {
        componente
            .clicaBotao('Novo Lote')
        this
            .selecionaProduto('AAAA PRODUTO AUTOMAÇÃO LOTEÁVEL')
            .selecionaQuantidade('20')
        componente
            .selecionaStatus('Inativo')
            .escreveDescricao('AAAA CADASTRAR NOVO LOTE')
            .clicaBotaoSalvar()
            .clicaBotaoModal('Sim')
            .validaMensagem('Seu Lote foi cadastrado com sucesso')
            .clicaBotao('Cadastrar novo lote')
        this
            .selecionaProduto('AAAA PRODUTO AUTOMAÇÃO LOTEÁVEL')
            .selecionaQuantidade('20')
        componente
            .selecionaStatus('Inativo')
            .escreveDescricao('AAAA NOVO LOTE CADASTRADO')
            .clicaBotaoSalvar()
            .clicaBotaoModal('Sim')
            .validaMensagem('Seu Lote foi cadastrado com sucesso')
            .clicaBotao('Ver lotes')
            .validaTexto('Lote')
        return this
    }

    editandoLote() {
        componente
            .escreveDescricao('AAAA LOTE TESTES AUTOMAÇÃO')
            .selecionaStatus('Inativo')
            .clicaBotao('Editar')
        componente
            .limpaDescricao()
            .escreveDescricao('AAAA LOTE TESTES AUTOMAÇÃO EDITADO')
            .clicaBotao('Desbloquear')
        cy.wait(1000)
        componente
            .clicaBotaoModal('Desbloquear')
        return this
    }

    botaoCadastrarNovoLote() {
        return this
    }

    selecionaProduto(produto) {
        cy.get('#productId').click().type(produto).wait(1000).type(`{enter}`)
        return this
    }

    selecionaQuantidade(quantidade) {
        cy.get('#size').click().type(quantidade)
        return this
    }

    filtrandoPorDescricao() {
        componente
            .escreveDescricao('TESTE FABIO')
            .validaPesquisaTitle('TESTE FABIO')
        return this
    }

    filtrandoPorId() {
        componente
            .escreveDescricao('4677')
            .validaPesquisaDataRowKey('4677')
        return this
    }

    filtrandoPorProduto() {
        cy.get('#rc_select_23').type('Teste 1 hora')
        componente.validaPesquisaDataRowKey('3686')
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

    botaoNovoLote() {
        componente
            .clicaBotao('Novo Lote')
            .validaTexto('Preencha os campos abaixo para o cadastro do lote')
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
export default new LotePage