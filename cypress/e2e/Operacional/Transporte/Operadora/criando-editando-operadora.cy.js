import operadora from '../../../../pages/Transporte/OperadoraPage'

describe('Testando Grupo de Operadora', () => {

    beforeEach(() => {
        operadora.beforeOperadora()
    })

    it('Criando uma nova operadora', () => {
       operadora.criandoOperadora()
    })

    it.skip('Editando uma operadora', () => {
      operadora.editandoOperadora()
    })
})