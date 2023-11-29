import hotlistPermanente from '../../../../pages/midia/hotlistPermanente'

describe('Testando a Home de Hotlist Permanente', () => {
    beforeEach(() => {
        hotlistPermanente.beforeHotListPermanente()
    })

    it('Testando filtro por projeto BOM',() => {
        hotlistPermanente.filtrandoPorProjetoBom()
    })

    it('Testando filtro por projeto SPTrans',() => {
        hotlistPermanente.filtrandoPorProjetoSpTrans()
    })

    it('Testando filtro por projeto TOP',() => {
        hotlistPermanente.filtrandoPorProjetoTop()
    })

    it('Testando filtro por número do cartão ',() => {
        hotlistPermanente.filtrandoPorNumeroCartao()
    })

    it('Testando filtro por número interno do cartão ',() => {
        hotlistPermanente.filtrandoPorNumeroInternoCartao()
    })

    it('Adicinando manualmente BOM',() => {
        hotlistPermanente.adicionarManualmenteBom()
    })

    it('Adicinando manualmente TOP',() => {
        hotlistPermanente.adicionarManualmenteTop()
    })

    it('Adicinando manualmente SPTrans',() => {
        hotlistPermanente.adicionarManualmenteSptrans()
    })
})