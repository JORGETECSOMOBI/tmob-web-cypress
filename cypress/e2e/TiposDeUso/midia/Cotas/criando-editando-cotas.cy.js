import cotas from '../../../../pages/midia/CotasPage'

describe('Criando e editando cotas', () => {
    beforeEach(() => {
        cotas.beforeCotas()
    })

    it('Criando uma nova cota', () => {
        cotas.criandoNovaCota()
    })

    it('Editando cota', () => {
        cotas.editandoCota()
    })
})