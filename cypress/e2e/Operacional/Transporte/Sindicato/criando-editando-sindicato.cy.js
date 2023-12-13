import sindicato from '../../../../pages/Transporte/SindicatoPage'

describe('Testando "Sindicato"', () => {

    beforeEach(() => {
        sindicato.beforeSindicato()
    })

    it('Criar um Sindicato', () => {
       sindicato.criaSindicato()
    })

    it('Editar um Sindicato', () => {
        sindicato.editaSindicato()
    })
})