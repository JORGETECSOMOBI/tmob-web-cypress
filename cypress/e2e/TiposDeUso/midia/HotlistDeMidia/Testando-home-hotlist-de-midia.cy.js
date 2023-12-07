import hotlistMidia from '../../../../pages/midia/HotlistDeMidiaPage'

describe('Testando home Hotlist de midia', () => {
    beforeEach(() => {
        hotlistMidia.beforeHotListMidia()
    })

    it('Testando filtro por Id', () => {
        hotlistMidia.filtrandoPorId()
    })

    it('Testando filtro por Id externo', () => {
        hotlistMidia.filtrandoPorIdExterno()
    })

    it('Testando filtro por Numero do cartão', () => {
        hotlistMidia.filtrandoPorNumeroCartao()
    })

    it('Testando filtro por Tipo de mídia', () => {
        hotlistMidia.filtrandoPorTipoMidia()
    })

    it('Testando filtro por Motivo de Hotlist "Roubo"', () => {
        hotlistMidia.filtrandoPorMotivoHotlistRoubo()
    })

    it('Testando filtro por Motivo de Hotlist "Perda"', () => {
        hotlistMidia.filtrandoPorMotivoHotlistPerda()
    })

    it('Testando filtro por Data', () => {
        hotlistMidia.filtrandoPorData()
    })

    it('Testando filtro por Data de processamento', () => {
        hotlistMidia.filtrandoPorDataProcessamento()
    })

    it('Testando filtro por Processado "sim"', () => {
        hotlistMidia.filtrandoPorProcessadoSim()
    })

    it('Testando filtro por Processado "Não"', () => {
        hotlistMidia.filtrandoPorProcessadoNao()
    })

    it('Testando Botão Vizualizar ', () => {
        hotlistMidia.botaoVisualizar()
    })
})