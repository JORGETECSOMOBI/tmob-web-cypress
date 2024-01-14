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

    it.skip('Testando filtro por "Origem", "Linha", ("Aguardando geração de massa de testes para finalizar")', () => {
        integracao.filtrandoPorOrigemLinha()
    })

    it.skip('Testando filtro por "Origem", "Todas as Linhas", ("Aguardando geração de massa de testes para finalizar")', () => {
        integracao.filtrandoPorOrigemTodasAsLinhas()
    })

    it.skip('Testando filtro por "Origem", "Grupo de Linhas", ("Aguardando geração de massa de testes para finalizar")', () => {
        integracao.filtrandoPorOrigemGrupoDeLinhas()
    })

    it.skip('Testando filtro por "Origem", "Todas as Integracoes", ("Aguardando geração de massa de testes para finalizar")', () => {
        integracao.filtrandoPorOrigemTodasIntegracoes()
    })

    it.skip('Testando filtro por "Origem", "Integracao", ("Aguardando geração de massa de testes para finalizar")', () => {
        integracao.filtrandoPorOrigemIntegracao()
    })

    it.skip('Testando filtro por "Origem", "Grupo de Integracoes", ("Aguardando geração de massa de testes para finalizar")', () => {
        integracao.filtrandoPorOrigemGrupoDeIntegracoes()
    })

    it.skip('Testando filtro por "Tipo de destino", "Todas as linhas", ("Aguardando geração de massa de testes para finalizar")', () => {
        integracao.filtrandoPorTipoDestinoTodasAsLinhas()
    })

    it('Testando filtro por "Tipo de destino", "Linha"', () => {
        integracao.filtrandoPorTipoDestinoLinha()
    })

    it('Testando filtro por "Tipo de destino", "Grupo de linhas"', () => {
        integracao.filtrandoPorTipoDestinoGrupoDeLinhas()
    })

    it.skip('Testando filtro por "Destino", "Todas as linhas", ("Aguardando geração de massa de testes para finalizar")', () => {
        integracao.filtrandoPorDestinoTodasAsLinhas()
    })

    it.skip('Testando filtro por "Destino", "Linha", ("Aguardando geração de massa de testes para finalizar")', () => {
        integracao.filtrandoPorDestinoLinha()
    })

    it.skip('Testando filtro por "Destino", "Grupo de linhas", ("Aguardando geração de massa de testes para finalizar")', () => {
        integracao.filtrandoPorDestinoGrupoDeLinhas()
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