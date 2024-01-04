import regras from '../../../../pages/Tarifario/RegrasPage'

describe('Testando tela de "Regras"', () => {

    beforeEach(() => {
        regras.beforeRegras()
    })

    it('Criando regra "Tarifa Fixa, Linha"', () => {
        regras.criandoRegraTarifaFixaLinha()
    })

    it('Criando regra "Entrada Saída, Linha"', () => {
        regras.criandoRegraEntradaSaidaLinha()
    })

    it('Criando regra "Tarifa Fixa, Integração"', () => {
        regras.criandoRegraTarifaFixaIntegracao()
    })

    it('Criando regra "Entrada Saída, Integração"', () => {
        regras.criandoRegraEntradaSaidaIntegracao()
    })

    it('Criando regra "Seção, Linha"', () => {
        regras.criandoRegraSecaolinha()
    })

    it('Criando regra "Seção, Integração"', () => {
        regras.criandoRegraSecaoIntegracao()
    })

    it('Editando regra', () => {
        regras.editandoRegra()
    })
})