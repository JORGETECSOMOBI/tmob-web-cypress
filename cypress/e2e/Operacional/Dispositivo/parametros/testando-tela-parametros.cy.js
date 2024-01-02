import parametros from '../../../../pages/Dispositivo/ParametrosPage'

describe('Testando tela "Mensagem Display"', () => {
    beforeEach(() => {
        parametros.beforeParametros()
    })

    it('Pesquisando por "Domínio"', () => {
        parametros.pesquisaPorDominio()
    })

    it('Pesquisando por "Key"', () => {
        parametros.pesquisaPorKey()
    })

    it('Pesquisando por "nome"', () => {
        parametros.pesquisaPorNome
    })

    it('Pesquisando por "Descrição"', () => {
        parametros.pesquisaPorDescricao()
    })
})