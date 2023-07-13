class HomePage {

    recentAcessTitle() {
        cy.get('[title="Acessos recentes"]').eq(1).click();
    }

    hometitle() {
        cy.get('[title="Home"]').eq(0).click()
    }

    todosOsServiçosTitle() {
        cy.get('[title="Todos os serviços"]').eq(0).click()
    }

    tiposDeUso() {
        cy.get('.ant-collapse-item-active > .ant-collapse-header > .ant-collapse-header-text').click()
    }

    operacional() {
        cy.get(':nth-child(2) > .ant-collapse-header > .ant-collapse-header-text').click()
    }

    dispositivos() {
        cy.get('[href="/device"] > .ant-row > .ant-typography').click()
        cy.get('#rc-tabs-0-tab-1').should('have.text', 'Dispositivos e conexões')
    }

    transporte() {
        cy.get('[href="/transport"] > .ant-row > .ant-typography').click()
        cy.get('.mastermastertransporttitleSpace-0-2-94').should('have.text', 'Terminal')
    }

}
export default new HomePage