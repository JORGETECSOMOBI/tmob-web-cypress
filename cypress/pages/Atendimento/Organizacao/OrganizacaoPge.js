class OrganizacaoPage {

    escreveRazaosocial(organizacao) {
        cy.get('#name').type(organizacao)
        return this
    }

    escreveNomefantasia(nome) {
        cy.get('#shortName').type(nome)
        return this
    }

    escreveEmail(email) {
        cy.get('#mailAddress').type(email)
        return this
    }

    escreveCNPJ0(cnpj) {
        cy.get('#createManyMandatoryDocument_2147483645_value').type(cnpj)
        return this
    }
    escreveCNPJ(cnpj) {
        cy.get('#createManyMandatoryDocument_0_value').type(cnpj, {force: true})
        return this
    }

    escreveCNPJ1(cnpj) {
        cy.get('#createManyMandatoryDocument_1_value').type(cnpj)
        return this
    }

    escreveCEP(cep) {
        cy.get('#UsrAddresses_createMany_data_0_zipCode').type(cep, { force: true }).wait(1000)
        return this
    }

    escreveNumero(numerocasa) {
        cy.get('#UsrAddresses_createMany_data_0_number').type(numerocasa)
        return this
    }

    escreveNumeroTelefone0(numero) {
        cy.get('#UsrPhones_createMany_data_0_number').type(numero)
        return this
    }

    escreveNumeroTelefone1(numero) {
        cy.get('#UsrPhones_createMany_data_1_type').eq(1).type(numero)
        cy.contains()
        return this
    }

    selecionaTipoOperadora(tipoOperadora) {
        cy.get('.ant-select-selection-overflow').click()
        cy.contains(tipoOperadora).click({ force: true })
        return this
    }

    adicionaNovoContato() {
        cy.get('.ant-btn > :nth-child(2)').eq(0).click({ force: true })
        return this
    }

    selecionaOperadora(operadora) {
        cy.get('#toTransportOperator').click()
        cy.contains(operadora).click()
        return this
    }

    selecionaTipoDeTelefone0(tipo) {
        cy.get('#UsrPhones_createMany_data_0_type').click()
        cy.contains(tipo).click()
        return this
    }

    selecionaTipoDeTelefone1(tipo) {
        cy.get('#UsrPhones_createMany_data_1_type', { force: true }).click({ force: true })
        cy.get('.ant-select-item-option-content').contains('Residencial').eq(0).click({ force: true })
        return this
    }

    selecionaCanais0(canal) {
        cy.get('.ant-select-selection-overflow').click()
        cy.contains(canal).click({ force: true })
        return this
    }

    selecionaCanais1(canal) {
        cy.get('.ant-select-selection-overflow').eq(1).click()
        cy.contains(canal, { force: true }).click({ force: true })
        return this
    }

    selecionatipoEndereco(tipo) {
        cy.get('#UsrAddresses_createMany_data_0_type').click({ force: true })
        cy.contains(tipo).click()
        return this
    }
}
export default new OrganizacaoPage