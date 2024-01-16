import dispositivos from '../../../../pages/Dispositivo/DispositivosPage'

describe('Testando a tela "dispositivos"', () => {

    beforeEach(() => {
        dispositivos.beforeDispositivo()
    })

    it('Testando filtro por Guid', () => {
        dispositivos.pesquisaPorGuidSerial()
    })

    it.skip('Testando filtro por Serial do Hardware,(chamado aberto para correções, TMOB-2510)', () => {
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

    it('Testando filtro "Tipo de hardware ATM x86_64"', () => {
        dispositivos.pesquisaPorTipoHardwareATMx86_64()
    })

    it('Testando filtro "Tipo de hardware POS TSG800"', () => {
        dispositivos.pesquisaPorTipoHardwarePosTsg800()
    })

    it('Testando filtro "Tipo de hardware Validator v3695"', () => {
        dispositivos.pesquisaPorTipoHardwareValidatorv3695()
    })

    it('Testando filtro "Por conectividade Online"', () => {
        dispositivos.pesquisaPorConectividadeOnline()
    })

    it('Testando filtro "Por conectividade Offline"', () => {
        dispositivos.pesquisaPorConectividadeOffline()
    })

    it('Testando filtro "Versionamento Alfa"', () => {
        dispositivos.pesquisaPorVersaoAlfa()
    })

    it('Testando filtro "Versionamento Beta"', () => {
        dispositivos.pesquisaPorVersaoBeta()
    })

    it('Testando filtro "Versionamento Estável"', () => {
        dispositivos.pesquisaPorVersaoEstavel()
    })

    it('Testando botão "Limpar filtro"', () => {
        dispositivos.limparFiltro()
    })

    it('Testando botão "Visualizar"', () => {
        dispositivos.visualizar()
    })

    it('Testando botão "Editar"', () => {
        dispositivos.editar()
    })
})