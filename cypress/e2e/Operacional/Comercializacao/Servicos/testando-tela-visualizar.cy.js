import servico from '../../../../pages/Comercializacao/ServicosPage'

describe('Testando tela "Visualizar"', () => {

    beforeEach(() => {
        servico
        .beforeServico()
        .filtroPorGuidDoServico('1be85494-7632-4255-99b5-b67e038e17cb')
        .Botaovisualizar()       
    })

    it('',()=>{

    })  
})