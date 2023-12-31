import produtoDetransporte from '../../../../pages/midia/ProdutoDeTransportePage'

describe('Criando e editando Produto de transporte', () => {

    beforeEach(() => {
        produtoDetransporte.beforeProdutoDeTrasnporte()
    })

    it.skip('Criando um Produto de transporte "Valorado"(Chamado aberto para correções, TMOB-2647', () => {
        produtoDetransporte.criandoUmProdutoDeTransporteValorado()
    })

    it('Criando um Produto de transporte "Gratuidade"', () => {
        produtoDetransporte.criandoUmProdutoDeTransporteGratuidade()
    })

    it('Criando um Produto de transporte "Gratuidade Funcional"', () => {
        produtoDetransporte.criandoUmProdutoDeTransporteGratuidadeFuncional()
    })

    it('Editando um produto de transporte', () => {
        produtoDetransporte.editandoUmGrupoDeTransporte()
    })
})