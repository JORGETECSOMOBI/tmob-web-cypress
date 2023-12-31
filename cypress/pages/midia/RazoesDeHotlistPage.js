import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'
import url from '../../fixtures/url.json'

class RazoesDeHotlistPage {
    beforeRazoesHotlist() {
        login.go()
        login.signin()
        home.tiposDeUso()
        home.midia()
        componente
            .validaURL(url.midia)
            .selecionaIdioma('PT')
            .clicaBotao('Razões de Hotlist')
        return this
    }

    criandoRazaoDeHotlist() {
        componente
            .clicaBotaoNovo()
            .escreveDescricao('AAA AUTOMAÇÃO HOTLIST')
        this
            .filtroAcao('Bloqueado')
            .diasParaExpiracao('50')
            .permiteTranferencia('Não')
            .permiteSegundaVia('Não')
            .publico('Não')
        componente
            .selecionaStatus('Inativo')
            .clicaBotaoSalvar()
            .clicaBotaoModal('Sim')
            .validaTexto('Concluido')
        return this
    }

    editandoRazaoDeHotlist() {
        componente
            .escreveDescricao('AAA AUTOMAÇÃO HOTLIST')
            .clicaBotaoEditar()
            .limpaDescricao()
            .escreveDescricao('AAA AUTOMAÇÃO HOTLIST editado')
        this
            .limpaDiasParaExpiracao()
            .diasParaExpiracao('25')
            .permiteTranferencia('Sim')
            .permiteSegundaVia('Sim')
            .publico('Sim')
        componente
            .selecionaStatus('Inativo')
            .clicaBotaoSalvar()
            .clicaBotaoModal('Sim')
            .validaTexto('Hotlist foi editado com sucesso!')
        return this
    }

    permiteTranferencia(permissao) {
        cy.get('#allowCreditTransfer').contains(permissao).click()
        return this
    }

    permiteSegundaVia(permissao) {
        cy.get('#allowDuplicates').contains(permissao).click()
        return this
    }

    publico(permissao) {
        cy.get('#isPublic').contains(permissao).click()
        return this
    }

    diasParaExpiracao(dias) {
        cy.get('#expirationDays').type(dias)
        return this
    }

    limpaDiasParaExpiracao() {
        cy.get('#expirationDays').clear()
        return this
    }

    testandoFiltroId() {
        componente.escreveDescricao('27')
        return this
    }

    testandoFiltroDescrição() {
        componente.escreveDescricao('AAAAA AUTOMAÇÃO')
        return this
    }

    testandoFiltroAcaoBloquear() {
        this.filtroAcao('Bloquear')
        return this
    }

    testandoFiltroAcaoDesbloquear() {
        this.filtroAcao('Desbloquear')
        return this
    }

    testandoFiltroAcaoRazaoDeHotlist() {
        this.filtroAcao('hotlistReason.detail.action.permanent')
        return this
    }

    testandoFiltroStatusAtivo() {
        componente
            .selecionaStatus('Ativo')
            .validaStatusAusente('Inativo')
        return this
    }

    testandoFiltroStatusInativo() {
        componente
            .selecionaStatus('Inativo')
            .validaStatusAusente('Ativo')
        return this
    }

    testandoBotaoNovo() {
        componente
            .clicaBotaoNovo()
            .validaTexto('Preencha os campos abaixo para criar um hotlist')
        return this
    }

    testandoBotaoEditar() {
        componente
            .clicaBotaoEditar()
            .validaTexto('Editar')
        return this
    }

    testandoBotaoVisualizar() {
        componente
            .clicaBotaoVisualizar()
            .validaTexto('Detalhes')
        return this
    }

    filtroAcao(acao) {
        cy.get('#action').click({ force: true })
        cy.contains(acao).click({ force: true })
        return this
    }
}
export default new RazoesDeHotlistPage