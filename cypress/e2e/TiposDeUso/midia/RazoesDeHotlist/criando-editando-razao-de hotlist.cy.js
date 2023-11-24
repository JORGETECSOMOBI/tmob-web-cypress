import razoesHotilst from '../../../../pages/midia/RazoesDeHotlistPage'

describe('Criando e editando razões de hotlist', () => {
    beforeEach(() => {
        razoesHotilst.beforeRazoesHotlist()
    })

    it('Criando Razões de hotlist', () => {
       razoesHotilst.criandoRazaoDeHotlist()
    })
})