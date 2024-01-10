import tipoDeMidia from '../../../../pages/midia/TipodeMidiaPage'

describe('Testando tela de Tipo de mídia', () => {
    beforeEach(() => {
        tipoDeMidia.beforeTipoDeMidia()
    })

    it('Testando filtro pesquisar por descrição', () => {
        tipoDeMidia.filtroDescricao()
    })

    it('Testando filtro pesquisar por id', () => {
        tipoDeMidia.filtroPorId()
    })

    it('Testando filtro pesquisar por tamanho', () => {
        tipoDeMidia.filtroPorTamanho()
    })

    it('Testando filtro pesquisar por tag', () => {
        tipoDeMidia.filtroPorTag()
    })

    it('testando filtro pesquisar status inativo', () => {
        tipoDeMidia.filtroPorStatusInativo()
    })

    it('testando filtro pesquisar status Ativo', () => {
        tipoDeMidia.filtroPorStatusAtivo()
    })

    it('Testando botão editar', () => {
        tipoDeMidia.testandoBotaoEditar()
    })

    it('Testando botão visualizar', () => {
        tipoDeMidia.testandobotaoVisualizar()
    })

    it('Testando botão Novo', () => {
        tipoDeMidia.TestandoBotaoNovo()
    })
})