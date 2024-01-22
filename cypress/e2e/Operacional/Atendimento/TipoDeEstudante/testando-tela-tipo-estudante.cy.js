import tipoEstudante from '../../../../pages/Atendimento/TipoDeEstudantePage'

describe('Testando tela tipo de estudante', () => {

    beforeEach(() => {
        tipoEstudante.beforeTipoDeestudante()
    })

    it('Testando filtro por "Id"', () => {
        tipoEstudante.filtroPorId()
    })

    it('Testando filtro por "Descrição"', () => {
        tipoEstudante.filtroPorDescricao()
    })

    it('Testando filtro por "Status Ativo"', () => {
        tipoEstudante.filtroPorStatusAtivo()
    })

    it('Testando filtro por "Status Inativo', () => {
        tipoEstudante.filtroPorStatusInativo()
    })

    it('Testando botão "Novo"', () => {
        tipoEstudante.botaoNovo()
    })

    it('Testando botão "Editar"', () => {
        tipoEstudante.botaoEditar()
    })

    it('Testando botão "Visualizar"', () => {
        tipoEstudante.botaoVisualizar()
    })

    it('Testando botão "Limpa filtro"', () => {
        tipoEstudante.botaoLimpaFiltro()
    })
})