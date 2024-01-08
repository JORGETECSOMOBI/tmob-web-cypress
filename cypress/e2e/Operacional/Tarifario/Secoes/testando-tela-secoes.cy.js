import secao from '../../../../pages/Tarifario/SecoesPage'

describe('Testando tela Seções', () => {

    beforeEach(() => {
        secao.beforeSecoes()
    })

    it('Testando filtro por "ID"', () => {
        secao.filtroPorId()
    })

    it('Testando filtro por "Descrição"', () => {
        secao.filtroPordescricao
    })

    it('Testando filtro por "Status Ativo"', () => {
        secao.filtroPorStatusAtivo()
    })

    it('Testando filtro por "Status Inativo"', () => {
        secao.filtroPorStatusInativo()
    })

    it('Testando botão "Novo', () => {
        secao.botaoNovo()
    })

    it('Testando botão "Editar"', () => {
        secao.botaoEditar()
    })

    it('Testando botão "Visualizar"', () => {
        secao.botaoVisualizar
    })

    it('Testando botão "Limpa Filtro"', () => {
        secao.botaoLimpaFiltro()
    })
})