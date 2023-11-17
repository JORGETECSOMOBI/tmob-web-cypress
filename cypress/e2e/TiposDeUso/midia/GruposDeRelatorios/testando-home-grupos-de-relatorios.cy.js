import grupoRelatorios from '../../../../pages/midia/GruposDeRelatoriosPage'

describe('Testando todos os elementos da home de Grupos de relatórios', () => {
    beforeEach(()=>{
        grupoRelatorios.beforeGruposDeRelatorios()
    })

    it('Testando filtro por descrição', () => {
        grupoRelatorios.pesquisaPorDescricao()
    })

    it('Testando filtro por Status', () => {
        grupoRelatorios.testandoFiltroStatus()
    })

    it('Testando botão "Novo"', () => {
        grupoRelatorios.botaoNovo()
    })

    it('Testando botão visualizar', () => {
        grupoRelatorios.visualizar()
    })

    it('Testando botão editar', () => {
        grupoRelatorios.editar()
    })

    it('Testando limpar filtros', () => {
        grupoRelatorios.limparFiltros()
    })
})