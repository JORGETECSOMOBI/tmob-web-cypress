import grupoRelatorios from '../../../../pages/midia/GruposDeRelatoriosPage'

describe('Testando todos os elementos da home de Grupos de relatórios', () => {
    beforeEach(()=>{
        grupoRelatorios.beforeGruposDeRelatorios()
    })

    it('Testando filtro por descrição', () => {
        grupoRelatorios.pesquisaPorDescricao()
    })
})