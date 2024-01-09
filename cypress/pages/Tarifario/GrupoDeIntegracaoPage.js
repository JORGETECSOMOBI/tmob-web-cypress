import login from '../Login/LoginPage'
import home from '../Home/HomePage'
import componente from '../ComponentesPadrao/ComponentesPadraoPage'

class GrupoDeIntegracaoPage {

    beforeGrupoDeIntegracao() {
        login
            .go()
            .signin()
        home
            .tiposDeUso()
            .tarifario()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('Grupo de integração')
        return this
    }

    cadastroGrupodeLinha() {
        componente
            .clicaBotaoNovo()
            .escreveDescricao('AAAA AUTOMAÇÃO CADASTRO GRUPO INTEGRAÇÃO')
            .clicaBotaoSalvar()
            .clicaBotaoModal('Sim')
            .validaMensagem('O grupo de integração foi cadastrado com sucesso')
        return this
    }

    editaGrupodeLinha() {
        componente
            .escreveDescricao('AAAA AUTOMAÇÃO CADASTRO GRUPO INTEGRAÇÃO')
            .clicaBotaoEditar()
            .limpaDescricao()
            .escreveDescricao('AAAA AUTOMAÇÃO GRUPO INTEGRAÇÃO EDITADO')
            .clicaBotaoSalvar()
            .clicaBotaoModal('Sim')
            .validaMensagem('O grupo de integração foi atualizado com sucesso')
        return this
    }

    filtroPorId() {
        componente
            .escreveDescricao('4')
            .validaPesquisaAntTableRow('4')
        return this
    }

    filtroPorDescricao() {
        componente
            .escreveDescricao('AAAA AUTOMAÇÃO GRUPO INTEGRAÇÃO EDITADO')
            .validaPesquisaTitle('AAAA AUTOMAÇÃO GRUPO INTEGRAÇÃO EDITADO')
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
            .validaMensagem('Preencha os campos abaixo para o cadastro do grupo de integração')
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
export default new GrupoDeIntegracaoPage