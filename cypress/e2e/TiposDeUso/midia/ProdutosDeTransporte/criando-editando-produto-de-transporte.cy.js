import produtoDetransporte from '../../../../pages/midia/ProdutoDeTransportePage'

describe('Criando e editando Produto de transporte', () => {

    beforeEach(() => {
        produtoDetransporte.beforeProdutoDeTrasnporte()
    })

    it('Criando um Produto de transporte "Valorado"', () => {
        produtoDetransporte.criandoUmProdutoDeTransporteValorado()
    })

    it('Criando um Produto de transporte "Gratuidade"', () => {
        produtoDetransporte.criandoUmProdutoDeTransporteGratuidade()
    })

    it('Criando um Produto de transporte "Gratuidade Funcional"', () => {
        produtoDetransporte.criandoUmProdutoDeTransporteGratuidadeFuncional()
    })

    it.skip('Criando um Produto de transporte "Especial acompanhante"', () => {
        produtoDetransporte.criandoUmProdutoDeTransporteEspecialAcompanhante()
    })

    it('Editando um produto de transporte', () => {
        produtoDetransporte.editandoUmGrupoDeTransporte()
    })
})