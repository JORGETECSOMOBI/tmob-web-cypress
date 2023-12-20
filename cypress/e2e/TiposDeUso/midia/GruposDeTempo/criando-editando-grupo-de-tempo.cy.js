import grupoDeTempo from '../../../../pages/midia/GrupoDetempoPage'

describe('Testando todos os elementos da home de Grupo de tempo', () => {
    beforeEach(() => {
        grupoDeTempo.beforeGrupoDeTempo()
    })

    it.skip('Cria novo grupo de tempo', () => {
        grupoDeTempo.criaNovoGrupoDetempo()
    })

    it('Edita umgrupo de tempo', () => {
        grupoDeTempo.editaUmGrupoDeTempo()
    })
})