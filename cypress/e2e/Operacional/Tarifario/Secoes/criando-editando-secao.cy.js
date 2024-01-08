import secao from '../../../../pages/Tarifario/SecoesPage'

describe('Testando tela Seções', () => {

    beforeEach(() => {
        secao.beforeSecoes()
    })

    it('Cadastrando uma Seção', () => {
        secao.cadastroSecao()
    })

    it('Editando uma Seção incluindo detalhes da seção', () => {
        secao.editaSecaoIncluir()
    })

    it('Editando uma Seção excluindo detalhes da seção', () => {
        secao.editaSecaoExcluir()
    })
})