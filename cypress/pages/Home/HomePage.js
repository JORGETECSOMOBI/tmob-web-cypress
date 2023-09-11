class HomePage {

    recentAcessTitle() {
        cy.get('[title="Acessos recentes"]').eq(1).click()
        return this
    }

    hometitle() {
        cy.get('a.ant-anchor-link-title[title="Home"]').eq(1).should("be.visible").click()
        return this
    }

    todosOsServiçosTitle() {
        cy.get('[title="Todos os serviços"]').click()
        return this
    }

    idiomaIngles() {
        cy.get('.ant-select-selection-item').click()
        cy.get('div.ant-row').contains('EN').click()
        return this
    }

    idiomaPortugues() {
        cy.get('.ant-select-selection-item').click()
        cy.get('p.mastermastertext-0-2-18').contains('PT').click()
        return this
    }

    tiposDeUso() {
        cy.get('#allServices div div:nth-child(1) div span').click()
        return this
    }

    qrCode() {
        cy.get('[href="/qrcode"] > .ant-row > .ant-typography').eq(0).click();
        cy.get('aside div:nth-child(1) ul li:nth-child(4) span a').click();
        cy.get('aside div:nth-child(1) ul li:nth-child(4) span a').should('have.text', 'QR Code')
        return this
    }

    midia() {
        cy.get('[href="/media"] > .ant-row > .ant-typography').eq(0).click()
        cy.get(':nth-child(3) > .ant-breadcrumb-link').should('have.text', 'Mídia')
        return this
    }

    emv() {
        cy.get('[href="/emv"] > .ant-row > .ant-typography').eq(0).click()
        cy.contains('span', 'Emv').should('have.text', 'Emv')
        return this
    }

    abt() {
        cy.get('[href="/abt"] > .ant-row > .ant-typography').eq(0).click()
        cy.get('#root li:nth-child(4) a').should('have.text', 'Arquivos de ABT')
        return this
    }

    operacional() {
        cy.get('span.ant-collapse-header-text').contains('Operacional').click()
        return this
    }

    dispositivos() {
        cy.get('[href="/device"] > .ant-row > .ant-typography').click()
        cy.get('#rc-tabs-0-tab-1').should('have.text', 'Dispositivos e conexões')
        return this
    }

    transporte() {
        cy.get('[href="/transport"] > .ant-row > .ant-typography').click()
        cy.get(':nth-child(3) > .ant-breadcrumb-link > a').should('have.text', 'Terminal')
        return this
    }

    tarifario() {
        cy.get('[href="/fare"] > .ant-row > .ant-typography').click()
        cy.get('.ant-menu-item-selected > .ant-menu-title-content > a').should('have.text', 'Regras')
        return this
    }

    usuario() {
        cy.get('[href="/user"] > .ant-row > .ant-typography').click()
        cy.url({force: true}).should('eq', 'https://web.test.tmob.com.br/user');
        return this
    }

    comercializacao() {
        cy.get('[href="/commerce"] > .ant-row > .ant-typography').click()
        cy.get('#root li:nth-child(2) a').should('have.text', 'Rede de vendas')
        return this
    }

    arrecadacao() {
        cy.get('[href="/ticketing"] > .ant-row > .ant-typography').click()
        cy.get('#root li:nth-child(2) a').should('have.text', 'Serviço')
        return this
    }

    garagem() {
        cy.get('[href="/depot"] > .ant-row > .ant-typography').click()
        cy.get('#root li:nth-child(2) a').should('have.text', 'Garagem')
        return this
    }

    avl() {
        cy.get('[href="/avl"] > .ant-row > .ant-typography').click()
        cy.get('#root li:nth-child(2) a').should('have.text', 'Target')
        return this
    }

    sistema() {
        cy.get('[href="/system"] > .ant-row > .ant-typography').click()
        cy.get('#root li:nth-child(2) a').should('have.text', 'Grupo de usuário')
        return this
    }

    sam() {
        cy.get('[href="/sam"] > .ant-row > .ant-typography').click()
        return this
    }

    facial() {
        cy.get('[href="/facial"] > .ant-row > .ant-typography').click()
        cy.get('#root li:nth-child(2) a').should('have.text', 'Perfis')
        return this
    }
}
export default new HomePage