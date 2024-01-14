import correlacao from '../../../../pages/Tarifario/CorrelacaoTarifariaPage'

describe('Testando tela de "Correlação Tarifária"', () => {

    beforeEach(() => {
        correlacao.beforeCorrelacaoTarifaria()
    })

    it('Cadastrando "Grupo de Linha", (Aguardando alinhamneto a respeito da regra de negócio para finalizar)', () => {
        correlacao.cadastroCorrelacaoTarifaria()
    })

    it('Editando "Grupo de Linha", (Aguardando alinhamneto a respeito da regra de negócio para finalizar)', () => {
        correlacao.editaCorrelacaoTarifaria()
    })
})