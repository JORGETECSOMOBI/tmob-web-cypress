import plano from '../../../../pages/Comercializacao/PlanoPage'

describe('Criando e editando "Plano"', () => {

    beforeEach(() => {
        plano.beforePlano()
    })

    it('Criando "Plano"', () => {
        plano()
    })

    it('Editando "Plano"', () => {
        plano()
    })
})