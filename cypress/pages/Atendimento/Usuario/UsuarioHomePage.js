class UsuarioHome {

    ValidandoAcessoTelaUsuario() {
        cy.get('.mastermasteruserheader-0-2-58 > .ant-typography').should('have.text', 'Pesquisa de usuário')
        return this
    }

    acessandoTelaOrganizaçao() {
        cy.get('a[href="/user/organizations"]').click({force: true})
        return this
    }

    acessandoTelaPostosDeAtendimento() {
        cy.get('a[href="/user/servicestations"]').click({force: true})
        return this
    }

    acessandoTelaTiposDeUsuario() {
        cy.get('a[href="/user/userTypes"]').click({force: true})
        return this
    }

    acessandoTelaEquipamentoPcD() {
        cy.get('a[href="/user/userDisabilityEquipments"]').click({force: true})
        return this
    }

    acessandoTelaPeriodoEstudantil() {
        cy.get('a[href="/user/userStudentPeriods"]').click({force: true})
    }

    ValidandoTelaPeriodoEstudantil(mensagem) {
        cy.get('.ant-row-start > .ant-typography').should('have.text', mensagem)
        return this
    }

    acessandoTelaTipoDeEstudante() {
        cy.get('a[href="/user/userStudentTypes"]').click({force: true})
        return this
    }

    acessandoTelaNivelDeEscolaridade() {
        cy.get('a[href="/user/userStudentLevels"]').click({force: true})
        return this
    }

    acessandoTelaTipoDeDocumentos() {
        cy.get('a[href="/user/documentTypes"]').click({force: true})
        return this
    }

    acessandoTelaICD() {
        cy.get('a[href="/user/usericds"]').click({force: true})
        return this
    }
}
export default new UsuarioHome