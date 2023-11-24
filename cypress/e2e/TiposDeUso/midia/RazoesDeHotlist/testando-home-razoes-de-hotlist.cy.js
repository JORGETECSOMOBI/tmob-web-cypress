import razoesHotilst from '../../../../pages/midia/RazoesDeHotlistPage'

describe('Testando Home de hotlist', () => {
    beforeEach(() => {
        razoesHotilst.beforeRazoesHotlist()
    })

    it('Testando filtro por id', () => {
        razoesHotilst.testandoFiltroId()
    })

    it('Testando filtro por descrição', () => {
        razoesHotilst.testandoFiltroId()
    })

    it('Testando filtro por ação Bloquear', () => {
        razoesHotilst.testandoFiltroAcaoBloquear()
    })

    it('Testando filtro por ação Desbloquear', () => {
        razoesHotilst.testandoFiltroAcaoDesbloquear()
    })

    it('Testando filtro por ação Razão de hotlist', () => {
        razoesHotilst.testandoFiltroAcaoRazaoDeHotlist()
    })

    it('Testando filtro por status ativo', () => {
        razoesHotilst.testandoFiltroStatusAtivo()
    })

    it('Testando filtro por status inativo', () => {
        razoesHotilst.testandoFiltroStatusInativo()
    })

    it('Testando botão novo', () => {
        razoesHotilst.testandoBotaoNovo()
    })

    it('Testando botão editar', () => {
        razoesHotilst.testandoBotaoEditar()
    })

    it('Testando botão visualizar', () => {
        razoesHotilst.testandoBotaoVisualizar()
    })
}
)