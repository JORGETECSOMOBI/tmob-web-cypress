import produto from '../../../../pages/QrCode/ProdutoPage'

describe('Criando e editando "Produto"', () => {

    beforeEach(() => {
        produto.beforeProduto()
    })

    it('Criando um "Novo Produto Loteável"', () => {
        produto.cadastroNovoProdutoLoteavel()
    })

    it('Editando um "Novo Produto Loteável"', () => {
        produto.editaProdutoLoteavel()
    })
})