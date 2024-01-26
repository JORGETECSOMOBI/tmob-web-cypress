import plano from '../../../../pages/Comercializacao/PlanoPage'

describe('Testando tela "Plano"', () => {

    beforeEach(() => {
        plano.beforePlano()
    })

    it('Testando filtro por "ID"', () => {
        plano.filtroPorId()
    })

    it('Testando filtro por "Descrição"', () => {
        plano.filtroPorDescricao()
    })

    it('Testando filtro por "Modo de pagamento"', () => {
        plano.filtroPorModoDePagamento()
    })

    it('Testando filtro por "Fechamento"', () => {
        plano.filtroPorFechamento()
    })

    it('Testando filtro por "Vencimento"', () => {
        plano.filtroPorVencimento()
    })

    it('Testando filtro por "Status Ativo"', () => {
        plano.filtroPorStatusAtivo()
    })

    it('Testando filtro por "Status Inativo"', () => {
        plano.filtroPorStatusInativo()
    })

    it('Testando botão "Visualizar"', () => {
        plano.botaoVisualizar()
    })

    it('Testando Botão "Editar"', () => {
        plano.botaoEditar()
    })

    it('Testando Botão "Novo"', () => {
        plano.botaoNovo()
    })

    it('Testando Botão "Limpa Filtro"', () => {
        plano.botaoLimpaFiltro()
    })
})