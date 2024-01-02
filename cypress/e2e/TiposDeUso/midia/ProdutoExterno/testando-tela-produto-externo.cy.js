import produtoExterno from '../../../../pages/midia/ProdutoExternoPage'

describe('Crinado e editando um produto externo', () => {

    beforeEach(() => {
        produtoExterno.beforeProdutoExterno()
    })

    it.skip('Testando filtro por descrição (Chamado para correções aberto, TMOB-2359)', () => {
        produtoExterno.filtroPordescrição()
    })

    it.skip('Testando filtro por ID (Chamado para correções aberto, TMOB-2359)', () => {
        produtoExterno.filtroPorId()
    })

    it.skip('Testando filtro por emissor (Chamado para correções aberto, TMOB-2359)', () => {
        produtoExterno.filtroPorEmissor()
    })

    it.skip('Testando filtro por sistema (Chamado para correções aberto, TMOB-2359)', () => {
        produtoExterno.sistema()
    })

    it('Testando botão Novo', () => {
        produtoExterno.botaoNovo()
    })

    it('Testando botão editar', () => {
        produtoExterno.botãoEditar()
    })

    it('Testando botão visualizar', () => {
        produtoExterno.botaoVisualizar()
    })
})