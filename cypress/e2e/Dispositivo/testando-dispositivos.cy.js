import dispositivos from '../../pages/Dispositivo/DispositivosPage'

describe('Testando a tela "dispositivos"', () => {
       
    beforeEach(()=>{
        dispositivos.beforeDispositivo()
    })

    it('Testando filtro por Guid', () => {
        dispositivos.pesquisaPorGuidSerial()
    })

})