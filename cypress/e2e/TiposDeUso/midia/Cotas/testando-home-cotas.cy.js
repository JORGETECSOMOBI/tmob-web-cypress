import cotas from '../../../../pages/midia/CotasPage'

describe('Criando e editando cotas', () => {
    beforeEach(() => {
        cotas.beforeCotas()
    })

    it('Filtrando por descrição', () => {
        cotas.filtrandoPorDescricao()
    })

    it('Filtrando por tipo de cota Valor', () => {
        cotas.filtrandoPorValor()
    })

    it('Filtrando por tipo de cota Linha', () => {
        cotas.filtrandoPorLinha()
    })

    it('Filtrando por Status Ativo', () => {
        cotas.filtrandoPorStatusAtivo()
    })

    it('Filtrando por Status Inativo', () => {
        cotas.filtrandoPorStatusInativo()
    })

    it('Testando botão editar', () => {
        cotas.botaoEditar()
    })

    it('Testando botão Visualizar', () => {
        cotas.botaoVisualizar()
    })

    it('Testando botão Novo', () => {
        cotas.clicandoBotaoNovo()
    })
})