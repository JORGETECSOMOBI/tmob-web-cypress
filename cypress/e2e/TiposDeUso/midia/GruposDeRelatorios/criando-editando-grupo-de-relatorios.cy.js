import grupoRelatorios from '../../../../pages/midia/GruposDeRelatoriosPage'

describe('Criando e editando Grupos de relatórios', () => {
    beforeEach(()=>{
        grupoRelatorios.beforeGruposDeRelatorios()
    })

    it('criando um grupo de relatórios', () => {
        grupoRelatorios.criandoUmNovogruporelatorios()
    })

    it('Editando um grupo de relatórios', () => {
        grupoRelatorios.editandoUmGrupoDerelatorios()
    })
})