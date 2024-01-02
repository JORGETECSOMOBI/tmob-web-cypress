import login from '../Login/LoginPage'
import home from '../Home/HomePage'
import componente from '../ComponentesPadrao/ComponentesPadraoPage'

class ParametrosPage {

    beforeParametros() {
        login.go()
        login.signin()
        home.dispositivos()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('Parâmetros')
    }

    pesquisaTipo(tipo) {
        cy.get('#type').type(tipo)
        return this
    }

    pesquisaPorDominio() {
        cy.get('#type').type('depot')
        return this
    }

    pesquisaPorKey() {
        cy.get('#type').type('ctfAuttarCode')
        return this
    }

    pesquisaPorNome() {
        cy.get('#type').type('Código AUTTTAR')
        return this
    }

    pesquisaPorDescricao() {
        cy.get('#type').type('Usuário AUTTTAR')
        return this
    }
}
export default new ParametrosPage