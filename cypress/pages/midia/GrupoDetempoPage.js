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

    criaNovoGrupoDetempo() {
        componente
            .clicaBotaoNovo()
            .escreveDescricao('AAAA grupo de tempo Automação')
        this
            .selecionaDiaDaSemana('Terça', 'Quarta')
            .horarioDeInicio('08:00', '21:43')
        componente.clicaBotaoProximo()
        this
            .motivoDeRestricao('Meus motivos')
            .intervalo('20/12/1968', '20/12/2023')
        componente
            .clicaBotaoSalvar()
            .clicaBotao('Sim')
            .clicaBotao('Ver grupos de tempo')
            .validaDescriçãoTitle('AAAA grupo de tempo Automação')
        return this
    }

    selecionaDiaDaSemana(dia, dia1) {
        cy.get('#createMany_0_MedTimeWeekDef').click({ force: true })
        cy.contains(dia).click({ force: true })
        cy.contains(dia1).click({ force: true })
        return this
    }

    editaDiaDaSemana(dia, dia1) {
        cy.get('.ant-select-selection-overflow').click({ force: true })
        cy.contains(dia).click({ force: true })
        cy.contains(dia1).click({ force: true })
        return this
    }

    limpaDiaDaSemana() {
        cy.get('#createMany_0_MedTimeWeekDef').click({ force: true })
        cy.get('.ant-select-clear').click({ force: true })
        return this
    }

    horarioDeInicio(horarioInicial, horarioFinal) {
        cy.get('#createMany_0_time').eq(0).type(horarioInicial, { force: true }).type(`{enter}`)
        cy.get('.ant-picker-input-active > input').eq(0).type(horarioFinal, { force: true }).type(`{enter}`)
        return this
    }

    editaUmGrupoDeTempo() {
        componente
            .escreveDescricao('AAAA grupo de tempo Automação')
            .clicaBotaoEditar()
            .limpaDescricao()
            .escreveDescricao('AAAA grupo de tempo Editado')
        this
            .limpaDiaDaSemana()
            .editaDiaDaSemana('Segunda', 'Quinta')
        componente
            .selecionaStatus('Inativo')
            .clicaBotaoSalvar()
            .clicaBotaoSim()
            .validaMensagem('Grupo de tempo foi editado com sucesso!')
            .clicaBotao('Ver grupos de tempo')
            .validaDescriçãoTitle('AAAA grupo de tempo Editado')
        return this
    }

    motivoDeRestricao(motivo) {
        cy.get('#createManyRestriction_0_description').type(motivo)
        return this
    }

    intervalo(dataInicial, dataFinal) {
        cy.get('#createManyRestriction_0_date').type(dataInicial, { force: true }).type(`{enter}`)
        cy.get('.ant-picker-input-active > input').type(dataFinal, { force: true }).type(`{enter}`)
        return this
    }

}
export default new GrupoDetempoPage