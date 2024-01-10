import grupoDeTempo from '../../../../pages/midia/GrupoDetempoPage'

describe('Criando e editando Grupo de tempo', () => {
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