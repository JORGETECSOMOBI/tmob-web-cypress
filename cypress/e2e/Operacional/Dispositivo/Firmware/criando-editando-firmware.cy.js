import firmware from '../../../../pages/Dispositivo/FirmwarePage'

describe('Testando tela FirmWare', () => {

    beforeEach(() => {
        firmware.beforeFirmware()
    })

    it('Criando um firmware "ATM"  ', () => {
        firmware.cadastroFirmWareAtm()
    })

    it('Criando um firmware "POS""', () => {
        firmware.cadastroFirmWarePos()
    })

    it('Criando um firmware "STATIONHUB"', () => {
        firmware.cadastroFirmWareStationhub()
    })

    it('Criando um firmware "VALIDATOR"', () => {
        firmware.cadastroFirmWareValidator()
    })

    it('Editando um firmware para multiplos Hardwares', () => {
        firmware.EditaFirmwareMultiplosHardware()
    })
})