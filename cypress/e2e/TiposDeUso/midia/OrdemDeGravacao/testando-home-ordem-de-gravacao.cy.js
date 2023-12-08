import gravacao from '../../../../pages/midia/OrdemDeGravacaoPage'

describe('Testando todas as funcionalidades da home de Ordem de gravação', () => {

    beforeEach(() => {
        gravacao.beforeOrdemDegravacao()
    })

    it('testando filtro por número do cartão', () => {
        gravacao.filtroPorNumeroCartao()
    })

    it('testando filtro por Tipo de ordem bureau', () => {
        gravacao.filtroTipoDeOrdemBureau()
    })

    it('testando filtro por Tipo de ordem external', () => {
        gravacao.filtroTipoDeOrdemExternal()
    })

    it('testando filtro por Tipo de ordem Single', () => {
        gravacao.filtroTipoDeOrdemSingle()
    })

    it('testando filtro por Tipo de midia ', () => {
        gravacao.filtroTipoDeMidia()
    })

    it('testando filtro por Status Pendente', () => {
        gravacao.filtroStatusPendente()
    })

    it('testando filtro por Processando', () => {
        gravacao.filtroStatusProcessando()
    })

    it('testando filtro por Pausado', () => {
        gravacao.filtroStatusPausado()
    })

    it('testando filtro por Erro', () => {
        gravacao.filtroStatusErro()
    })

    it('testando filtro por Processado', () => {
        gravacao.filtroStatusProcessado()
    })

    it('testando filtro por Cancelado', () => {
        gravacao.filtroStatusCancelado()
    })

    it('testando cadastro de nova ordem de gravação', () => {
        gravacao.novoCadastroOrdemDeGravacao()
    })

    it('testando gravar ordem', () => {
        gravacao.gravarOrdem()
    })

    it('testando cancelar ordem', () => {
        gravacao.cancelarOrdem()
    })

    it('testando visualizar', () => {
        gravacao.visualizar()
    })
})