class DashboardPage {
    periodoPesquisa() {
        cy.get('.ant-picker-input-active > input').click()
        cy.contains('div.ant-picker-cell-inner', '1').click();
        cy.contains('div.ant-picker-cell-inner', '31').click();
        return this
    }
}
export default new DashboardPage