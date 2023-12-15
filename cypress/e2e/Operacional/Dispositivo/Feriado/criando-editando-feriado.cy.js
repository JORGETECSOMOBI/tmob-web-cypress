import feriado from '../../../../pages/Dispositivo/FeriadoPage'

describe('Cadastrando e editando Feriado', () => {

    beforeEach(() => {
        feriado.beforeFeriado()
    })

    it('Cadastrando Feriado', () => {
        feriado.cadastraFeriado()
    })

    it('Editando Feriado', () => {
        feriado.editaFeriado()
    })
})