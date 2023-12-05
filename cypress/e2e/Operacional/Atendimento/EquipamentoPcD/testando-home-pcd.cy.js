import pcd from '../../../../pages/Atendimento/PCD/EquipamentoPcdPage'

describe('Testando a tela de equipamento PcD ', () => {

    beforeEach(() => {
        pcd.beforePcd()
    })

    it('Testando filtro por ID', () => {
        pcd.filtroId()
    })

    it('Testando pesquisa por filtro "Inativo"', () => {
        pcd.filtroStatusInativo()
    })

    it('Testando pesquisa por filtro "Ativo"', () => {
        pcd.filtroStatusAtivo()
    })

    it('Testando pesquisa por filtro "descrição"', () => {
        pcd.filtroDescricao()
    })

    it('Testando botão recarregar', () => {
        pcd.botaoRecarregar()
    })

    it('Testa botão visualizar', () => {
        pcd.botaoRecarregar()
    })

    it('Testando botão "Editar"', () => {
        pcd.botaoEditar()
    })

    it('testa botão "Limpar filtro"', () => {
        pcd.botaoLimparFiltro()
    })
})