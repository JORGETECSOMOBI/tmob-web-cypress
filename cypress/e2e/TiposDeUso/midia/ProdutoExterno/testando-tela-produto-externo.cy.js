import produtoExterno from '../../../../pages/midia/ProdutoExternoPage'

describe('Testando tela produto externo', () => {

    beforeEach(() => {
        produtoExterno.beforeProdutoExterno()
    })

    it.skip('Testando filtro por descrição (Chamado para correções aberto, TMOB-2359, status 30/01/2024: waiting-DEV)', () => {
        produtoExterno.filtroPordescrição()
    })

    it('Testando filtro por ID', () => {
        produtoExterno.filtroPorId()
    })

    it('Testando filtro por emissor', () => {
        produtoExterno.filtroPorEmissor()
    })

    it('Testando filtro por sistema', () => {
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