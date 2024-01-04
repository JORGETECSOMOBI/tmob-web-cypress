import produto from '../../../../pages/QrCode/ProdutoPage'

describe('Testando tela "Produto"', () => {

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