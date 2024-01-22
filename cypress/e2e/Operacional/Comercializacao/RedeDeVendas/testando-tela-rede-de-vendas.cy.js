import rede from '../../../../pages/Comercializacao/RedeDeVendasPage'

describe('Testando tela "Rede de vendas"', () => {

    beforeEach(() => {
        rede.beforeRedeDeVendas()
    })

    it('Testando filtro por "ID"', () => {
        rede.filtroPorId()
    })

    it('Testando filtro por "Descrição"', () => {
        rede.filtroPorDescricao()
    })

    it('Testando filtro por "Status Ativo"', () => {
        rede.filtroPorStatusAtivo()
    })

    it('Testando filtro por "Status Inativo"', () => {
        rede.filtroPorStatusInativo()
    })

    it('Testando filtro por tipo "Operador"', () => {
        rede.filtroPorTipoOperador()
    })

    it('Testando filtro por tipo "Gateway"', () => {
        rede.filtroPorTipoGateway()
    })

    it('Testando botão "Visualizar"', () => {
        rede.botaoVisualizar()
    })

    it('Testando Botão "Editar"', () => {
        rede.botaoEditar()
    })

    it('Testando filtro por "Novo"', () => {
        rede.botaoNovo()
    })

    it('Testando filtro por "Limpa Filtro"', () => {
        rede.botaoLimpaFiltro()
    })
})