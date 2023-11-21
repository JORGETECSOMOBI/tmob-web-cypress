import produtoDetransporte from '../../../../pages/midia/ProdutoDeTransportePage'

describe('Criando e editando Produto de transporte', () => {

    beforeEach(() => {
        produtoDetransporte.beforeProdutoDeTrasnporte()
    })

    it.skip('Criando um Produto de transporte "Valorado"', () => {
        produtoDetransporte.criandoUmProdutoDeTransporteValorado()
    })

    it.skip('Criando um Produto de transporte "Gratuidade"', () => {
        produtoDetransporte.criandoUmProdutoDeTransporteGratuidade()
    })

    it.skip('Criando um Produto de transporte "GratuidadeFuncional"', () => {
        produtoDetransporte.criandoUmProdutoDeTransporteGratuidadeFuncional()
    })

    it.skip('Criando um Produto de transporte "Valorado"', () => {
        produtoDetransporte.criandoUmProdutoDeTransporteEspecialAcompanhante()
    })

    it.only('Editando um produto de transporte', () => {
        produtoDetransporte.editandoUmGrupoDeTransporte()
    })
})