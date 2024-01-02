import grupoRelatorios from '../../../../pages/midia/GruposDeRelatoriosPage'

describe('Testando todos os elementos da home de Grupos de relatórios', () => {
    beforeEach(()=>{
        grupoRelatorios.beforeGruposDeRelatorios()
    })

    it('Testando filtro por descrição', () => {
        grupoRelatorios.pesquisaPorDescricao()
    })

    it('Testando filtro por Status "Ativo"', () => {
        grupoRelatorios.testandoFiltroStatusAtivo()
    })

    it('Testando filtro por Status "Inativo"', () => {
        grupoRelatorios.testandoFiltroStatusInativo()
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