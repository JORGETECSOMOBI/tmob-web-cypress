import lote from '../../../../pages/QrCode/LotePage'

describe('Testando tela "Lote"', () => {

    beforeEach(() => {
        lote.beforeLote()
    })

    it('Testando filtro por "ID"', () => {
        lote.filtrandoPorId()
    })

    it('Testando filtro por "DESCRIÇÃO"', () => {
        lote.filtrandoPorDescricao()
    })

    it('Testando filtro por "ATIVO"', () => {
        lote.filtrandoPorFiltroAtivo()
    })

    it('Testando filtro por "INATIVO"', () => {
        lote.filtrandoPorFiltroInativo()
    })

    it('Testando botão "Novo Lote"', () => {
        lote.botaoNovoLote()
    })

    it('Testando botão "Visualizar"', () => {
        lote.botaoVisualizar()
    })

    it('Testando botão "Editar"', () => {
        lote.botaoEditar()
    })

    it('Testando botão "Limpar Filtros"', () => {
        lote.botaoLimparFiltro()
    })
})