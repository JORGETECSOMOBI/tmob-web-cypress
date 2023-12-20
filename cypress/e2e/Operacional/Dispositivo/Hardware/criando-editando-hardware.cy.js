import hardware from '../../../../pages/Dispositivo/HardwarePage'

describe('Criando e editando "Hardware"', () => {

    beforeEach(() => {
        hardware.beforeHardware()
    })

    it('Criando "Hardware"', () => {
        hardware.cadastroNovoHardware()
    })
})