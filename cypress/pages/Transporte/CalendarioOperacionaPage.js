import login from '../Login/LoginPage'
import home from '../Home/HomePage'
import componente from '../ComponentesPadrao/ComponentesPadraoPage'

class CalendarioOperacionalPage {

    beforeCalendarioOperacional() {
        login
            .go()
            .signin()
        home
            .transporte()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('Calendário operacional')
        return this
    }

    testandoFiltroId() {
        componente
        .pesquisa('18')
        .selecionaStatus('Ativo')
        return this
    }

    testandoFiltroStatus() {
        componente
        .selecionaStatus('Ativo')
        .validaStatusAusente('Inativo')
        return this
    }

    testandoBotaoVisualizar() {
        componente
        .pesquisa('18')
        .clicaBotao('Visualizar')
        .validaTexto('Detalhes')
        return this
    }

    testandoBotaoEditar() {
        componente
        .pesquisa('18')
        .clicaBotao('Editar')
        .validaTexto('Editar')
        return this
    }

    testandoBotaoLimparFiltros() {
        componente
        .pesquisa('Automação')
        .selecionaStatus('Inativo')
        .clicaBotao('Limpar filtro')
        .validaFuncaolimparFiltro()
        return this
    }
}
export default new CalendarioOperacionalPage