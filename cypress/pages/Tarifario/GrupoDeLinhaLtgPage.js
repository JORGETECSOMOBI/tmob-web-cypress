import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'

class GrupoDeLinhaLtgPage {

    beforeGrupoDeLinha() {
        login
            .go()
            .signin()
        home
            .tiposDeUso()
            .tarifario()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('Grupo de linha (ltg)')
        return this
    }

    cadastroGrupodeLinha() {
        componente
            .clicaBotaoNovo()
            .escreveDescricao('AAAA AUTOMAÇÃO CADASTRO GRUPO DE LINHA')
            .clicaBotaoSalvar()
            .clicaBotaoModal('Sim')
            .validaMensagem('O grupo de linha (ltg) foi cadastrado com sucesso')
        return this
    }

    editaGrupodeLinha() {
        componente
            .escreveDescricao('AAAA AUTOMAÇÃO CADASTRO GRUPO DE LINHA')
            .clicaBotaoEditar()
            .limpaDescricao()
            .escreveDescricao('AAAA AUTOMAÇÃO GRUPO DE LINHA EDITADO')
            .clicaBotaoSalvar()
            .clicaBotaoModal('Sim')
            .validaMensagem('O grupo de linha (ltg) foi atualizado com sucesso')
        return this
    }

    filtroPorId() {
        componente
            .escreveDescricao('21')
            .validaPesquisaAntTableRow('21')
        return this
    }

    filtroPorDescricao() {
        componente
            .escreveDescricao('AAAA AUTOMAÇÃO GRUPO DE LINHALTG')
            .validaPesquisaTitle('AAAA AUTOMAÇÃO GRUPO DE LINHALTG')
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
            .validaMensagem('Preencha os campos abaixo para o cadastro do grupo de linha (ltg)')
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
            .escreveDescricao('Testando limpar filtro')
            .limpaFiltro()
        return this
    }
}
export default new GrupoDeLinhaLtgPage