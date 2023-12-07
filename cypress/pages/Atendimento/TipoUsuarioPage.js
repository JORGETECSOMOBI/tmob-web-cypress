import componente from '../ComponentesPadrao/ComponentesPadraoPage'
import home from '../Home/HomePage'
import login from '../Login/LoginPage'
import faker from 'faker-br'

class TipoUsuarioPage {

    beforeTipoDeUsuario() {
        login.go()
            .signin()
        home.usuario()     
        componente
            .selecionaIdioma('PT')
            .clicaBotao('Tipo de Usuário')
        return this
    }

    criandoNovoTipoUsuario() {
        componente
            .clicaBotao('Novo')
        this
            .escreveDescricaoTipoUsuario()
            .idadeMinima('1')
            .idadeMaxima('120')
        componente
            .selecionaTipo('Funcionário')
            .clicaBotao('Salvar')
            .clicaBotaoModal('Salvar')
            .validaMensagem('Tipo de usuário foi criado com sucesso!')
        return this
    }

    tentativaDeCriarUsuáioComDescricaoInvalida() {
        componente
        .clicaBotao('Novo')
    this
        .idadeMinima('1')
        .idadeMaxima('120')
    componente
        .escreveDescricao('tipousuárioautomaçãoteste')
        .selecionaTipo('Funcionário')
        .clicaBotao('Salvar')
        .clicaBotaoModal('Salvar')
        .validaMensagem('A descrição inserida já existe em Tipo de usuário.')
        return this
    }

    editandoTipoUsuario() {
        componente
            .pesquisa('Geraldo')
            .clicaBotao('Editar')
        this
            .limpaIdadeMinima()
            .idadeMinima('1')
            .limpaIdadeMaxima()
            .idadeMaxima('120')
        componente
            .limpaDescricao()
        this
            .escreveDescricaoTipoUsuario()
        componente
            .selecionaStatus('Inativo')
            .clicaBotao('Salvar')
            .clicaBotaoModal('Salvar')
            .validaMensagem('Tipo de usuário foi editado com sucesso!')
        return this
    }

    tentativaDeEditarNovoUsuarioDescricaoinvalida() {
        componente
            .pesquisa('Geraldo')
            .clicaBotao('Editar')
        this
            .limpaIdadeMinima()
        this
            .idadeMinima('1')
            .limpaIdadeMaxima()
            .idadeMaxima('120')
        componente
            .limpaDescricao()
        componente
            .escreveDescricao('tipousuárioautomaçãoteste')
            .selecionaStatus('Ativo')
            .clicaBotao('Salvar')
            .clicaBotaoModal('Salvar')
            .validaMensagem('A descrição inserida já existe em Tipo de usuário.')
        return this
    }

    descricao(descricao) {
        cy.get('#description').type(descricao)
        return this
    }

    escreveDescricaoTipoUsuario() {
        const nome = 'Geraldo'
        const complemento = faker.name.findName()
        const descricao = `${nome} ${complemento}`
        cy.get('#description').type(descricao, { force: true }).wait(1000)
        return this
    }

    botaoNovoTipousuario() {
        cy.get('span.anticon > .ant-btn').click()
        return this
    }

    idadeMinima(idadeMin) {
        cy.get('#minimalAge', { force: true }).type(idadeMin, { force: true })
        return this
    }

    limpaIdadeMinima() {
        cy.get('#minimalAge', { force: true }).clear({ force: true })
        return this
    }

    idadeMaxima(idadeMax) {
        cy.get('#maximumAge', { force: true }).type(idadeMax, { force: true })
        return this
    }

    limpaIdadeMaxima() {
        cy.get('#maximumAge', { force: true }).clear({ force: true })
        return this
    }

    abreSelectTipo() {
        cy.get('#type').click({ force: true })
        return this
    }

    escolheTipoUsuario(tipo) {
        cy.contains(tipo, { force: true }).click({ force: true })
        return this
    }

    escreveComentario(comentario) {
        cy.get('#comment').type(comentario)
        return this
    }

    checaStatusCriacaoUsuarioSim() {
        cy.get('#checkStatusOnUserCreate > :nth-child(1) > .ant-radio > .ant-radio-input').click()
        return this
    }

    checaStatusCriacaoUsuarioNao() {
        cy.get('#checkStatusOnUserCreate > .ant-radio-wrapper-checked > .ant-radio > .ant-radio-input').click()
        return this
    }

    checaStatusCriacaoMidiaSim() {
        cy.get('#checkStatusOnMediaCreate > :nth-child(1) > .ant-radio > .ant-radio-input').click()
        return this
    }

    checaStatusCriacaoMidiaNao() {
        cy.get('#checkStatusOnMediaCreate > .ant-radio-wrapper-checked > .ant-radio > .ant-radio-input').click()
        return this
    }

    salvaNovoTipoDeUsuario() {
        cy.contains('Salvar').click({ force: true })
        return this
    }

    confirmaCriacaoNovoTipoUsuario() {
        cy.get('.ant-modal-confirm-btns > .ant-btn-primary > span').click()
        return this
    }

    validaMensagemDeSucessoCriacaoTipousuario(mensagem) {
        cy.get('.ant-result-title').should('have.text', mensagem)
    }

    pesquisaTipoUsuario(Descricao) {
        cy.get('#description').type(Descricao)
        return this
    }

    editaTipoUsuario() {
        cy.contains('Editar').click()
        return this
    }

    limpaDescricao() {
        cy.get('#description').clear()
        return this
    }

    limpaIdadeMinima() {
        cy.get('#minimalAge', { force: true }).clear({ force: true })
        return this
    }

    limpaIdadeMaxima() {
        cy.get('#maximumAge', { force: true }).clear({ force: true })
        return this
    }

    limpaComentario() {
        cy.get('#comment').clear()
        return this
    }

    confirmaEdicaoTipoUsuario() {
        cy.get('.ant-modal-confirm-btns > .ant-btn-primary > span').click()
        return this
    }

    validaMensagemDeSucessoEdicaoTipousuario(mensagem) {
        cy.get('.ant-result-title').should('have.text', mensagem)
        return this
    }
}
export default new TipoUsuarioPage