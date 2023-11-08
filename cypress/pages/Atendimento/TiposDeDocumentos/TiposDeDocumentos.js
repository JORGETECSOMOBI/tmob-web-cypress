import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
import url from '../../../fixtures/url.json'
import usuario from '../../../pages/Atendimento/Usuario/UsuarioHomePage'
import faker from 'faker-br'

class TiposDeDocumentos {

    beforeTiposDocumentos() {
        login.go()
            .signin()
        home.usuario()
        componente.validaURL(url.usuario)
        usuario.acessandoTelaTipoDeDocumentos()
        componente.validaURL(url.tipoDocumento)
            .selecionaIdioma('PT')
        return this
    }

    selecionaTipoDocumneto(tipo) {
        cy.get('#role').click({ force: true })
        cy.get('.ant-select-item-option-content').contains(tipo).click({ force: true })
        return this
    }

    selecionaObrigatoriedade(obrigatoriedade) {
        cy.get('.ant-select-selection-overflow').click({ force: true })
        cy.get('.ant-select-item-option-content').contains(obrigatoriedade).click({ force: true })
        return this
    }

    defineMascara() {
        cy.get('#formatMask', { force: true }).type('XXX000XXX.000', { force: true })
        return this
    }

    defineComplementoNao() {
        cy.get('#isComplementRequired >').eq(1).click()
        return this
    }

    defineDocumentoPrincipalNao() {
        cy.get('#isMain >').eq(1).click()
        return this
    }

    criaNovoTipoDocumento() {
        componente
            .clicaBotao('Novo')
            .escreveDescricao(faker.name.findName())
        this.selecionaTipoDocumneto('Organização')
            .selecionaObrigatoriedade('Empresa')
            .defineMascara()
            .defineComplementoNao()
            .defineDocumentoPrincipalNao()
        componente.selecionaStatus('Inativo')
            .clicaBotao('Salvar')
            .clicaBotaoModal('Salvar')
            .validaMensagem('Tipo de documento foi criado com sucesso!')
    }
}
export default new TiposDeDocumentos