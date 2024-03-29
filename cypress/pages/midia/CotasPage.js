import login from '../Login/LoginPage'
import home from '../Home/HomePage'
import componente from '../ComponentesPadrao/ComponentesPadraoPage'
import url from '../../fixtures/url.json'

class CotasPage {
    beforeCotas() {
        login.go()
        login.signin()
        home.tiposDeUso()
        home.midia()
        componente
            .validaURL(url.midia)
            .selecionaIdioma('PT')
            .clicaBotao('Cotas')
        return this
    }

    criandoNovaCota() {
        componente
            .clicaBotaoNovo()
            .escreveDescricao('AAAA Cota Automação')
            .selecionaTipo('Por linha')
        this
            .limpaInicioMes()
            .inicioMes('15')
            .multiplicador('5')
        componente.selecionaStatus('Inativo')
            .clicaBotaoSalvar()
            .clicaBotaoSim()
            .validaTexto('Concluido')
            .clicaBotao('Ver cotas')
        return this
    }

    editandoCota() {
        componente
            .escreveDescricao('AAAA Cota Automação')
            .clicaBotaoEditar()
            .limpaDescricao()
            .escreveDescricao('AAAA Cota editada')
            .selecionaTipo('Por valor')
        this
             .valorMensal('100')
            .limpaInicioMes()
            .inicioMes('10')

       
        componente.selecionaStatus('Ativo')
            .clicaBotaoSalvar()
            .clicaBotaoSim()
            .validaTexto('Cota foi editada com sucesso!')
        return this
    }

    valorMensal(valor) {
        cy.get('#value').type(valor)
        return this
    }

    limpaValorMensal() {
        cy.get('#value').clear()
        return this
    }


    multiplicador(numero) {
        cy.get('#quantityMultiplier').type(numero)
        return this
    }

    inicioMes(dia) {
        cy.get('#monthStartDay').type(dia)
        return this
    }

    limpaInicioMes() {
        cy.get('#monthStartDay').clear()
        return this
    }

    filtrandoPorDescricao() {
        componente
            .escreveDescricao('AAAA Cota Automação editada')
            .validaPesquisaAntTableRow('AAAA Cota Automação editada')
        return this
    }

    filtrandoPorValor() {
        componente
            .escreveDescricao('valor')
            .validaPesquisaAntTableRow('Value')
        return this
    }

    filtrandoPorLinha() {
        componente
            .escreveDescricao('Linha')
            .validaPesquisaAntTableRow('Line')
        return this
    }

    filtrandoPorStatusInativo() {
        componente
            .selecionaStatus('Inativo')
            .validaStatusAusente('Ativo')
        return this
    }

    filtrandoPorStatusAtivo() {
        componente
            .selecionaStatus('Ativo')
            .validaStatusAusente('inativo')
        return this
    }

    clicandoBotaoNovo() {
        componente
            .clicaBotaoNovo()
            .validaTexto('Preencha os campos abaixo para o cadastro da cota')
        return this
    }

    botaoEditar() {
        componente
            .clicaBotaoEditar()
            .validaTexto('Editar')
        return this
    }

    botaoVisualizar() {
        componente
            .clicaBotaoVisualizar()
            .validaTexto('Detalhes')
        return this
    }
}
export default new CotasPage