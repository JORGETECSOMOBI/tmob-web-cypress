class NovoUsuarioDocumentosPage {
  preencheDocumento0CPF(cpf) {
    cy.get('#createUser_UsrDocuments_createMany_data_0_value',).type(cpf, { force: true })
    return this
  }

  preencheDocumento0CNPJ(cnpj) {
    cy.get('#createUser_UsrDocuments_createMany_data_0_value',).type(cnpj, { force: true })
    return this
  }

  preencheDocumento1(documento) {
    cy.get('#createUser_UsrDocuments_createMany_data_1_value').type(documento)
    return this
  }

  complemento1(numero) {
    cy.get('#createUser_UsrDocuments_createMany_data_1_complement').type(numero)
    return this
  }

  dataValidade1() {
    cy.get('#createUser_UsrDocuments_createMany_data_1_expirationDate').click({ force: true })
    cy.get('.ant-picker-today-btn').eq(1).click({ force: true })

    return this
  }

  dataExpedicao1(data) {
    cy.get('#createUser_UsrDocuments_createMany_data_1_expeditionDate').click({ force: true })
    cy.contains(data).click({ force: true })
    return this
  }

  documentoOpcional2(numero) {
    cy.get('#createUser_UsrDocuments_createMany_data_2_value').type(numero)
    return this
  }

  upload() {
    describe('Teste de upload de arquivo', () => {
      it.only('Deve fazer upload de um arquivo do sistema', () => {
    
        cy.get('#createUser_UsrDocuments_createMany_data_5_filenames_set').click({ force: true})

      });
    });

  }
}





export default new NovoUsuarioDocumentosPage