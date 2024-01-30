import correlacao from '../../../../pages/Tarifario/CorrelacaoTarifariaPage'

describe('Testando tela de "Correlação tarifária"', () => {

    beforeEach(() => {
        correlacao.beforeCorrelacaoTarifaria()
    })

    it('Testando filtro por "ID"', () => {
        correlacao.filtroPorId()
    })

    it('Testando filtro por "Status Ativo"', () => {
        correlacao.filtroPorStatusAtivo()
    })

    it('Testando filtro por "Status Inativo"', () => {
        correlacao.filtroPorStatusInativo()
    })

    it('Testando botão "Visualizar"', () => {
        correlacao.botaoVisualizar()
    })

    it('Testando Botão "Editar"', () => {
        correlacao.botaoEditar()
    })

    it.skip('Testando botão "Novo", (Chamado aberto para correções, TMOB-2824,  status 30/01/2024: waiting-DEV)', () => {
        correlacao.botaoNovo()
    })

    it('Testando botão "Limpa Filtro"', () => {
        correlacao.botaoLimpaFiltro()
    })

})