import integracao from '../../../../pages/Tarifario/GrupoDeIntegracaoPage'

describe('Testando tela de "grupo de Integração"', () => {

    beforeEach(() => {
        integracao.beforeGrupoDeIntegracao()
    })

    it('Cadastrando "Grupo de Linha"', () => {
        integracao.cadastroGrupodeLinha()
    })

    it('Editando "Grupo de Linha"', () => {
        integracao.editaGrupodeLinha()
    })
})