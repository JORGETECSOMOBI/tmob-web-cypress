import dispositivo from '../../pages/Dispositivo/dashboardPage'

describe('Testando todos os itens da tela dashboard', () => {

    beforeEach(() => {
        dispositivo.beforeDispositivo()
    })

    it.skip('testando filtro "Selecionar empresa', () => {
        dispositivo.selecionaEmpresa()
    })

    it.skip('Acessar mensagens', () => {
        dispositivo.selecionaMensagem()
    })

})