import limite from '../../../../pages/midia/LimiteDeUso'

describe('Testando tela limites de uso', () => {

    beforeEach(() => {
        limite.beforeLimiteUso()
    })

    it('pesquisando por Id', () => {
        limite.pesquisaPorId()
    })

    it('Pesquisando pela descrição do limite de uso', () => {
        limite.pesquisaPorDescricao()
    })

    it('Testando filtro por status Ativo', () => {
        limite.pesquisaPorStatus()
    })

    it('Testando botão visualizar', () => {
        limite.visualizar()
    })

    it('Testando filtro botão editar', () => {
        limite.editar()
    })

    it('Testando filtro botão novo', () => {
        limite.novo()
    })
})