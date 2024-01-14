import grupo from '../../../../pages/Tarifario/GrupoDeLinhaLtgPage'

describe('Testando tela de "Grupo de linha"', () => {

    beforeEach(() => {
        grupo.beforeGrupoDeLinha()
    })

    it('Testando filtro por "ID"', () => {
        grupo.filtroPorId()
    })

    it('Testando filtro por "Descrição"', () => {
        grupo.filtroPorDescricao()
    })

    it('Testando filtro por "Status Ativo"', () => {
        grupo.filtroPorStatusAtivo()
    })

    it('Testando filtro por "Status Inativo"', () => {
        grupo.filtroPorStatusInativo
    })

    it('Testando botão "Visualizar"', () => {
        grupo.botaoVisualizar()
    })

    it('Testando Botão "Editar"', () => {
        grupo.botaoEditar()
    })

    it('Testando filtro por "Novo"', () => {
        grupo.botaoNovo()
    })

    it('Testando filtro por "Limpa Filtro"', () => {
        grupo.botaoLimpaFiltro()
    })

})