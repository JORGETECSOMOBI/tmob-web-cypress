class CadastroOperadorPage {

    matricula(matricula) {
        cy.get('#createUser_UsrOperators_create_0_hrid').type(matricula)
        return this
    }

    dataDeAdmissao(data) {
        cy.get('#createUser_UsrOperators_create_0_admissionDate').click({force: true})
        cy.contains(data).click()
        return this
    }

    dataDeDemissao(data) {
        cy.get('#createUser_UsrOperators_create_0_resignDate').contains(data).click()
        return this
    }

    operadora(operadora) {
        cy.get('#createUser_UsrOperators_create_0_toTransportOperatorId').click()
        cy.contains(operadora).click()
        return this
    }

    grupoOperadora(grupoOperadora) {
        cy.get('#createUser_UsrOperators_create_0_toTransportOperatorGroupId').click()
        cy.contains(grupoOperadora).click()
        return this
    }

    grupoOperador(grupoOperador) {
        cy.get('#createUser_UsrOperators_create_0_toOperatorGroupId').click()
        cy.contains(grupoOperador).click()
        return this
    }

    clicaEmInativo() {
        cy.get(':nth-child(2) > .ant-radio > .ant-radio-input').click()
        return this
    }
}
export default new CadastroOperadorPage