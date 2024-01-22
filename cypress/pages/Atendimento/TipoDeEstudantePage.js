import componente from '../ComponentesPadrao/ComponentesPadraoPage'
import home from '../Home/HomePage'
import login from '../Login/LoginPage'

class TipoDeEstudantePage {

    beforeTipoDeestudante() {
        login.go()
            .signin()
        home.usuario()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('Tipo de estudante')
        return this
    }

    criandoTipoDeEstudante() {
        componente
            .clicaBotaoNovo()
            .escreveDescricao('AAAA AUTOMAÇÃO TIPO DE ESTUDANTE')
            .clicaBotaoSalvar()
            .clicaBotaoModal('Sim')
            .validaMensagem('Concluido')
        return this
    }

    editandoTipoDeEstudante() {
        componente
            .escreveDescricao('AAAA AUTOMAÇÃO TIPO DE ESTUDANTE')
            .clicaBotaoEditar()
            .limpaDescricao()
            .escreveDescricao('AAAA AUTOMAÇÃO TIPO DE ESTUDANTE EDITADO')
            .clicaBotaoSalvar()
            .clicaBotaoModal('Sim')
            .validaMensagem('Tipo de estudante foi editado com sucesso!')
        return this
    }

    filtroPorId() {
        componente
            .escreveDescricao('2147483646')
            .validaPesquisaAntTableRow('2147483646')
        return this
    }

    filtroPorDescricao() {
        componente
            .escreveDescricao('Universitário')
            .validaPesquisaTitle('Universitário')
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
            .validaMensagem('Preencha os campos abaixo para criar um tipo de estudante')
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
            .escreveDescricao('Universitário')
            .limpaFiltro()
        return this
    }
}
export default new TipoDeEstudantePage