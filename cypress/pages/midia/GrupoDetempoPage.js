import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'
import url from '../../fixtures/url.json'


class GrupoDetempoPage {
    beforeGrupoDeTempo() {
        login.go()
        login.signin()
        home.tiposDeUso()
        home.midia()
        componente
            .validaURL(url.midia)
            .selecionaIdioma('PT')
            .clicaBotao('Grupo de tempo')
        return this
    }

    pesquisaDescricao() {
        componente
            .escreveDescricao('JorgeTodosOsDias')
            .validaDescriçãoTitle('JorgeTodosOsDias')
        return this
    }

    pesquisaStatus() {
        componente
            .selecionaStatus('Ativo')
            .validaStatusAtivo()
        return this
    }

    botaoNovo() {
        componente
            .clicaBotaoNovo()
            .validatexto('Preencha os campos abaixo para o cadastro do grupo de tempo')
        return this
    }

    botaoVisualizar() {
        componente
            .clicaBotaoHomeVisualizar()
            .validatexto('Detalhes')
        return this
    }

    botaoeditar() {
        componente
            .clicaBotaoHomeEditar()
            .validatexto('Você não pode editar esse grupo de tempo completamente')
        return this
    }
}


export default new GrupoDetempoPage