class NovoUsuarioDocumentosPage {
    documentoOpcionalDoc1(numero) {
        cy.get('#createUser_UsrDocuments_createMany_data_0_value').type(numero)
        return this
    }

    carteirinha(numero) {
        cy.get('#createUser_UsrDocuments_createMany_data_1_value').type(numero)
        return this
    }

    complemento(numero) {
        cy.get('#createUser_UsrDocuments_createMany_data_1_complement').type(numero)
        return this
    }

    dataValidade() {
        cy.get('#createUser_UsrDocuments_createMany_data_1_expirationDate').click({force: true})  
        cy.get('.ant-picker-today-btn').eq(1).click({force: true})

        return this
    }

    dataExpedicao() {
        cy.get('#createUser_UsrDocuments_createMany_data_1_expeditionDate').click({force: true})
        cy.contains('Hoje').click({force: true})
        return this
    }

    carteiraDeTrabalho(numero)  {
        cy.get('#createUser_UsrDocuments_createMany_data_2_value').type(numero)
        return this
    }

    upload() {
        describe('Teste de upload de arquivo', () => {
            it('Deve fazer upload de um arquivo do sistema', () => {
              
          
              // Clique no elemento que inicia o processo de upload
              cy.get('.ant-btn-icon>svg').click({ force: true })
          
              // Use o plugin "cypress-file-upload" para anexar o arquivo do sistema
              cy.fixture('CV ATUALIZADO.pdf', 'binary').then(fileContent => {
                cy.get('input[type="file"]').attachFile(
                  { fileContent, filePath: 'cypress/;fixtures/CV JORGE LUIZ CARDOSO 2023.pdf', mimeType: 'application/pdf' },
                  { subjectType: 'input' } // Isso garante que o elemento seja tratado como um input
                )
              })
          
              // Verifique se o arquivo foi carregado com sucesso ou realize outras verificações necessárias
              // Por exemplo, você pode verificar a exibição do nome do arquivo após o upload
              cy.contains('CV ATUALIZADO.pdf')
            })
          })
          
        
          return this

    }

}
export default new NovoUsuarioDocumentosPage