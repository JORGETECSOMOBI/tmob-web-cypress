import dashboard from '../../../../pages/Dispositivo/DashboardPage'

describe('Testando todos os itens da tela dashboard', () => {

    beforeEach(() => {
        dashboard.beforeDispositivo()
    })

    it('testando filtro "Selecionar empresa', () => {
        dashboard.selecionaEmpresa()
    })

    it('Acessar mensagens', () => {
        dashboard.selecionaMensagem()
    })
})