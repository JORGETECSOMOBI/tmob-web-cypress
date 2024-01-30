import lote from '../../../../pages/QrCode/LotePage'

describe('Criando e editando "Lote"', () => {

    beforeEach(() => {
        lote.beforeLote()
    })

    it('Criando Lote', () => {
        lote.criandoLote()
    })

    it('Testando função "Cadatrar Novo Lote"', () => {
        lote.cadastrandoNovoLote()
    })

    it.skip('Editando lote (Chamado em aberto, https://pmtmob.atlassian.net/browse/TMOB-2627), (Aguardando resposta do @alexandre.oliveira)', () => {
        lote.editandoLote()
    })
})