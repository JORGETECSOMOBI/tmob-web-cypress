import integracao from '../../../../pages/Tarifario/IntegracaoPage'

describe('Testando tela de "Integração"', () => {

    beforeEach(() => {
        integracao.beforeIntegracao()
    })

    it('Cadastrando "Grupo de integração"', () => {
        integracao.cadastroIntegracao()
    })

    it('Editando "Grupo de integração"', () => {
        integracao.editaIntegracao()
    })
})