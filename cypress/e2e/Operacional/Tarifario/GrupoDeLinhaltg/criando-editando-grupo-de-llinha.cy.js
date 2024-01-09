import grupo from '../../../../pages/Tarifario/GrupoDeLinhaLtgPage'

describe('Testando tela de "Regras"', () => {

    beforeEach(() => {
        grupo.beforeGrupoDeLinha()
    })

    it('Cadastrando "Grupo de Linha"', () => {
        grupo.cadastroGrupodeLinha()
    })

    it('Editando "Grupo de Linha"', () => {
        grupo.editaGrupodeLinha()
    })
})