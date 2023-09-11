class UsuarioHome {

    ValidandoAcessoTelaUsuario() {
        cy.get('.mastermasteruserheader-0-2-58 > .ant-typography').should('have.text', 'Pesquisa de usuário')
        return this
    }

    acessandoTelaOrganizaçao() {
        cy.get('a[href="/user/organizations"]').click()
        cy.get('.ant-row-start > .ant-typography').should('have.text', 'Organização')
        return this
    }

    acessandoTelaPostosDeAtendimento() {
        cy.get('a[href="/user/servicestations"]').click()
        cy.get('.ant-layout-content > .ant-typography').should('have.text', 'Postos de atendimento')
        return this
    }

    acessandoTelaTiposDeUsuario() {
        cy.get('a[href="/user/userTypes"]').click()
        cy.get('.ant-layout-content > .ant-typography').should('have.text', 'Tipo de Usuário')
        return this
    }

    acessandoTelaEquipamentoPcD() {
        cy.get('a[href="/user/userDisabilityEquipments"]').click()
        cy.get('.ant-row-start > .ant-typography').should('have.text', 'Equipamento PcD')
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
        cy.get('.ant-row-start > .ant-typography').should('have.text', 'Tipo de estudante')
        return this
    }

    acessandoTelaNivelDeEscolaridade() {
        cy.get('a[href="/user/userStudentLevels"]').click()
        cy.get('.ant-row-start > .ant-typography').should('have.text', 'Nível de escolaridade')
        return this
    }

    acessandoTelaTipoDeDocumentos() {
        cy.get('a[href="/user/documentTypes"]').click()
        cy.get('.ant-menu-item-active > .ant-menu-title-content > a').should('have.text', 'Tipos de Documentos')
        return this
    }

    acessandoTelaICD() {
        cy.get('a[href="/user/usericds"]').click()
        cy.get('.ant-menu-item-selected > .ant-menu-title-content > a').should('have.text', 'ICD')
        return this
    }
}
export default new UsuarioHome