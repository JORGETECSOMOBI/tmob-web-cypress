import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'
import faker from 'faker-br'

class FeriadoPage {

    beforeFeriado() {
        login.go()
        login.signin()
        home.dispositivos()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('Feriado')
        return this
    }

    cadastraFeriado() {
        componente
            .clicaBotao('Novo feriado')
            .escreveNome(faker.name.findName())
            .selecionaTipo('Federal')
            .selecionaDataInicial('23/10/2021')
            .selecionaDataFinal('12/12/2025')
            .clicaBotaoSalvar()
            .clicaBotaoSim()
            .validaMensagem('Seu feriado foi cadastrado com sucesso')
        return this
    }

    editaFeriado() {
        componente
            .escreveNome('AAAA ')
            .clicaBotaoEditar()
            .limpaCampoNome()
            .escreveNome('AAAA', `${faker.name.findName()}`)
            .clicaBotaoSalvar()
            .clicaBotaoSim()
            .validaMensagem('O feriado foi editada com sucesso')
            .clicaBotao('Feriado')
            .escreveNome('AAAA AUTOMAÇÃO CADASTRAR Editado')
            .clicaBotaoEditar()
            .limpaCampoNome()
            .escreveNome(faker.name.findName())
            .clicaBotaoSalvar()
            .clicaBotaoSim()
            .validaMensagem('O feriado foi editada com sucesso')
        return this
    }

    pesquisaPorId() {
        componente
            .pesquisaNomeId('51')
            .validaPesquisaDataRowKey('51')
        return this
    }

    pesquisaPorNome() {
        componente
            .pesquisaNomeId('AAAA TESTE AUTOMAÇÃO ESTADUAL')
            .validaPesquisaTitle('AAAA TESTE AUTOMAÇÃO ESTADUAL')
        return this
    }

    pesquisaPorTipoExtra() {
        componente
            .selecionaTipo('Extra')
            .validaTextoAusente('Municipal')
            .validaTextoAusente('Estadual')
            .validaTextoAusente('Federal')
        return this
    }

    pesquisaPorTipoMunicipal() {
        componente
            .selecionaTipo('Municipal')
            .validaTextoAusente('Extra')
            .validaTextoAusente('Federal')
            .validaTextoAusente('Estadual')
        return this
    }

    pesquisaPorTipoEstadual() {
        componente
            .selecionaTipo('Estadual')
            .validaTextoAusente('Federal')
            .validaTextoAusente('Municipal')
            .validaTextoAusente('Extra')
        return this
    }

    pesquisaPorTipoFederal() {
        componente
            .selecionaTipo('Federal')
            .validaTextoAusente('Municipal')
            .validaTextoAusente('Estadual')
            .validaTextoAusente('Extra')
        return this
    }

    pesquisaPorStatusAtivo() {
        componente
            .selecionaStatus('Ativo')
            .validaStatusAusente('Inativo')
        return this
    }

    pesquisaPorStatusInativo() {
        componente
            .selecionaStatus('Inativo')
            .validaStatusAusente('Ativo')
        return this
    }

    NovoFeriado() {
        componente
            .clicaBotao('Novo feriado')
            .validaTexto('Preencha os campos abaixo para o cadastro do feriado')
        return this
    }

    visualizar() {
        componente
            .clicaBotaoVisualizar()
            .validaTexto('Detalhes')
        return this
    }

    editar() {
        componente
            .clicaBotaoHomeEditar()
            .validaTexto('Editar')
        return this
    }

    limpaFiltro() {
        componente
            .escreveNomeId()
            .limpaFiltro()
            .validaFunçãolimparFiltroNome()
        return this
    }
}
export default new FeriadoPage