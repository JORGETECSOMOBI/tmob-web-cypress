import hotlist from '../../../../pages/Transporte/MotivosDeHotlistPage'

describe('Testando home de hotlist', () => {

    beforeEach(() => {
        hotlist.beforeMotivosHotlist()
    })

    it('filtro por id', () => {
        hotlist.filtroPorId()
    })

    it('filtro por nome', () => {
        hotlist.filtroPorNome()
    })

    it('filtro Ativo', () => {
        hotlist.filtroPorStatusAtivo()
    })

    it('filtro Inativo', () => {
        hotlist.filtroPorStatusInativo()
    })

    it('Função visualizar Ação "Bloqueado"', () => {
        hotlist.visualizarAcaoBloqueado()
    })

    it('Função visualizar Ação "Desbloqueado"', () => {
        hotlist.VisualizarAcaoDesbloqueado()
    })
})
