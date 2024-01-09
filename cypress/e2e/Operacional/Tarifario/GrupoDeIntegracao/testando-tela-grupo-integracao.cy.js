import integracao from '../../../../pages/Tarifario/GrupoDeIntegracaoPage'

describe('Testando tela de "Regras"', () => {

    beforeEach(() => {
        integracao.beforeGrupoDeIntegracao()
    })

    it('Testando filtro por "ID"', () => {
        integracao.filtroPorId()
    })

    it('Testando filtro por "Descrição"', () => {
        integracao.filtroPorDescricao()
    })

    it.skip('Testando filtro por "Status Ativo"', () => {
        integracao.filtroPorStatusAtivo()
    })

    it.skip('Testando filtro por "Status Inativo"', () => {
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