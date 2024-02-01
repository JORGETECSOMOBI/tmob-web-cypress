import login from '../Login/LoginPage'
import home from '../Home/HomePage'
import componente from '../ComponentesPadrao/ComponentesPadraoPage'

class MotivosDeSangriaPage {

    beforeMotivosDeSangria() {
        login.go()
        login.signin()
        home.comercializacao()
        componente
            .clicaBotao('Motivos de Sangria')
            .selecionaIdioma('PT')
        return this
    }

    criandoMotivosDeSangriaDebito() {
        componente
            .clicaBotaoNovo()
            .escreveDescricao('AAAA SANGRIA DÉBITO')
            .selecionaTipo('Débito')
            .clicaBotaoSalvar()
            .clicaBotaoModal('Salvar')
            .validaMensagem('Movitos de sangria foi criado com sucesso!')
        return this
    }

    CriandoMotivosDeSangriaCredito() {
        componente
            .clicaBotaoNovo()
            .escreveDescricao('AAAA SANGRIA CRÉDITO')
            .selecionaTipo('Crédito')
            .clicaBotaoSalvar()
            .clicaBotaoModal('Salvar')
            .validaMensagem('Movitos de sangria foi criado com sucesso!')
        return this
    }

    editandoMotivosDeSangria() {
        componente
            .escreveDescricao('AAAA SANGRIA CRÉDITO')
            .clicaBotaoEditar()
            .limpaDescricao()
            .escreveDescricao('AAAA SANGRIA EDITADA')
            .clicaBotaoSalvar()
            .clicaBotaoModal('Salvar')
            .validaMensagem('Motivos de sangria foi editado com sucesso!')
        return this
    }

    filtroPorId() {
        componente
            .escreveDescricao('10')
        cy.get('[data-row-key] > :nth-child(1)').should('have.text', '10')
        return this
    }

    filtroPorTipoCredito() {
        componente
            .selecionaTipo('Crédito')
            .validaPesquisaAntTableCell('Crédito')
        return this
    }

    filtroPorTipoDebito() {
        componente
            .selecionaTipo('Débito')
            .validaPesquisaAntTableCell('Débito')
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
            .validaMensagem('Preencha os campos abaixo para criar uma movitos de sangria')
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
        cy.get('#description').should('have.text', '')
        return this
    }
}
export default new MotivosDeSangriaPage