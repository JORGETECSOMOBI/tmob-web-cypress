class EmvPage {
    cartoes() {
        cy.get('a[href="/emv/cards"]').click()
        cy.contains('h3', 'Cartões').should('have.text', 'Cartões')
        return this
    }

    par() {
        cy.get('a[href="/emv/pars"]').click()
        cy.contains('h3', 'Par').should('have.text', 'Par')
        return this
    }

    bin() {
        cy.get('a[href="/emv/bin"]').click()
        cy.contains('h3', 'BIN').should('have.text', 'BIN')
        return this
    }

    motivosHotlist() {
        cy.get('a[href="/emv/hotlistReasons"]').click()
        cy.contains('h3', 'Motivos de Hotlist').should('have.text', 'Motivos de Hotlist')
        return this
    }

    hotlist() {
        cy.get('a[href="/emv/hotlists"]').click()
        cy.contains('h3', 'Hotlist').should('have.text', 'Hotlist')
        return this
    }

    hotlistPar() {
        cy.get('a[href="/emv/hotlistPars/"]').click()
        cy.contains('h3', 'Hotlist Par').should('have.text', 'Hotlist Par')
        return this
    }

    retentativa() {
        cy.get('a[href="/emv/debitRecovery"]').click()
        cy.contains('h3', 'Retentativa').should('have.text', 'Retentativa')
        return this
    }

    usos() {
        cy.get('a[href="/emv/usages"]').click()
        cy.contains('h3', 'Usos').should('have.text', 'Usos')
        return this
    }

    produtos() {
        cy.get('a[href="/emv/products"]').click()
        cy.contains('h3', 'Produtos').should('have.text', 'Produtos')
        return this
    }

    resumoEmv() {
        cy.get('a[href="/emv/emvSummary"]').click()
        cy.contains('h3', 'Resumo de emv').should('have.text', 'Resumo de emv')
        return this
    }

    arquivosMidia() {
        cy.get('a[href="/emv/emvFiles"]').click()
        cy.contains('h3', 'Arquivos de Midia').should('have.text', 'Arquivos de Midia')
        return this
    }

    arquivosOperacionais() {
        cy.get('a[href="/emv/operationalFiles"]').click()
        cy.contains('h3', 'Arquivos Operacionais').should('have.text', 'Arquivos Operacionais')
        return this
    }
}
export default new EmvPage