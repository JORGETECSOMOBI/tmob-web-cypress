import tipoEstudante from '../../../../pages/Atendimento/TipoDeEstudantePage'

describe('Testando tela tipo de estudante', () => {

    beforeEach(() => {
        tipoEstudante.beforeTipoDeestudante()
    })

    it('Cadastrando "Tipo de estudante"', () => {
        tipoEstudante.criandoTipoDeEstudante()
    })

    it('Editando "Tipo de estudante"', () => {
        tipoEstudante.editandoTipoDeEstudante()
    })
})