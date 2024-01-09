import correlacao from '../../../../pages/Tarifario/CorrelacaoTarifariaPage'

describe('Testando tela de "Regras"', () => {

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

    it.skip('Testando filtro por "Novo", Aguardando alinhamneto a respeito da regra de negócio para finalizar', () => {
        correlacao.botaoNovo()
    })

    it('Testando filtro por "Limpa Filtro"', () => {
        correlacao.botaoLimpaFiltro()
    })

})