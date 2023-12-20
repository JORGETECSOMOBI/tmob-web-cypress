import hardware from '../../../../pages/Dispositivo/HardwarePage'

describe('Testado tela Hardware', () => {

    beforeEach(() => {
        hardware.beforeHardware()
    })

    it('Pesquisa por serial do hardware', () => {
        hardware.pesquisandoPorSerial()
    })

    it('Pesquisa por device "ATM"', () => {
        hardware.pesquisandoDeviceAtm()
    })

    it('Pesquisa por device "PERSO"', () => {
        hardware.pesquisandoDevicePerso()
    })

    it('Pesquisa por device "POS"', () => {
        hardware.pesquisandoDevicePos()
    })

    it('Pesquisa por device "STATIONHUB"', () => {
        hardware.pesquisandoDeviceStationhub()
    })

    it('Pesquisa por device "TOTEN"', () => {
        hardware.pesquisandoDeviceToten()
    })

    it('Pesquisa por device "VALIDATOR"', () => {
        hardware.pesquisandoDeviceValidator()
    })

    it('Pesquisa por Hardware ', () => {
        hardware.pesquisandoHardware()
    })

    it('Pesquisa por filtro "Ativo', () => {
        hardware.pesquisandoPorFiltroAtivo()
    })

    it('Pesquisa por filtro "Inativo" ', () => {
        hardware.pesquisandoPorFiltroInativo()
    })

    it.skip('Pesquisa por Filtro "Expirado" ', () => {
        hardware.pesquisandoPorFiltroExpirado()
    })

    it('Botão "Visualizar"', () => {
        hardware.botaoVisualizar()
    })

    it('Botão "Novo hardware"', () => {
        hardware.botaoNovoHardware()
    })
})