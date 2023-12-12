import grupoLinha from '../../../../pages/Transporte/GrupoLinhaPage'

describe('Testando todas funcionalidades da home Grupo de linha', () => {

    beforeEach(() => {
        grupoLinha.beforeGrupoLinha()
    })

    it('Testando filtro por id', () => {
       grupoLinha.testandoFiltroId()
    })

    it('Testando filtro por status ativo', () => {
        grupoLinha.testandoStatusAtivo()
    })

    it('Testando filtro por status inativo', () => {
        grupoLinha.testandostatusInativo()
    })

    it('Testando função visualizar', () => {
        grupoLinha.testandoVisualizar()
    })

    it('Testando função editar', () => {
        grupoLinha.testandoEditar
    })

    it('Testando função limpar filtros', () => {
        grupoLinha.testandoLimparfiltros()
    })
})