class LoginPage {

    go() {
        cy.on('uncaught:exception', (err, runnable) => {
            // Retorne false para evitar que o Cypress falhe automaticamente
            return false;
        });
        cy.visit('/')
    }

    signin() {
        cy.get('#amplify-id-0').type('jorge.luiz@tecsomobi.com.br')
        cy.get('#amplify-id-2').type('Jotateste@123')
        cy.get('.amplify-button--primary').click()
    }
}
export default new LoginPage