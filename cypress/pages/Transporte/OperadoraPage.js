import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'
import url from '../../fixtures/url.json'

class OperadoraPage {

    beforeOperadora() {
        login.go()
            .signin()
        home.transporte()
        componente
            .validaURL(url.transporte)
            .selecionaIdioma('PT')
            .clicaBotao('Operadora')
        return this
    }

    selecionaConsorcio(consorcio) {
        cy.get('#associationId').click({ force: true })
        cy.contains(consorcio).click({ force: true })
        return this
    }

    selecionaGrupoOperadora(operadora) {
        cy.get('#operatorGroupId').click({ force: true })
        cy.contains(operadora).click({ force: true })
        return this
    }

    selecionaSindicato(sindicato) {
        cy.get('#syndicateId').click({ force: true })
        cy.contains(sindicato).click({ force: true })
        return this
    }

    escreveIdLinha(id) {
        cy.get(':nth-child(1) > .ant-transfer-list-body > .ant-transfer-list-body-search-wrapper > ').type(id)
        cy.get('.ant-input-affix-wrapper ant-transfer-list-search css-12jzuas').click()
    }
}
export default new OperadoraPage
