import hotlist from '../../../../pages/Transporte/MotivosDeHotlistPage'

describe('Criando e editando motivos de hotlist', () => {

    beforeEach(() => {
        hotlist.beforeMotivosHotlist()
    })

    it('Criar um novo motivo de hotlist', () => {
       hotlist.criaUmMotivoDeHotlist()
    })

    it('Editar um motivo de hotlist', () => {
        hotlist.editaUmMotivoDeHotlist()
    })
})