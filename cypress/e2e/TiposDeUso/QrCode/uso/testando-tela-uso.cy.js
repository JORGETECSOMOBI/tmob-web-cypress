import uso from '../../../../pages/QrCode/UsoPage'

describe('Testando tela "Uso"', () => {

    beforeEach(() => {
        uso.beforeUso()
    })

    it('Testando filtro por "ID"', () => {
        uso.filtrandoPorId()
    })

    it('Testando filtro por "Empresa"', () => {
        uso.filtrandoPorEmpresa()
    })
    it('Testando filtro por "Código terminal"', () => {
        uso.filtrandoPorCodigoTerminal()
    })

    it('Testando filtro por "Data de uso"', () => {
        uso.filtrandoPorDatadeUso()
    })

    it('Testando filtro por "Linha"', () => {
        uso.filtrandoPorLinha()
    })

    it('Testando filtro por "ID Qr Mídia"', () => {
        uso.filtrandoPorIdQrMidia()
    })

    it('Testando filtro por "Sistema Top Mercury"', () => {
        uso.filtrandoPorSistemaTopMercury()
    })

    it('Testando filtro por "Origem do uso Interno"', () => {
        uso.filtrandoPorOrigemDoUsoInterno()
    })

    it('Testando filtro por "Status Rejeitado"', () => {
        uso.filtrandoPorStatusRejeitado()
    })

    it('Testando filtro por "Status Uso excessivo"', () => {
        uso.filtrandoPorStatusUsoExcessivo()
    })

    it.skip('Testando filtro por "Status Integrado"(necessita de massa de teste para finalizar)', () => {
        uso.filtrandoPorStatusIntegrado()
    })

    it('Testando filtro por "Status Esgotado"', () => {
        uso.filtrandoPorStatusEsgotado()
    })

    it.skip('Testando filtro por "Status Revertido"(necessita de massa de teste para finalizar)', () => {
        uso.filtrandoPorStatusRevertido()
    })

    it('Testando filtro por "Status Usado"', () => {
        uso.filtrandoPorStatusUsado()
    })

    it.skip('Testando filtro por "Modo de Uso Online"(Chamado para correções aberto, TMOB-2633)', () => {
        uso.filtrandoPorModoDeUsoOnline()
    })

    it.skip('Testando filtro por "Modo de Uso Offline"(Chamado para correções aberto, TMOB-2633)', () => {
        uso.filtrandoPorModoDeUsoOffline()
    })

    it('Testando botão "botaoVerQrCode"', () => {
        uso.botaoVerQrCode()
    })

    it('Testando botão "Link Id Mídia"', () => {
        uso.LinkIdMidia()
    })

    it.skip('Testando botão "Baixar relatório"(Chamado para correções aberto, TMOB-2634', () => {     
    })
})