import descontos from '../../../../pages/Tarifario/DescontosPage'

describe('Testando tela "Descontos"', () => {
    beforeEach(() => {
        descontos.beforeDescontos()
    })

    it('cadastrando desconto "Default: Dia inteiro"', () => {
        descontos.cadastrandoDescontoDiaInteiroDefault()
    })

    it('cadastrando desconto "Default: Período de tempo"', () => {
        descontos.cadastrandoDescontoPeriodoDeTempoDefault()
    })

    it('cadastrando desconto "QrCode: Dia inteiro"', () => {
        descontos.cadastrandoDescontoDiaInteiroQrCode()
    })

    it('cadastrando desconto "QrCode: Período de tempo"', () => {
        descontos.cadastrandoDescontoPeriodoDeTempoQrCode
    })

    it('cadastrando desconto "Midia: Dia inteiro"', () => {
        descontos.cadastrandoDescontoDiaInteiroMidia()
    })

    it('cadastrando desconto "Midia: Período de tempo"', () => {
        descontos.cadastrandoDescontoPeriodoDeTempoMidia()
    })

    it('cadastrando desconto "EMV: Dia inteiro"', () => {
        descontos.cadastrandoDescontoDiaInteiroEmv()
    })

    it('cadastrando desconto "EMV: Período de tempo"', () => {
        descontos.cadastrandoDescontoPeriodoDeTempoEmv()
    })

    it('cadastrando desconto "Venda a bordo: Dia inteiro"', () => {
        descontos.cadastrandoDescontoDiaInteiroVendaABordo()
    })

    it('cadastrando desconto "Venda a bordo: Período de tempo"', () => {
        descontos.cadastrandoDescontoPeriodoDeTempoVendaABordo()
    })
})