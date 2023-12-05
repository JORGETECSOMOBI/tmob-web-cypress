import dash from '../../../../pages/Emv/DashboardPage'

describe('acessando o emv e Testando a página Dashboard', () => {
    beforeEach(() => {
        dash.beforeDashboard()
    })

    it('Selecionando um período para pesquisa', () => {
        dash.periodoPesquisa('60 dias')
    })
})