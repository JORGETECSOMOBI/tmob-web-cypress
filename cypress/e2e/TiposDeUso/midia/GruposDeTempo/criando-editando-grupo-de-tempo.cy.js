import grupoDeTempo from '../../../../pages/midia/GrupoDetempoPage'

describe('Testando todos os elementos da home de Grupo de tempo', () => {
    beforeEach(() => {
        grupoDeTempo.beforeGrupoDeTempo()
    })

    it('Tentativa de criar novo grupo de tempo com limite esgotado', () => {
        grupoDeTempo.criaNovoGrupoDetempo()
    })

    it('Edita umgrupo de tempo', () => {
        grupoDeTempo.editaUmGrupoDeTempo()
    })
})