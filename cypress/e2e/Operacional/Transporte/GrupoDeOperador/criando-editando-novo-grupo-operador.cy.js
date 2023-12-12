import grupoOperador from '../../../../pages/Transporte/GrupoOperadorPage'

describe('Testando Grupo de Operador', () => {

    beforeEach(() => {
        grupoOperador.beforeGrupoOperador()
    })

    it('Criando um novo Grupo de Operador "Admin"', () => {
        grupoOperador.criandoGrupoOperadorAdmin()
    })

    it('Editando um Grupo de Operador', () => {
       grupoOperador.editandogrupoOperador()
    })

    it('Editando um Grupo de Operador incluindo funções por lote', () => {
       grupoOperador.editandogrupoOperadorIncluindoFuncoesPorLote()
    })

    it('Editando um Grupo de Operador excluindo funções por lote', () => {
       grupoOperador.editandogrupoOperadorExcluindoFuncoesPorLote()
    })
})