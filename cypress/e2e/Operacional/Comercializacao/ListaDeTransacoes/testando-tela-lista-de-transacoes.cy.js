import lista from '../../../../pages/Comercializacao/ListaDeTransacoesPage'

describe('Testando tela "Lista de transações"', () => {

    beforeEach(() => {
        lista.beforeListaDetransacoes()
    })

    it('Testando filtro por "GUID"', () => {
        lista.filtroPorGUID()
    })

    it('Testando filtro por "Número do recibo"', () => {
        lista.filtroPorNumeroRecibo()
    })

    it('Testando filtro por "Rede de Vendas"', () => {
        lista.filtroPorRedeVendas()
    })

    it('Testando filtro por "Período"', () => {
        lista.filtroPorPeriodo()
    })

    it('Testando filtro por "Terminal"', () => {
        lista.filtroPorTerminal()
    })

    it('Testando filtro por "Grupo de Terminal"', () => {
        lista.filtroPorGrupoTerminal()
    })

    it.skip('Testando filtro por "Tipo de Operação Compra de recarga"', () => {
        lista.filtroPorTipoOperaçãoCompraRecarga()
    })

    it('Testando filtro por "Tipo de Operação Venda"', () => {
        lista.filtroPorTipoOperacaoVenda()
    })

    it('Testando filtro por "Tipo de Operação Cancelamento de Venda"', () => {
        lista.filtroPorTipoOperacaoCancelamentoVenda()
    })

    it('Testando filtro por "Tipo de Operação Recarga de Mídia"', () => {
        lista.filtroPorTipoOperacaoRecargaMidia()
    })

    it('Testando filtro por "Tipo Abt"', () => {
        lista.filtroPorTipoAbt()
    })

    it.skip('Testando filtro por "Tipo Mídia externa"(Chamado aberto para correções:TMOB-2892)', () => {
        lista.filtroPorTipoMidiaExterna()
    })

    it('Testando filtro por "Tipo Mídia"', () => {
        lista.filtroPorTipoMidia()
    })

    it('Testando filtro por "Tipo QrCode"', () => {
        lista.filtroPorTipoQrCode()
    })

    it('Testando filtro por "Mídia"', () => {
        lista.filtroPorMídia()
    })

    it.only('Testando filtro por "Forma de Pagamento Dinheiro"', () => {
        lista.filtroPorFormaPagamentoDinheiro()
    })

    it.only('Testando filtro por "Forma de Pagamento Débito"', () => {
        lista.filtroPorFormaPagamentoDebito()
    })

    it.only('Testando filtro por "Forma de Pagamento Voucher"', () => {
        lista.filtroPorFormaPagamentoVoucher()
    })

    it('Testando filtro por "Status Completo"', () => {
        lista.filtroPorStatusCompleto()
    })

    it('Testando filtro por "Status Pago"', () => {
        lista.filtroPorStatusPago()
    })

    it('Testando filtro por "Status Não Processado"', () => {
        lista.filtroPorStatusNaoProcessado()
    })
})