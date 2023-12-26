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

    it.only('Testando filtro por "Status Rejeitado"', () => {
        uso.filtrandoPorStatusRejeitado()
    })

    it.only('Testando filtro por "Status Uso excessivo"', () => {
        uso.filtrandoPorStatusUsoExcessivo()
    })

    it.skip('Testando filtro por "Status Integrado"(necessita de massa de teste para finalizar)', () => {
        uso.filtrandoPorStatusIntegrado()
    })

    it.only('Testando filtro por "Status Esgotado"', () => {
        uso.filtrandoPorStatusEsgotado()
    })

    it.skip('Testando filtro por "Status Revertido"(necessita de massa de teste para finalizar)', () => {
        uso.filtrandoPorStatusRevertido()
    })

    it.only('Testando filtro por "Status Usado"', () => {
        uso.filtrandoPorStatusUsado()
    })
})