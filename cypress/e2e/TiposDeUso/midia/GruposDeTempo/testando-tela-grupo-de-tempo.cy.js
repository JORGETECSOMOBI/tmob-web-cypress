import grupoDeTempo from '../../../../pages/midia/GrupoDetempoPage'

describe('Testando tela de Grupo de tempo', () => {
    beforeEach(() => {
        grupoDeTempo.beforeGrupoDeTempo()
    })

    it('Pesquisa pela descrição', () => {
        grupoDeTempo.pesquisaDescricao()
    })

    it('Pesquisa pelo status ', () => {
        grupoDeTempo.pesquisaStatus()
    })

    it('Clica no botão novo', () => {
        grupoDeTempo.botaoNovo()
    })

    it('Clica em visulizar', () => {
        grupoDeTempo.botaoVisualizar()
    })

    it('Clica em editar', () => {
        grupoDeTempo.botaoeditar()
    })
})