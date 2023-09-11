class SelectPage{

    selectLinguagem(lingua) {
        cy.get('.ant-select-selection-item > .ant-row').click()
        cy.contains(lingua).click()
    }
}
export default new SelectPage