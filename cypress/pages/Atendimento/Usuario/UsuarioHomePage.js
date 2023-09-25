import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
import usuario from '../../../pages/Atendimento/Usuario/UsuarioHomePage'
import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import url from '../../../fixtures/url.json'

class UsuarioHome {
    beforeUsuario() {
        login.go()
            .signin()
        home.usuario()
        componente.validaURL(url.urlUsuario)
            .selecionaIdioma('PT')
        return this
    }

    beforePcd() {
        login.go()
            .signin()
        home.usuario()
        componente.validaURL(url.urlUsuario)
        usuario.acessandoTelaEquipamentoPcD()
        componente.validaURL(url.urlPcd)
            .selecionaIdioma('PT')
        return this
    }

    beforeOrg() {
        login.go()
            .signin()
        home.usuario()
        componente.validaURL(url.urlUsuario)
        usuario.acessandoTelaOrganizaçao()
        componente.validaURL(url.urlOrg)
            .selecionaIdioma('PT')
        return this
    }

    beforePostosAtendimento() {
        login.go()
            .signin()
        home.usuario()
        componente.validaURL(url.urlUsuario)
        usuario.acessandoTelaPostosDeAtendimento()
        componente.validaURL(url.urlPostoAtendimento)
            .selecionaIdioma('PT')
        return this
    }

    beforeTipoDeUsuario() {
        login.go()
            .signin()
        home.usuario()
        componente.validaURL(url.urlUsuario)
        usuario.acessandoTelaTiposDeUsuario()
        componente.validaURL(url.urlTipoUsuario)
            .selecionaIdioma('PT')
        return this
    }

    beforePeriodoEstudantil() {
        login.go()
            .signin()
        home.usuario()
        componente.validaURL(url.urlUsuario)
        usuario.acessandoTelaPeriodoEstudantil()
        componente.validaURL(url.urlPeriodoEstudantil)
            .selecionaIdioma('PT')
        return this
    }

    beforeTipoEstudante() {
        login.go()
            .signin()
        home.usuario()
        componente.validaURL(url.urlUsuario)
        usuario.acessandoTelaTipoDeEstudante()
        componente.validaURL(url.urlTipoEstudante)
            .selecionaIdioma('PT')
        return this
    }

    beforeNivelEscolaridade() {
        login.go()
            .signin()
        home.usuario()
        componente.validaURL(url.urlUsuario)
        usuario.acessandoTelaNivelDeEscolaridade()
        componente.validaURL(url.urlEscolaridade)
            .selecionaIdioma('PT')
        return this
    }

    beforeTiposDocumentos() {
        login.go()
            .signin()
        home.usuario()
        componente.validaURL(url.urlUsuario)
        usuario.acessandoTelaTipoDeDocumentos()
        componente.validaURL(url.urlTipoDocumento)
            .selecionaIdioma('PT')
        return this
    }

    beforeIcd() {
        login.go()
            .signin()
        home.usuario()
        componente.validaURL(url.urlUsuario)
        usuario.acessandoTelaICD()
        componente.validaURL(url.urlIcd)
            .selecionaIdioma('PT')
        return this
    }

    ValidandoAcessoTelaUsuario() {
        cy.get('.mastermasteruserheader-0-2-58 > .ant-typography').should('have.text', 'Pesquisa de usuário')
        return this
    }

    acessandoTelaOrganizaçao() {
        cy.get('a[href="/user/organizations"]').click({ force: true })
        return this
    }

    acessandoTelaPostosDeAtendimento() {
        cy.get('a[href="/user/servicestations"]').click({ force: true })
        return this
    }

    acessandoTelaTiposDeUsuario() {
        cy.get('a[href="/user/userTypes"]').click({ force: true })
        return this
    }

    acessandoTelaEquipamentoPcD() {
        cy.get('a[href="/user/userDisabilityEquipments"]').click({ force: true })
        return this
    }

    acessandoTelaPeriodoEstudantil() {
        cy.get('a[href="/user/userStudentPeriods"]').click({ force: true })
    }

    ValidandoTelaPeriodoEstudantil(mensagem) {
        cy.get('.ant-row-start > .ant-typography').should('have.text', mensagem)
        return this
    }

    acessandoTelaTipoDeEstudante() {
        cy.get('a[href="/user/userStudentTypes"]').click({ force: true })
        return this
    }

    acessandoTelaNivelDeEscolaridade() {
        cy.get('a[href="/user/userStudentLevels"]').click({ force: true })
        return this
    }

    acessandoTelaTipoDeDocumentos() {
        cy.get('a[href="/user/documentTypes"]').click({ force: true })
        return this
    }

    acessandoTelaICD() {
        cy.get('a[href="/user/usericds"]').click({ force: true })
        return this
    }
}
export default new UsuarioHome