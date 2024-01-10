import integracao from '../../../../pages/Tarifario/IntegracaoPage'

describe('Testando tela de "Integração"', () => {

    beforeEach(() => {
        integracao.beforeIntegracao()
    })

    it('Testando filtro por "ID"', () => {
        integracao.filtroPorId()
    })

    it('Testando filtro por tipo "Regular"', () => {
        integracao.selecionaPorTipoRegular()
    })

    it('Testando filtro por tipo "Transferência"', () => {
        integracao.selecionaPorTipoTranferencia()
    })

    it('Testando filtro por "Status ativo"', () => {
        integracao.filtroPorStatusAtivo()
    })

    it('Testando filtro por "Status Inativo"', () => {
        integracao.filtroPorStatusInativo()
    })

    it.skip('Testando filtro por tipo de origem "Todas as linhas"(Chamado aberto para correções, TMOB-2704', () => {
        integracao.filtrandoPorTipoOrigemTodasAsLinhas()
    })

    it('Testando filtro por tipo de origem "Linha"', () => {
        integracao.filtrandoPorTipoOrigemLinha()
    })

    it('Testando filtro por tipo de origem "Grupo de linhas"', () => {
        integracao.filtrandoPorTipoOrigemGrupoDeLinhas()
    })

    it('Testando filtro por tipo de origem "Todas as integrações"', () => {
        integracao.filtrandoPorTipoOrigemTodasAsIntegracoes()
    })

    it('Testando filtro por tipo de origem "Integração"', () => {
        integracao.filtrandoPorTipoOrigemIntegracao()
    })

    it('Testando filtro por tipo de origem "Grupo de integrações"', () => {
        integracao.filtrandoPorTipoOrigemGrupoDeIntegracoes()
    })

    it('Testando botão "Novo"', () => {
        integracao.botaoNovo()
    })

    it('Testando botão "Editar"', () => {
        integracao.botaoEditar()
    })

    it('Testando botão "Visualizar"', () => {
        integracao.botaoVisualizar()
    })

    it('Testando botão "Limpa filtro"', () => {
        integracao.botaoLimpaFiltro()
    })
})