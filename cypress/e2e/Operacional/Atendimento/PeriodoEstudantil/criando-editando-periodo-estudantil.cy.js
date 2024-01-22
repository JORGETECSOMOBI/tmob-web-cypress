import periodoEstudantil from '../../../../pages/Atendimento/PeriodoEstudantilPage'

describe('Testando tela tipo de estudante', () => {

    beforeEach(() => {
        periodoEstudantil.beforePeriodoEstudantilPage()
    })

    it('Criando "Período estudantil"', () => {
        periodoEstudantil.criandoPeriodoEstudantil()
    })

    it('Editando "Período estudantil"', () => {
        periodoEstudantil.editandoPeriodoEstudantil()
    })
})