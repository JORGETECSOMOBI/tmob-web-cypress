import dispositivos from '../../../pages/Dispositivo/DispositivosPage'

describe('Testando a tela "dispositivos"', () => {

    beforeEach(() => {
        dispositivos.beforeDispositivo()
    })

    it('Testando filtro por Guid', () => {
        dispositivos.pesquisaPorGuidSerial()
    })

    it.skip('Testando filtro por Serial do Hardware', () => {
        dispositivos.pesquisaPorSerialHardware()
    })

    it('Testando filtro por Última comunicação', () => {
        dispositivos.pesquisaPorUltimaComunicacao()
    })

    it('Testando filtro por Operador de transporte', () => {
        dispositivos.pesquisaPorOperadorDeTransporte()
    })

    it('Testando filtro por Terminal', () => {
        dispositivos.pesquisaPorTerminal()
    })

    it('Testando filtro por Device "ATM"', () => {
        dispositivos.pesquisaPorDeviceAtm()
    })

    it('Testando filtro por Device "Perso"', () => {
        dispositivos.pesquisaPorDevicePerso()
    })

    it('Testando filtro por Device "POS"', () => {
        dispositivos.pesquisaPorDevicePos()
    })

    it('Testando filtro por Device "StationHub"', () => {
        dispositivos.pesquisaPorDeviceStatiosHub()
    })

    it('Testando filtro por Device "Toten"', () => {
        dispositivos.pesquisaPorDeviceToten()
    })

    it('Testando filtro por Device "Validator"', () => {
        dispositivos.pesquisaPorDeviceValidator()
    })

    it('Testando filtro Status "Fechado"', () => {
        dispositivos.pesquisaPorStatusFechado()
    })

    it('Testando filtro Status "Ocioso"', () => {
        dispositivos.pesquisaPorStatusOcioso()
    })

    it('Testando filtro Status "Aberto"', () => {
        dispositivos.pesquisaPorStatusAberto()
    })

    it('Testando filtro Status "Suspenso"', () => {
        dispositivos.pesquisaPorStatusSuspenso()
    })

    it('Testando filtro Status "Manutenção"', () => {
        dispositivos.pesquisaPorStatusManutencao()
    })

    it('Testando filtro Status "Não configurado"', () => {
        dispositivos.pesquisaPorStatusNaoConfigurado()
    })

    it('Testando filtro Status "Aberto ou Ocioso"', () => {
        dispositivos.pesquisaPorStatusAbertoOuOcioso()
    })

    it('Testando filtro Status "Fechado ou Suspenso"', () => {
        dispositivos.pesquisaPorStatusFechadoOuSuspenso()
    })
})