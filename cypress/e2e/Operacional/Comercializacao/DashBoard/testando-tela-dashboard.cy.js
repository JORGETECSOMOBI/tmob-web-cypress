import dashboard from '../../../../pages/Comercializacao/DashboardPage'

describe('Testando tela "Dashboard"', () => {

    beforeEach(() => {
        dashboard.beforeDashboard()
    })

    it('Filtrando por "Período"', () => {
        dashboard.filtroPorPeriodo()
    })

    it('Filtrando por "Rede de vendas"', () => {
        dashboard.filtroporRedeDeVendas()
    })
})