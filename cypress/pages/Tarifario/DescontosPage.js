import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'
import regras from '../Tarifario/RegrasPage'

class DescontosPage {

    beforeDescontos() {
        login
            .go()
            .signin()
        home
            .tiposDeUso()
            .tarifario()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('Descontos')
        return this
    }

    filtroPorId() {
        componente
            .escreveDescricao('AAAA DESCONTO AUTOMAÇÃO')
            .validaPesquisaTitle('AAAA DESCONTO AUTOMAÇÃO')
            .validaPesquisaDataRowKey('52')
        return this
    }

    filtroPorNome() {
        componente
            .escreveDescricao('50')
            .validaPesquisaTitle('Bototoeira')
            .validaPesquisaDataRowKey('50')
        return this
    }

    filtroPorStatusAtivo() {
        regras.filtroPorStatusAtivo()
        return this
    }

    filtroPorStatusInativo() {
        regras.filtroPorStatusInativo()
        return this
    }

    botaoNovo() {
        componente
            .clicaBotaoNovo()
            .validaTexto('Preencha os campos abaixo para o cadastro do desconto')
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
export default new DescontosPage