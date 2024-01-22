import tipoDeMidia from '../../../../pages/midia/TipodeMidiaPage'

describe('Criando e editando Tipo de mídia', () => {
    beforeEach(() => {
        tipoDeMidia.beforeTipoDeMidia()
    })

    it('Criando um novo tipo de mídia', () => {
        tipoDeMidia.criandoNovotipoDeMidia()
    })

    it.only('Editando tipo de mídia', () => {
        tipoDeMidia.editandoTipoDeMidia()
    })
})