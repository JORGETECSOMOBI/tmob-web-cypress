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

    it.skip('Pesquisando por "Status Ativo", (Chamado para correções aberto, TMOB-2799, status 30/01/2024: waiting-DEV)', () => {
        mensagenDisplay.pesquisaPorStatusAtivo()
    })

    it.skip('Pesquisando por "Status Inativo", (Chamado para correções aberto, TMOB-2799,  status 30/01/2024: waiting-DEV)', () => {
        mensagenDisplay.pesquisaPorStatusInativo()
    })

    it('testando botão "Editar"', () => {
        mensagenDisplay.botaoEditar()
    })

    it('testando botão "Visualizar"', () => {
        mensagenDisplay.botaoVisualizar()
    })
})