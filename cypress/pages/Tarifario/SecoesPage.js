import login from '../Login/LoginPage'
import home from '../Home/HomePage'
import componente from '../ComponentesPadrao/ComponentesPadraoPage'
import regras from '../Tarifario/RegrasPage'

class SecoesPage {

    beforeSecoes() {
        login
            .go()
            .signin()
        home
            .tiposDeUso()
            .tarifario()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('Seções')
        return this
    }

    cadastroSecao() {
        componente
            .clicaBotaoNovo()
            .escreveDescricao('AAAAA CADASTRO SEÇÃO')
            .clicaBotao('Adicionar detalhe de sessão')
        this
            .descricaoSecao('Seção de testes AUTOMAÇÃO')
            .escreveNumeroSecao('1000')
            .atalhoSecao('100')
        componente
            .clicaBotaoSalvar()
            .clicaBotaoModal('Sim')
            .validaMensagem('Concluído')
        return this
    }

    editaSecaoIncluir() {
        componente
            .escreveDescricao('AAAAA CADASTRO SEÇÃO')
            .clicaBotaoEditar()
            .limpaDescricao()
            .escreveDescricao('AAAA AUTOMAÇÃO SEÇÃO EDITADA')
            .clicaBotao('Adicionar detalhe de sessão')
        this
            .escreveNumeroSecao1('600')
            .atalhoSecao1('006')
        componente
            .clicaBotaoSalvar()
            .clicaBotaoModal('Sim')
            .validaMensagem('A sessão foi atualizada com sucesso')
        return this
    }

    editaSecaoExcluir() {
        componente
            .escreveDescricao('AAAA AUTOMAÇÃO SEÇÃO EDITADA')
            .clicaBotaoEditar()
            .limpaDescricao()
            .escreveDescricao('AAAA AUTOMAÇÃO DETALHE EXCLUIDO')
        this
            .excluidetalhes()
        componente
            .clicaBotaoSalvar()
            .clicaBotaoModal('Sim')
            .validaMensagem('A sessão foi atualizada com sucesso')
        return this
    }


    descricaoSecao(descricao) {
        cy.get('#sessionDetails_0_description').type(descricao)
        return this
    }

    escreveNumeroSecao(numero) {
        cy.get('#sessionDetails_0_section').type(numero)
        return this
    }

    atalhoSecao(atalho) {
        cy.get('#sessionDetails_0_shortcut').type(atalho)
        return this
    }

    excluidetalhes() {
        cy.get('#sessionDetails_0_removeSection').click()
        return this
    }

    escreveNumeroSecao1(numero) {
        cy.get('#sessionDetails_1_section').type(numero)
        return this
    }

    atalhoSecao1(atalho) {
        cy.get('#sessionDetails_1_shortcut').type(atalho)
        return this
    }

    filtroPorId() {
        componente
            .escreveDescricao('56')
            .validaPesquisaTitle('sessão diego')
            .validaPesquisaDataRowKey('56')
        return this
    }

    filtroPordescricao() {
        componente
            .escreveDescricao('AAAA AUTOMAÇÃO SEÇÃO')
            .validaPesquisaTitle('AAAA AUTOMAÇÃO SEÇÃO')
            .validaPesquisaDataRowKey('58')
        return this
    }


    filtroPorStatusAtivo() {
        regras.filtroPorStatusAtivo()
        componente
            .validaPesquisaTitle('Ativo')
            .validaStatusAusente('Inativo')
        return this
    }

    filtroPorStatusInativo() {
        regras.filtroPorStatusInativo()
        componente
            .validaPesquisaTitle('Inativo')
            .validaStatusAusente('Ativo')
        return this
    }

    botaoNovo() {
        componente
            .clicaBotaoNovo()
            .validaTexto('Preencha os campos abaixo para o cadastro da sessão.')
        return this
    }

    botaoEditar() {
        regras.botaoEditar()
        return this
    }

    botaoVisualizar() {
        regras.botaoVisualizar()
        return this
    }

    botaoLimpaFiltro() {
        componente
            .escreveDescricao('Limpa Filtros')
            .limpaFiltro()
            .validaFuncaolimparFiltro()
        return this
    }
}
export default new SecoesPage