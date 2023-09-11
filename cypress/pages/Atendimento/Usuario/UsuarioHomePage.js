class UsuarioHome {

    ValidandoAcessoTelaUsuario() {
        cy.get('.mastermasteruserheader-0-2-58 > .ant-typography').should('have.text', 'Pesquisa de usuário')
        return this
    }

    acessandoTelaOrganizaçao() {
        cy.get('a[href="/user/organizations"]').click()
        return this
    }

    acessandoTelaPostosDeAtendimento() {
        cy.get('a[href="/user/servicestations"]').click()
        return this
    }

    acessandoTelaTiposDeUsuario() {
        cy.get('a[href="/user/userTypes"]').click()
        return this
    }

    acessandoTelaEquipamentoPcD() {
        cy.get('a[href="/user/userDisabilityEquipments"]').click()
        return this
    }

    acessandoTelaPeriodoEstudantil() {
        cy.get('a[href="/user/userStudentPeriods"]').click()
    }

    ValidandoTelaPeriodoEstudantil(mensagem) {
        cy.get('.ant-row-start > .ant-typography').should('have.text', mensagem)
        return this
    }

    acessandoTelaTipoDeEstudante() {
        cy.get('a[href="/user/userStudentTypes"]').click()
        return this
    }

    acessandoTelaNivelDeEscolaridade() {
        cy.get('a[href="/user/userStudentLevels"]').click()
        return this
    }

    acessandoTelaTipoDeDocumentos() {
        cy.get('a[href="/user/documentTypes"]').click()
        return this
    }

    acessandoTelaICD() {
        cy.get('a[href="/user/usericds"]').click()
        return this
    }
}
export default new UsuarioHome