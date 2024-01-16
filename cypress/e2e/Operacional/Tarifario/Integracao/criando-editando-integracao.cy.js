import integracao from '../../../../pages/Tarifario/IntegracaoPage'

describe('Testando tela de "Integração"', () => {

    beforeEach(() => {
        integracao.beforeIntegracao()
    })

 
    it('cadastrando integração origem, "Todas as linhas"', () => {
        integracao.cadastroIntegracaoTodasasLinhas()
    })

    it('cadastrando integração origem, "Grupo de linhas"', () => {
        integracao.cadastroIntegracaoGrupoDeLinhas()
    })

    it('cadastrando integração origem, "Linha"', () => {
        integracao.cadastroIntegracaoLinha()
    })

    it('cadastrando integração origem, "Todas as integrações"', () => {
        integracao.cadastroIntegracaoTodasIntegracoes()
    })

    it('cadastrando integração origem, "Grupo de integrações"', () => {
        integracao.cadastroIntegracaoGrupoDeIntegracoes()
    })

    it('cadastrando integração origem, "integração única"', () => {
        integracao.cadastroIntegracaoUnica()
    })

    it.skip('Editando "Grupo de integração", (Chamado para correções aberto: TMOB 2767', () => {
        integracao.editaIntegracao()
    })
})