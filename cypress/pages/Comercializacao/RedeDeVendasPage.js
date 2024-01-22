import login from '../Login/LoginPage'
import home from '../Home/HomePage'
import componente from '../ComponentesPadrao/ComponentesPadraoPage'

class RedeDeVendasPage {

    beforeRedeDeVendas() {
        login.go()
        login.signin()
        home.comercializacao()
        componente
            .clicaBotao('Rede de vendas')
            .selecionaIdioma('PT')
        return this
    }

    filtroPorId() {
        componente
            .escreveNome('149')
            .validaPesquisaDataRowKey('149')
        return this
    }

    filtroPorDescricao() {
        componente
            .escreveNome('ClientId Secret')
            .validaPesquisaTitle('ClientId Secret ')
        return this
    }

    filtroPorTipoOperador() {
        componente
            .selecionaTipo('Operador')
            .validaPesquisaAntTableCell('Operador')
    }

    filtroPorTipoGateway() {
        componente
            .selecionaTipo('Gateway')
            .validaPesquisaAntTableCell('Gateway')
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
            .validaMensagem('Novo')
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
            .escreveNome('Testando limpar filtro')
            .limpaFiltro()
        return this
    }
}
export default new RedeDeVendasPage