import componente from '../ComponentesPadrao/ComponentesPadraoPage'
import home from '../Home/HomePage'
import login from '../Login/LoginPage'

class PeriodoEstudantilPage {

    beforePeriodoEstudantilPage() {
        login.go()
            .signin()
        home.usuario()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('Período estudantil')
        return this
    }

    criandoPeriodoEstudantil() {
        componente
            .clicaBotaoNovo()
            .escreveDescricao('AAAA AUTOMAÇÃO PERÍODO ESTUDANTIL')
            .clicaBotaoSalvar()
            .clicaBotaoModal('Sim')
            .validaMensagem('Concluido')
        return this
    }

    editandoPeriodoEstudantil() {

        componente
            .escreveDescricao('AAAA AUTOMAÇÃO PERÍODO ESTUDANTIL')
            .clicaBotaoEditar()
            .limpaDescricao()
            .escreveDescricao('AAAA AUTOMAÇÃO PERÍODO ESTUDANTIL EDITADO')
            .clicaBotaoSalvar()
            .clicaBotaoModal('Sim')
            .validaMensagem('Período estudantil foi editado com sucesso!')
        return this
    }

    filtroPorId() {
        componente
            .escreveDescricao('2147483645')
            .validaPesquisaAntTableRow('2147483645')
        return this
    }

    filtroPorDescricao() {
        componente
            .escreveDescricao('Integral')
            .validaPesquisaTitle('Integral')
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
            .validaMensagem('Preencha os campos abaixo para criar um período estudantil')
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

    botaoLimpaFiltro(descricao) {
        componente
            .escreveDescricao(descricao)
            .limpaFiltro()
        return this
    }
}
export default new PeriodoEstudantilPage
