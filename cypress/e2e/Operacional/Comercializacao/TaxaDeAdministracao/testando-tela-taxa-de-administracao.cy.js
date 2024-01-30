import taxa from '../../../../pages/Comercializacao/TaxaDeAdministracaoPage'

describe('Testando tela "Taxa de administração"', () => {

    beforeEach(() => {
        taxa.beforeTaxaDeAdministracao()
    })

    it('Testando filtro por "ID"', () => {
        taxa.filtroPorId()
    })

    it('Testando filtro por "Descrição"', () => {
        taxa.filtroPorDescricao()
    })

    it('Testando filtro por "Status Ativo"', () => {
        taxa.filtroPorStatusAtivo()
    })

    it('Testando filtro por "Status Inativo"', () => {
        taxa.filtroPorStatusInativo()
    })

    it('Testando filtro por padrão "Sim"', () => {
        taxa.filtroPorPadraoSim()
    })

    it('Testando filtro por padrão "Não"', () => {
        taxa.filtroPorPadraoNao()
    })

    it.skip('Testando filtro por tipo "Taxa de Operação", (Chamado aberto para correções, TMOB-2850,  status 30/01/2024: waiting-DEV)', () => {
        taxa.filtroPorTipoService()
    })

    it.skip('Testando filtro por tipo "Plano", (Chamado aberto para correções, TMOB-2850,  status 30/01/2024: waiting-DEV)', () => {
        taxa.filtroPorTipoSubscription()
    })

    it('Testando botão "Visualizar"', () => {
        taxa.botaoVisualizar()
    })

    it('Testando Botão "Editar"', () => {
        taxa.botaoEditar()
    })

    it('Testando Botão "Novo"', () => {
        taxa.botaoNovo()
    })

    it('Testando Botão "Limpa Filtro"', () => {
        taxa.botaoLimpaFiltro()
    })
})