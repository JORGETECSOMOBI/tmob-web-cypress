import dispositivo from '../../pages/Dispositivo/dashboardPage'

describe('Testando todos os itens da tela dashboard', () => {

    beforeEach(() => {
        dispositivo.beforeDispositivo()
    })

    it('testando filtro "Selecionar empresa', () => {
        dispositivo.selecionaEmpresa()
    })

    it('Acessar mensagens', () => {
        dispositivo.selecionaMensagem()
    })

})