import linha from '../../../../pages/Transporte/LinhaPage'

describe('Criando uma nova linha', () => {

    beforeEach(() => {
        linha.beforeLinha()
    })

    it('Criar uma nova linha', () => {
       linha.criaLinha()
    })

    it('Editar uma nova linha', () => {
       linha.editaLinha()
    })
})