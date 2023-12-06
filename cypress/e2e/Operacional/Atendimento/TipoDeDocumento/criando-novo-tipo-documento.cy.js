import documento from '../../../../pages/Atendimento/TiposDeDocumentosPage'

describe('Testando "tipo de Usuário', () => {

    beforeEach(() => {
        documento.beforeTiposDocumentos()
    })

    it('Criando um novo tipo de documento', () => {
       documento.criaNovoTipoDocumento()  
    })
})