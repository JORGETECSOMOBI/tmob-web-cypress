import tipoDeMidia from '../../../../pages/midia/TipodeMidiaPage'

describe('Testando home de Tipo de mídia', () => {
    beforeEach(() => {
        tipoDeMidia.beforeTipoDeMidia()
    })

    it('Criando um novo tipo de mídia', () => {
        tipoDeMidia.criandoNovotipoDeMidia()
    })

    it('Editando tipo de mídia', () => {
        tipoDeMidia.editandoTipoDeMidia()
    })
})