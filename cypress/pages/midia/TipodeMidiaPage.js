import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'
import url from '../../fixtures/url.json'
import usuario from '../../pages/Atendimento/Usuario/cadastroPage'
import faker from 'faker-br'

class TipoDeMidiaPage {
    beforeTipoDeMidia() {
        login.go()
        login.signin()
        home.tiposDeUso()
        home.midia()
        componente
            .validaURL(url.midia)
            .selecionaIdioma('PT')
            .clicaBotao('Tipo de mídia')
        return this
    }

    criandoNovotipoDeMidia() {
        const nome = 'AAAA TIPO DE MIDIA AUTOMAÇÃO '
        const sobrenome = faker.name.lastName()
        componente
            .clicaBotaoNovo()
            .escreveDescricao(`${nome} ${sobrenome}`)
        usuario
            .selecionaTipoUsuario('Estudante')
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
        const nome = 'AAAA TIPO DE MIDIA AUTOMAÇÃO '
        const sobrenome = faker.name.lastName()
        componente
            .escreveDescricao(`${nome} ${sobrenome}`)
            .clicaBotaoEditar()
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
            .escreveDescricao('AAAA TIPO DE MIDIA AUTOMAÇÃO')
            .validaDescricaoDataRowKey('AAAA TIPO DE MIDIA AUTOMAÇÃO')
            .selecionaTipo('Estudante')
        return this
    }

    filtroPorId() {
        componente
            .escreveDescricao('31')
            .validaDescricaoAntTableRow('31')
        return this
    }

    filtroPorTamanho() {
        this
            .filtrandoPorTamnho('4 KB')
        componente
            .validaDescricaoAntTableRow('4')
        return this
    }

    filtroPorTag() {
        this
            .filtrandoPorTag('mifare2GO')
        componente
            .validaDescricaoAntTableRow('mifare2GO')
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
            .validatexto('Editar')

        return this
    }

    testandobotaoVisualizar() {
        componente
            .clicaBotaoHomeVisualizar()
            .validatexto('Detalhes')
        return this
    }

    TestandoBotaoNovo() {
        componente
            .clicaBotaoNovo()
            .validatexto('Preencha os campos abaixo para o cadastro do tipo de mídia')
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