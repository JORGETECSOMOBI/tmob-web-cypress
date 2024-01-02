import produtoDetransporte from '../../../../pages/midia/ProdutoDeTransportePage'

describe('Testando tela Produto de Transporte', () => {

    beforeEach(() => {
        produtoDetransporte.beforeProdutoDeTrasnporte()
    })

    it('Testando filtro por Id', () => {
        produtoDetransporte.testandoFiltroId()
    })

    it('Testando filtro por Descrição', () => {
        produtoDetransporte.testandoFiltroDescricao()
    })

    it('Testando filtro por Tipo ', () => {
        produtoDetransporte.testandoFiltroTipo()
    })

    it('Testando filtro por Status', () => {
        produtoDetransporte.testandoFiltroStatus()
    })

    it('Testando botão Novo', () => {
        produtoDetransporte.testandoBotãoNovo()
    })

    it('Testando botão Editar', () => {
        produtoDetransporte.testandoBotãoVisualizar()    
    })

    it('Testando botão Visualizar', () => {
        produtoDetransporte.testandoBotãoEditar()      
    })
})