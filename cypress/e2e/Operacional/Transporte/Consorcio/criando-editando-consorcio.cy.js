import consorcio from '../../../../pages/Transporte/ConsorcioPage'

describe('Testando "Controle de trilhos"', () => {

    beforeEach(() => {
        consorcio.beforeConsorcio()
    })

    it('Criando um novo consórcio', () => {
       consorcio.criaConsorcio()
    })

    it('Edita um consórcio', () => {
       consorcio.editaConsorcio
    })

    it('Visualiza um consórcio', () => {
       consorcio.visualizaConsorcio
    })
})