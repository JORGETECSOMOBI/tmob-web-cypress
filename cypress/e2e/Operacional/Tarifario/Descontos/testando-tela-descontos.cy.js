import descontos from '../../../../pages/Tarifario/DescontosPage'

describe('Testando tela "Descontos"', () => {
    beforeEach(() => {
        descontos.beforeDescontos()
    })

    it('Testando filtro por "ID"', () => {
        descontos.filtroPorId()
    })

    it('Testando filtro por "Nome"', () => {
        descontos.filtroPorNome()
    })

    it('Testando filtro por "Status Ativo"', () => {
        descontos.filtroPorStatusAtivo()
    })

    it('Testando filtro por "Status Inativo"', () => {
        descontos.filtroPorStatusInativo()
    })

    it('Testando botão "Novo"', () => {
        descontos.botaoNovo()
    })

    it('Testando botão "Editar"', () => {
        descontos.botaoEditar()
    })

    it('Testando botão "Visualizar"', () => {
        descontos.botaoVisualizar()
    })

    it('Testando botão "Limpa filtro"', () => {
        descontos.botaoLimpaFiltro()
    })
})