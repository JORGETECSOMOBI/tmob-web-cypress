import integracao from '../../../../pages/Tarifario/IntegracaoPage'

describe('Testando tela de "Integração"', () => {

    beforeEach(() => {
        integracao.beforeIntegracao()
    })

    it('Testando filtro por "ID"', () => {
        integracao.filtroPorId()
    })

    it('Testando filtro por tipo "Regular"', () => {
        integracao.selecionaPorTipoRegular()
    })

    it('Testando filtro por tipo "Transferência"', () => {
        integracao.selecionaPorTipoTranferencia()
    })

    it('Testando filtro por "Status ativo"', () => {
        integracao.filtroPorStatusAtivo()
    })

    it('Testando filtro por "Status Inativo"', () => {
        integracao.filtroPorStatusInativo()
    })

    it('Testando filtro por "tipoDeOrigemLinha"', () => {
        integracao.filtrandoPorTipoDeOrigemLinha()
    })

    it('Testando filtro por "Tipo de Origem", "GrupoDeLinhas"', () => {
        integracao.filtrandoPorTipodeOrigemGrupoDeLinhas()
    })

    it('Testando filtro por "Tipo de Origem", "Todas as Integracoes"', () => {
        integracao.filtrandoPorOrigemTodasIntegracoes()
    })

    it('Testando filtro por "Tipo de Origem", "Integracao"', () => {
        integracao.filtrandoPorTipoDeOrigemIntegracao()
    })

    it('Testando filtro por "Tipo de Origem", "Grupo de Integracoes"', () => {
        integracao.filtrandoPorTipoDeOrigemGrupoDeIntegracoes()
    })

    it('Testando filtro por "Origem", "Linha"', () => {
        integracao.filtrandoPorOrigemLinha()
    })

    it('Testando filtro por "Origem", "Todas as Linhas"', () => {
        integracao.filtrandoPorOrigemTodasAsLinhas()
    })

    it('Testando filtro por "Origem", "Grupo de Linhas"', () => {
        integracao.filtrandoPorOrigemGrupoDeLinhas()
    })

    it('Testando filtro por "Origem", "Todas as Integracoes"', () => {
        integracao.filtrandoPorOrigemTodasIntegracoes()
    })

    it('Testando filtro por "Origem", "Integracao"', () => {
        integracao.filtrandoPorOrigemIntegracao()
    })

    it('Testando filtro por "Origem", "Grupo de Integracoes"', () => {
        integracao.filtrandoPorOrigemGrupoDeIntegracoes()
    })

    it('Testando filtro por "Tipo de destino", "Todas as linhas"', () => {
        integracao.filtrandoPorTipoDestinoTodasAsLinhas()
    })

    it('Testando filtro por "Tipo de destino", "Linha"', () => {
        integracao.filtrandoPorTipoDestinoLinha()
    })

    it('Testando filtro por "Tipo de destino", "Grupo de linhas"', () => {
        integracao.filtrandoPorTipoDestinoGrupoDeLinhas()
    })

    it
    ('Testando filtro por "Destino"', () => {
        integracao.filtrandoPorDestino()
    })

    it('Testando botão "Visualizar"', () => {
        integracao.botaoVisualizar()
    })


    it('Testando Botão "Editar"', () => {
        integracao.botaoEditar()
    })

    it('Testando filtro por "Novo"', () => {
        integracao.botaoNovo()
    })

    it('Testando botão "Limpa filtro"', () => {
        integracao.botaoLimpaFiltro()
    })
})