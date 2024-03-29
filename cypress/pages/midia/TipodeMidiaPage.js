import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'
import url from '../../fixtures/url.json'
import usuario from '../../pages/Atendimento/UsuarioPage'
import faker from 'faker-br'

class TipoDeMidiaPage {
    beforeTipoDeMidia() {
        login.go()
        login.signin()
        home.tiposDeUso()
        home.midia()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('Tipo de mídia')
        return this
    }

    criandoNovotipoDeMidia() {
        componente
            .clicaBotaoNovo()
            .escreveDescricao('AAAA MIDIA AUTOMAÇÃO')
        usuario
            .selecionaTipoUsuario('AAAA AUTOMAÇÃO ESTUDANTE')
        this
            .filtrandoPorTamanho('4')
            .filtrandoPorTag('mifare2GO')
            .selecionaProduto('79')
            .quantosDias('20')
        componente
            .clicaBotaoSalvar()
            .clicaBotaoModal('Sim')
        return this
    }

    editandoTipoDeMidia() {
        const nome = 'AAAA MIDIA AUTOMAÇÃO'
        const sobrenome = faker.name.firstName()
        componente
            .escreveDescricao(nome)
            .clicaBotaoEditar()
            .limpaDescricao()
            .escreveDescricao(`${nome} ${sobrenome}`)
            .clicaBotaoSalvar()
        this
            .clicaBotaoModalSim()
        componente
            .validaMensagem('Concluído')
        return this
    }

    clicaBotaoModalSim() {
        cy.get('.ant-modal-confirm-btns > .ant-btn-primary').click({ force: true })
        return this
    }

    quantosDias(dias) {
        cy.get('#products_0_manyDays').type(dias)
        return this
    }

    selecionaProduto(produto) {
        cy.get('#products_0_selectProduct').type(produto)
        cy.get('.ant-select-item-option-content').contains(produto).click({ force: true })
        return this
    }

    filtroDescricao() {
        componente
            .escreveDescricao('operator')
            .validaPesquisaDataRowKey('operator')
        return this
    }

    filtroPorId() {
        componente
            .escreveDescricao('31')
            .validaPesquisaAntTableRow('31')
        return this
    }

    filtroPorTamanho() {
        this
            .filtrandoPorTamanho('4 KB')
        componente
            .validaPesquisaAntTableRow('4')
        return this
    }

    filtroPorTag() {
        this
            .filtrandoPorTag('mifare2GO')
        componente
            .validaPesquisaAntTableRow('mifare2GO')
        return this
    }

    filtroPorStatusInativo() {
        componente
            .selecionaStatus('Inativo')
            .validaStatusAusente('Ativo')
        return this
    }

    filtroPorStatusAtivo() {
        componente
            .selecionaStatus('Ativo')
            .validaStatusAusente('inativo')
        return this
    }

    testandoBotaoEditar() {
        componente
            .clicaBotaoHomeEditar()
            .validaTexto('Editar')

        return this
    }

    testandobotaoVisualizar() {
        componente
            .clicaBotaoHomeVisualizar()
            .validaTexto('Detalhes')
        return this
    }

    TestandoBotaoNovo() {
        componente
            .clicaBotaoNovo()
            .validaTexto('Preencha os campos abaixo para o cadastro do tipo de mídia')
        return this
    }

    filtrandoPorTamanho(tamanho) {
        cy.get('#sizeInKB').click({ force: true })
        cy.contains(tamanho, { force: true }).click({ force: true })
        return this
    }

    filtrandoPorTag(tag) {
        cy.get('#tagType').click({ force: true })
        cy.get('[title]').contains(tag, { force: true }).click({ force: true })
        return this
    }
}
export default new TipoDeMidiaPage