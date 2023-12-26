import lote from '../../../../pages/QrCode/LotePage'

describe('Testando tela "Lote"', () => {

    beforeEach(() => {
        lote.beforeLote()
    })

    it('Criando Lote', () => {
        lote.criandoLote()
    })

    it('Testando função "Cadatrar Novo Lote"', () => {
        lote.cadastrandoNovoLote()
    })

    it.skip('Editando lote (Chamado em aberto, https://pmtmob.atlassian.net/browse/TMOB-2627)', () => {
        lote.editandoLote()
    })
})