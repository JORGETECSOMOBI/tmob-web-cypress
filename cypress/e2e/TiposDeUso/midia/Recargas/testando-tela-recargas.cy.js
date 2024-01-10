import recargas from '../../../../pages/midia/RecargasPage'

describe('Testando tela de Regargas', () => {

    beforeEach(() => {
        recargas.beforeRecargas()
    })

    it('Pesquisando por id', () => {
        recargas.filtrandoPorId()
    })

    it('Pesquisando por número do cartão', () => {
        recargas.filtrandoPorNumeroCartao
    })

    it('Pesquisando por CSN', () => {
        recargas.filtrandoPorCSN()
    })

    it('Pesquisando por id externo', () => {
        recargas.filtrandoPorIdExterno
    })

    it('Pesquisando por Produto', () => {
        recargas.filtrandoPorProduto()
    })

    it('Pesquisando por Valor', () => {
        recargas.filtrandoPorValor()
    })

    it('Pesquisando por status Recarregado Sim', () => {
        recargas.filtrandoStatusRecarregadoSim()
    })

    it('Pesquisando por status Recarregado Não', () => {
        recargas.filtrandoStatusRecarregadoNao()
    })

    it('Pesquisando por data de liberação', () => {
        recargas.filtrandoPorDataDeLiberacao()
    })

    it('Pesquisando por data de recarga', () => {
        recargas.filtrandoPorDataDeRecarga
    })

    it('Botão Visualizar', () => {
        recargas.botaoVisualizar()
    })
})
