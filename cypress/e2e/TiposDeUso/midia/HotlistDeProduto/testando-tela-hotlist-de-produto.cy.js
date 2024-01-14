import hotlistProduto from '../../../../pages/midia/HotlistDeProdutoPage'

describe('Testando tela Hotlist de midia', () => {
    beforeEach(() => {
        hotlistProduto.beforeHotListProduto()
    })

    it('Testando filtro por Id', () => {
        hotlistProduto.filtrandoPorId()
    })

    it('Testando filtro por Id externo', () => {
        hotlistProduto.filtrandoPorIdExterno()
    })

    it('Testando filtro por Numero do cartão', () => {
        hotlistProduto.filtrandoPorNumeroCartao()
    })

    it('Testando filtro por Tipo de mídia', () => {
        hotlistProduto.filtrandoPorTipoMidia()
    })

    it('Testando filtro por Motivo de Hotlist "Perda"', () => {
        hotlistProduto.filtrandoPorMotivoHotlistPerda()
    })

    it('Testando filtro por Data', () => {
        hotlistProduto.filtrandoPorData()
    })

    it('Testando filtro por Data de processamento', () => {
        hotlistProduto.filtrandoPorDataProcessamento()
    })

    it('Testando filtro por Processado "sim"', () => {
        hotlistProduto.filtrandoPorProcessadoSim()
    })

    it('Testando filtro por Processado "Não"', () => {
        hotlistProduto.filtrandoPorProcessadoNao()
    })

    it('Testando filtro por Produto', () => {
        hotlistProduto.filtrandoPorProduto()
    })

    it('Testando Botão Vizualizar ', () => {
        hotlistProduto.botaoVisualizar()
    })
})