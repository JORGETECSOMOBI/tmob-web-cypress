import produtoDetransporte from '../../../../pages/midia/ProdutoDeTransportePage'

describe('Criando e editando Produto de transporte', () => {

    beforeEach(() => {
        produtoDetransporte.beforeProdutoDeTrasnporte()
    })

    it.skip('Criando um Produto de transporte "Valorado"(Manutenção)', () => {
        produtoDetransporte.criandoUmProdutoDeTransporteValorado()
    })

    it.skip('Criando um Produto de transporte "Gratuidade"(Manutenção)', () => {
        produtoDetransporte.criandoUmProdutoDeTransporteGratuidade()
    })

    it.skip('Criando um Produto de transporte "Gratuidade Funcional"(Manutenção)', () => {
        produtoDetransporte.criandoUmProdutoDeTransporteGratuidadeFuncional()
    })

    it.only('Editando um produto de transporte', () => {
        produtoDetransporte.editandoUmGrupoDeTransporte()
    })
})