import grupoOperadora from '../../../../pages/Transporte/GrupoOperadoraPage'

describe('Testando Grupo de Operadora', () => {

    beforeEach(() => {
        grupoOperadora.beforeGrupoOperadora()
    })

    it('pesquisa por id', () => {
        grupoOperadora.pesquisaPorId()
    })

    it('pesquisa por nome', () => {
       grupoOperadora.pesquisaPorNome()
    })

    it('Filtro Ativo', () => {
        grupoOperadora.pesquisaPorStatusAtivo()
    })

    it('Filtro Inativo', () => {
       grupoOperadora.pesquisaPorStatusInativo
    })

    it('função visualizar', () => {
        grupoOperadora.testandoVisualizar()
    })

    it('função editar', () => {
       grupoOperadora.testandoEditar()
    })
})

