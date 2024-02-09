import recarga from '../../../../pages/Comercializacao/OrdemDeRecargaPaje'

describe('Criando e editando "Ordem de recarga"', () => {

    beforeEach(() => {
        recarga.beforeOrdemDeRecarga()
    })

    it('Pesquisando Ordem de recarga por "ID"', () => {
        recarga.pesquisaPorId()
    })

    it('Pesquisando Ordem de recarga por "Número do pedido"', () => {
        recarga.pesquisaPorNumeroPedido()
    })

    it('Pesquisando Ordem de recarga por "Rede de venda"', () => {
        recarga.pesquisaPorRedeDeVenda()
    })

    it('Pesquisando Ordem de recarga por "Data do pedido"', () => {
        recarga.pesquisaPorDataDoPedido()
    })

    it('Pesquisando Ordem de recarga por "Liberado/Cancelado por"', () => {
        recarga.pesquisaPorLiberadoCancelado()
    })

    it('Pesquisando Ordem de recarga por "Organização"(aguardando massa de etstes para finalizar)', () => {
        recarga.pesquisaPorOrganizacao()
    })

    it('Pesquisando Ordem de recarga por Status "Em aberto"', () => {
        recarga.pesquisaPorStatusEmAberto()
    })

    it.only('Pesquisando Ordem de recarga por Status "Aguardando liberação"', () => {
        recarga.pesquisaPorStatusAguardandoLiberacao()
    })

    it.skip('Pesquisando Ordem de recarga por Status "Aguardando Pagamento"(chamado para correções aberto: TMOB-2950)', () => {
        recarga.pesquisaPorStatusAguardandoLiberacao()
    })

    it.only('Pesquisando Ordem de recarga por Status "Liberado"', () => {
        recarga.pesquisaPorStatusLiberado()
    })

    it.only('Pesquisando Ordem de recarga por Status "Cancelado"', () => {
        recarga.pesquisaPorStatusCancelado()
    })

    it.only('Pesquisando Ordem de recarga por forma de pagamento "Dinheiro"', () => {
        recarga.pesquisaPorPagamentoDinheiro()
    })

    it.only('Pesquisando Ordem de recarga por forma de pagamento "Débito"', () => {
        recarga.pesquisaPorPagamentoDebito()
    })

    it('Pesquisando Ordem de recarga por forma de pagamento "Crédito"', () => {
        recarga.pesquisaPorPagamentoCredito()
    })

    it('Pesquisando Ordem de recarga por forma de pagamento "Voucher"', () => {
        recarga.pesquisaPorPagamentoVoucher()
    })

    it('testando botão "Visualizar"', () => {
        recarga.botaoVisualizar()
    })

    it('Testando botão "Novo"', () => {
        recarga.botaoNovo()
    })

    it('Testando função "Limpar filtros"', () => {
        recarga.limparFiltros()
    })
})