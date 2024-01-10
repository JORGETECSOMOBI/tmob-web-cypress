import gravacao from '../../../../pages/midia/OrdemDeGravacaoPage'

describe('Criando Ordem de gravação', () => {

    beforeEach(() => {
        gravacao.beforeOrdemDegravacao()
    })

    it('Criando e iniciando uma nova ordem de Gravação "Single" imediatamente', () => {
        gravacao.criandoUmaNovaOrdemSingleImediatamente()
    })

    it('Criando e iniciando uma nova ordem de Gravação "Single" mais tarde', () => {
        gravacao.criandoUmaNovaOrdemSingleMaistarde()
    })

    it('Criando uma nova ordem de Gravação "Bureau" imediatamente', () => {
        gravacao.criandoUmaNovaOrdemBureauImediatamente()
    })

    it('Criando uma nova ordem de Gravação "Bureau" mais tarde', () => {
        gravacao.criandoUmaNovaOrdemBureauMaisTarde()
    })

})