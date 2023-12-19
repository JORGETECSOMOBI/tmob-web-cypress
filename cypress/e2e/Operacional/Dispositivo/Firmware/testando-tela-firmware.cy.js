import firmware from '../../../../pages/Dispositivo/FirmwarePage'

describe('Testando tela FirmWare', () => {

    beforeEach(() => {
        firmware.beforeFirmware()
    })

    it('Testando firltro por "nome"', () => {
        firmware.filtroPorNome()
    })

    it('Testando filtro por "Id"', () => {
        firmware.filtroPorId()
    })

    it('Testando filtro por "Tipo de Device "ATM"', () => {
        firmware.filtroPorTipoDeDeviceAtm()
    })

    it('Testando filtro por "Tipo de Device "POS"', () => {
        firmware.filtroPorTipoDeDevicePos()
    })

    it('Testando filtro por "Tipo de Device "PERSO"', () => {
        firmware.filtroPorTipoDeDevicePerso()
    })

    it('Testando filtro por "Tipo de Device "STATIONHUB"', () => {
        firmware.filtroPorTipoDeDeviceStationhub()
    })

    it('Testando filtro por "Tipo de Device "TOTEN"', () => {
        firmware.filtroPorTipoDeDeviceToten()
    })

    it('Testando filtro por "Tipo de Device "VALIDATOR"', () => {
        firmware.filtroPorTipoDeDeviceValidator()
    })

    it('Testando filtro "Tipo de hardware ATM at1985_1"', () => {
        firmware.pesquisaPorTipoHardwareATMat1985_1()
    })

    it('Testando filtro "Tipo de hardware stationHub st420_1"', () => {
        firmware.pesquisaPorTipoHardwareStationHubst420_1()
    })

    it('Testando filtro "Tipo de hardware POS TSG800"', () => {
        firmware.pesquisaPorTipoHardwarePosTsg800()
    })

    it('Testando filtro "Tipo de hardware POS P2607_1"', () => {
        firmware.pesquisaPorTipoHardwarePosP2607_1()
    })

    it('Testando filtro "Tipo de hardware Validator v500-1"', () => {
        firmware.pesquisaPorTipoHardwareValidatorv5001()
    })

    it('Testando filtro "Tipo de hardware Validator v500-2"', () => {
        firmware.pesquisaPorTipoHardwareValidatorv5002()
    })

    it('Testando filtro "Tipo de hardware Validator v3695"', () => {
        firmware.pesquisaPorTipoHardwareValidatorv3695()
    })

    it('Testando filtro "Tipo de hardware Validator v770w"', () => {
        firmware.pesquisaPorTipoHardwareValidatorv770w()
    })

    it('Testando filtro "Tipo de hardware Validator tinkerS"', () => {
        firmware.pesquisaPorTipoHardwareValidatorTinkerS()
    })

    it('Testando filtro "Tipo de hardware Validator digiconMG"', () => {
        firmware.pesquisaPorTipoHardwareValidatorDigiconMG()
    })

    it('Testando filtro "Tipo de hardware Validator tinkerY"', () => {
        firmware.pesquisaPorTipoHardwareValidatorTinkerY()
    })

    it('Testando filtro por "Status Ativo" ', () => {
        firmware.filtroPorStatusAtivo()
    })

    it('Testando filtor "Status Inativo"', () => {
        firmware.filtroPorStatusInativo()
    })

    it('Testando botão "Botão Novo Firmware', () => {
        firmware.botaoNovoFirmWare()
    })

    it('Testando botão "Visualizar"', () => {
        firmware.botaoVisualizar()
    })

    it('Testando botão "Editar"', () => {
        firmware.botaoEditar()
    })
})