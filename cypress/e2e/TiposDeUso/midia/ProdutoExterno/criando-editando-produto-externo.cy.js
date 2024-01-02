import produtoExterno from '../../../../pages/midia/ProdutoExternoPage'

describe('Crinado e editando um Produto externo', () => {

beforeEach(() => {
    produtoExterno.beforeProdutoExterno()
})

    it('Criando um produto externo', () => {
        produtoExterno.cadastraNovoProdutoexterno()
    })

    it('Editando um produto externo', () => {
        produtoExterno.editaProdutoexterno()
    })
})