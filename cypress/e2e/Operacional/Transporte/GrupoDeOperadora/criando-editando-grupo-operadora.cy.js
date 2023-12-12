import grupoOperadora from '../../../../pages/Transporte/GrupoOperadoraPage'

describe('Testando Grupo de Operadora', () => {

    beforeEach(() => {
        grupoOperadora.beforeGrupoOperadora()
    })

    it('Criando um novo grupo de operadora', () => {
        grupoOperadora.criandoUmGrupodeoperadora()
    })

    it('Editando um  grupo de operadora', () => {
        grupoOperadora.editandoUmGrupodeoperadora()
    })
})