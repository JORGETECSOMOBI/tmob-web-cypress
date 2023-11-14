import visualizar from '../../../../pages/midia/OrdemDeGravacaoPage'

describe('Testando todas as funcionalidades da home de Ordem de gravação', () => {

    beforeEach(() => {
        visualizar.beforeOrdemDegravacao()
    })

    it('Gravando uma ordem de gravação', () => {
        visualizar.gravandoOrdemGravacao()
    })

    it('Cancelando uma ordem de gravação', () => {
        visualizar.cancelandoOrdemGravacao()
    })

    it('Imprimindo uma ordem de gravação', () => {
        visualizar.imprimindoOrdemDeGravacao()
    })

    it('Voltando para a home de "Ordem de Gravação"', () => {
        visualizar.voltarParahome()
    })  
})