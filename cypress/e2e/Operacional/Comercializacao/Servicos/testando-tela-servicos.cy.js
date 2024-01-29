import servico from '../../../../pages/Comercializacao/ServicosPage'

describe('Testando tela "Taxa de administração"', () => {

    beforeEach(() => {
        servico.beforeServico()
    })

    it('Testando filtro por "Guid do serviço"', () => {
        servico.filtroPorGuidDoServico()
    })

    it('Testando filtro por "tipo de fechamento backend "', () => {
        servico.filtroPorTipoFechamentoBackEnd()
    })

    it('Testando filtro por "tipo de fechamento Operador"', () => {
        servico.filtroPorTipoFechamentoOperador()
    })

    it('Testando filtro por "tipo de fechamento Agendado"', () => {
        servico.filtroPorTipoFechamentoAgendado()
    })

    it('Testando filtro por "Rede de vendas"', () => {
        servico.filtroRedeDeVendas()
    })

    it('Testando filtro por "Terminal"', () => {
        servico.filtroPorTerminal()
    })

    it('Testando filtro por "Operador"', () => {
        servico.filtroPorOperador()
    })

    it('Testando filtro por "Tipo de terminal ATM"', () => {
        servico.filtroPorTipoTerminalAtm()
    })

    it('Testando filtro por "Tipo de terminal POS"', () => {
        servico.filtroPorTipoTerminaPos()
    })

    it('Testando filtro por "Período"', () => {
        servico.filtroPorPeriodo()
    })

    it('Testando filtro por "Valor mínimo"', () => {
        servico.filtroPorValorMinimo()
    })

    it('Testando botão "Limpar filtro"', () => {
        servico.botaoLimpaFiltro()
    })

    it('Testando botão "Visualizar"', () => {
        servico.Botaovisualizar()
    })
})