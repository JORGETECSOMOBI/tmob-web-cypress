import visualizar from '../../../../pages/midia/OrdemDeGravacaoPage'

describe('Testando página visualizar Ordem de gravação', () => {

    beforeEach(() => {
        visualizar.beforeOrdemDegravacao()
    })

    it('Gravando uma ordem de gravação', () => {
        visualizar.gravandoOrdemGravacao()
    })

    it('Cancelando uma ordem de gravação', () => {
        visualizar.cancelandoOrdemGravacao()
    })

    it.skip('Imprimindo uma ordem de gravação'('EM DESENVOLVIMENTO MELHORIAS EQUIPE ALONSO'), () => {
        visualizar.imprimindoOrdemDeGravacao()
    })

    it('Voltando para a home de "Ordem de Gravação"', () => {
        visualizar.voltarParahome()
    })  
})