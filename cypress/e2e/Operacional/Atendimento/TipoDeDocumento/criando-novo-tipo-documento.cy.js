import documento from '../../../../pages/Atendimento/TiposDeDocumentos/TiposDeDocumentos'

describe('Testando "tipo de Usuário', () => {

    beforeEach(() => {
        documento.beforeTiposDocumentos()
    })

    it('Criando um novo tipo de documento', () => {
       documento.criaNovoTipoDocumento()  
    })
})