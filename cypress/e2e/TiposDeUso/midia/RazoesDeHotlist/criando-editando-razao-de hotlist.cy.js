import razoesHotilst from '../../../../pages/midia/RazoesDeHotlistPage'

describe('Criando e editando razões de hotlist', () => {
    beforeEach(() => {
        razoesHotilst.beforeRazoesHotlist()
    })

    it.only('Criando Razões de hotlist', () => {
       razoesHotilst.criandoRazaoDeHotlist()
    })

    it('Editando Razões de hotlist', () => {
        razoesHotilst.editandoRazaoDeHotlist()
     })
})