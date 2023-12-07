import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'
import url from '../../fixtures/url.json'

class GruposDeRelatoriosPage {
    beforeGruposDeRelatorios() {
        login.go()
        login.signin()
        home.tiposDeUso()
        home.midia()
        componente
            .validaURL(url.midia)
            .selecionaIdioma('PT')
            .clicaBotao('Grupos de Relatório')
        return this
    }

    criandoUmNovogruporelatorios() {
        componente
            .clicaBotaoNovo()
            .escreveDescricao('AAAA Grupo de relatórios automação')
            .clicaBotaoProximo()
            .clicaBotaoSim()
            .validaMensagem('Seu Grupo de Relatório foi cadastrado com sucesso')
            .clicaBotao('Ver Grupos de Relatório')
            .validaDescriçãoTitle('AAAA Grupo de relatórios automação')
        return this
    }

    editandoUmGrupoDerelatorios() {
        componente
            .escreveDescricao('AAAA Grupo de relatórios automação')
            .clicaBotaoEditar()
            .limpaDescricao()
            .escreveDescricao('AAAA Grupo de relatórios editado')
            .selecionaStatus('Inativo')
            .clicaBotaoSalvar()
            .clicaBotaoSim()
            .validaMensagem('Grupo de Relatório foi editado com sucesso!')
            .clicaBotao('Ver Grupos de Relatório')
            .validaDescriçãoTitle('AAAA Grupo de relatórios editado')
        return this
    }

    pesquisaPorDescricao() {
        componente
            .escreveDescricao('GRUPO RELATORIO')
            .validaDescriçãoTitle('GRUPO RELATORIO ')
        return this
    }

    testandoFiltroStatus() {
        componente
            .selecionaStatus('Inativo')
            .validaStatusAusente('Ativo')
            .selecionaStatus('Ativo')
            .validaStatusAusente('Inativo')
        return this
    }

    botaoNovo() {
        componente
            .clicaBotaoNovo()
            .validatexto('Novo')
        return this
    }

    visualizar() {
        componente
            .clicaBotaoHomeVisualizar()
            .validatexto('Detalhes')
        return this
    }

    editar() {
        componente
            .clicaBotaoEditar()
            .validatexto('Editar')
        return this
    }

    limparFiltros() {
        componente
            .selecionaStatus('Inativo')
            .escreveDescricao('AAAA grupos')
            .clicaBotao('Limpar filtro')
        return this
    }
}
export default new GruposDeRelatoriosPage