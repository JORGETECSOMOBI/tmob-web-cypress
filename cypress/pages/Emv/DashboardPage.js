class DashboardPage {
    periodoPesquisa(dias) {
        cy.get('.ant-picker-input-active > input').click({ force: true })
        cy.get('.ant-picker-presets > ul > ').contains(dias).click({ force: true })
        return this
    }
}
export default new DashboardPage