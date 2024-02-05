import formaDePagamento from '../../../../pages/Comercializacao/FormaDePagamentoPage'

describe('Testando tela "Forma de pagamento"', () => {

    beforeEach(() => {
        formaDePagamento.beforeFormaDePagamento()
    })

    it('Testando filtro por "ID"', () => {
        formaDePagamento.filtroPorId()
    })

    it.only('Testando filtro por "Descrição"', () => {
        formaDePagamento.filtroPorDescricao()
    })

    it('Testando filtro por "Status Ativo"', () => {
        formaDePagamento.filtroPorStatusAtivo()
    })

    it('Testando filtro por "Status Inativo"', () => {
        formaDePagamento.filtroPorStatusInativo()
    })

    it('Testando botão "Visualizar"', () => {
        formaDePagamento.botaoVisualizar()
    })

    it('Testando Botão "Editar"', () => {
        formaDePagamento.botaoEditar()
    })

    it('Testando Botão "Novo"', () => {
        formaDePagamento.botaoNovo()
    })

    it('Testando Botão "Limpa Filtro"', () => {
        formaDePagamento.botaoLimpaFiltro()
    })
})