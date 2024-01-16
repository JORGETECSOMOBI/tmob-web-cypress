import integracao from '../../../../pages/Tarifario/IntegracaoPage'

describe('Testando tela de "Integração"', () => {

    beforeEach(() => {
        integracao.beforeIntegracao()
    })

 
    it.only('cadastrando integração origem, "Todas as linhas", (Em desenvolvimento)', () => {
        integracao.cadastroIntegracaoTodasasLinhas()
    })

    it.skip('cadastrando integração origem, "Grupo de linhas", (Em desenvolvimento)', () => {
        integracao.cadastroIntegracaoGrupoDeLinhas()
    })

    it.skip('cadastrando integração origem, "Linha", (Em desenvolvimento)', () => {
        integracao.cadastroIntegracaoLinha()
    })

    it.skip('cadastrando integração origem, "Todas as integrações", (Em desenvolvimento)', () => {
        integracao.cadastroIntegracaoTodasIntegracoes()
    })

    it.skip('cadastrando integração origem, "Grupo de integrações", (Em desenvolvimento)', () => {
        integracao.cadastroIntegracaoGrupoDeIntegracoes()
    })

    it.skip('cadastrando integração origem, "integração única", (Em desenvolvimento)', () => {
        integracao.cadastroIntegracaoUnica()
    })

    it('Cadastrando "Grupo de integração"', () => {
        integracao.cadastroIntegracao()
    })

    it('Editando "Grupo de integração"', () => {
        integracao.editaIntegracao()
    })
})