import integracao from '../../../../pages/Tarifario/GrupoDeIntegracaoPage'

describe('Testando tela de "Grupo de Integração"', () => {

    beforeEach(() => {
        integracao.beforeGrupoDeIntegracao()
    })

    it('Testando filtro por "ID"', () => {
        integracao.filtroPorId()
    })

    it('Testando filtro por "Descrição"', () => {
        integracao.filtroPorDescricao()
    })

    it.skip('Testando filtro por "Status Ativo", (Filtros ausentes na página, aguardando alinhamento sobre regra de negócio para finalizar)', () => {
        integracao.filtroPorStatusAtivo()
    })

    it.skip('Testando filtro por "Status Inativo", (Filtros ausentes na página, aguardando alinhamento sobre regra de negócio para finalizar', () => {
        integracao.filtroPorStatusInativo
    })

    it('Testando botão "Visualizar"', () => {
        integracao.botaoVisualizar()
    })

    it('Testando Botão "Editar"', () => {
        integracao.botaoEditar()
    })

    it('Testando filtro por "Novo"', () => {
        integracao.botaoNovo()
    })

    it('Testando filtro por "Limpa Filtro"', () => {
        integracao.botaoLimpaFiltro()
    })
})