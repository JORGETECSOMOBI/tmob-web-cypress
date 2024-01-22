import periodoEstudantil from '../../../../pages/Atendimento/PeriodoEstudantilPage'

describe('Testando tela tipo de estudante', () => {

    beforeEach(() => {
        periodoEstudantil.beforePeriodoEstudantilPage()
    })

    it('Testando filtro por "Id"', () => {
        periodoEstudantil.filtroPorId()
    })

    it('Testando filtro por "Descrição"', () => {
        periodoEstudantil.filtroPorDescricao()
    })

    it('Testando filtro por "Status Ativo"', () => {
        periodoEstudantil.filtroPorStatusAtivo()
    })

    it('Testando filtro por "Status Inativo', () => {
        periodoEstudantil.filtroPorStatusInativo()
    })

    it('Testando botão "Novo"', () => {
        periodoEstudantil.botaoNovo()
    })

    it('Testando botão "Editar"', () => {
        periodoEstudantil.botaoEditar()
    })

    it('Testando botão "Visualizar"', () => {
        periodoEstudantil.botaoVisualizar()
    })

    it('Testando botão "Limpa filtro"', () => {
        periodoEstudantil.botaoLimpaFiltro('Integral')
    })
})