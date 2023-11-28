import limite from '../../../../pages/midia/LimiteDeUso'

describe('cadastrando e editando limite de uso', () => {

    beforeEach(() => {
        limite.beforeLimiteUso()
    })

    it('cadastrando um novo limite de uso', () => {
        limite.cadastraLimiteDeUso()
    })

    it('Edita limite de uso', () => {
        limite.editaLimiteDeUso()
    })
})