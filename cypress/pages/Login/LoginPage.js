class LoginPage {

    go() {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        });
        cy.visit('/')
        return this
    }

    signin() {
        cy.get('#amplify-id-0').type('jorge.luiz@tecsomobi.com.br')
        cy.get('#amplify-id-2').type('Jotateste@123')
        cy.get('.amplify-button--primary').click()
        return this
    }
}
export default new LoginPage