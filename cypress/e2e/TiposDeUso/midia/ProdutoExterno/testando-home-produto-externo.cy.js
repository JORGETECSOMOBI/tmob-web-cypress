import produtoExterno from '../../../../pages/midia/ProdutoExternoPage'

describe('Crinado e editando um produto de transporte', () => {

    beforeEach(() => {
        produtoExterno.beforeProdutoExterno()
    })

    it.skip('Testando filtro por descrição', () => {
        produtoExterno.filtroPordescrição()
    })

    it.skip('Testando filtro por ID', () => {
        produtoExterno.filtroPorId()
    })

    it.skip('Testando filtro por emissor', () => {
        produtoExterno.filtroPorEmissor()
    })

    it.skip('Testando filtro por sistema', () => {
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