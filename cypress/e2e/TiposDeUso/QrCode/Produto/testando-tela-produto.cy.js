import produto from '../../../../pages/QrCode/ProdutoPage'

describe('Testando tela "Produto"', () => {

    beforeEach(() => {
        produto.beforeProduto()
    })

    it('Testando filtro por "ID"', () => {
        produto.filtrandoPorId()
    })

    it('Testando filtro por "DESCRIÇÃO"', () => {
        produto.filtrandoPorDescricao()
    })

    it('Testando filtro por "ATIVO"', () => {
        produto.filtrandoPorFiltroAtivo()
    })

    it('Testando filtro por "INATIVO"', () => {
        produto.filtrandoPorFiltroInativo()
    })

    it('Testando botão "Novo Produto"', () => {
        produto.botaoNovoProduto()
    })

    it('Testando botão "Visualizar"', () => {
        produto.botaoVisualizar()
    })

    it('Testando botão "Editar"', () => {
        produto.botaoEditar()
    })

    it('Testando botão "Limpar Filtros"', () => {
        produto.botaoLimparFiltro()
    })
})