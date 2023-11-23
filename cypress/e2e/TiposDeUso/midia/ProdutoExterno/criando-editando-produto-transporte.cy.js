import produtoExterno from '../../../../pages/midia/ProdutoExternoPage'

describe('Crinado e editando um produto de transporte', () => {

beforeEach(() => {
    produtoExterno.beforeProdutoExterno()
})

    it.skip('Criando um produto externo', () => {
        produtoExterno.cadastraNovoProdutoexterno()
    })

    it('Editando um produto externo', () => {
        produtoExterno.editaProdutoexterno()
    })
})