import mensagenDisplay from '../../../../pages/Dispositivo/MensagemDisplayPage'

describe('Testando tela "Mensagem Display"', () => {
    beforeEach(() => {
        mensagenDisplay.beforeMensagemDisplay()
    })

    it('Pesquisando por "Código"', () => {
        mensagenDisplay.pesquisaPorCodigo()
    })

    it('Pesquisando por "Descrição"', () => {
        mensagenDisplay.pesquisaPordescricao()
    })

    it('Pesquisando por "Status Ativo"', () => {
        mensagenDisplay.pesquisaPorStatusAtivo()
    })

    it('Pesquisando por "Status Inativo"', () => {
        mensagenDisplay.pesquisaPorStatusInativo()
    })

    it('testando botão "Editar"', () => {
        mensagenDisplay.botaoEditar()
    })

    it('testando botão "Visualizar"', () => {
        mensagenDisplay.botaoVisualizar()
    })
})