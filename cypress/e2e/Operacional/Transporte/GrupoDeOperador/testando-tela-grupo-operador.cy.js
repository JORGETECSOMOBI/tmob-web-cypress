import grupoOperador from '../../../../pages/Transporte/GrupoOperadorPage'

describe('Testando tela Grupo de operador', () => {

    beforeEach(() => {
        grupoOperador.beforeGrupoOperador()
    })

    it('Testando pesquisa por id', () => {
        grupoOperador.pesquisaPorId()
    })

    it('Testando status ativo', () => {
        grupoOperador.pesquisaPorStatusAtivo()
    })

    it('Testando status Inativo', () => {
        grupoOperador.pesquisaPorStatusInativo()
    })

    it('Testando função Visualizar', () => {
        grupoOperador.testandoVisualizar()
    })

    it('Testando botão editar', () => {
        grupoOperador.testandoEditar()
    })
})
