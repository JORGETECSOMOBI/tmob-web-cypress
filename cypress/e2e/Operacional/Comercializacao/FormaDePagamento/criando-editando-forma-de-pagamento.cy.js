import formaDePagamento from '../../../../pages/Comercializacao/FormaDePagamentoPage'

describe('Criando e editando "Forma de pagamento"', () => {

    beforeEach(() => {
        formaDePagamento.beforeFormaDePagamento()
    })

    it('Criando Forma de pagamento "Permite troco"', () => {
        formaDePagamento.criandoFormadePagamento()
    })

    it.skip('Criando Forma de pagamento "Não permite troco", (Chamado aberto para melhorias, TMOB-2858)', () => {
        formaDePagamento.criandoFormadePagamento()
    })

    it.only('Editando "Forma de pagamento"', () => {
        formaDePagamento.editandoFormadePagamento()
    })
})