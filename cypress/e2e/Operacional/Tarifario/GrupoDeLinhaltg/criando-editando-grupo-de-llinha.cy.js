import grupo from '../../../../pages/Tarifario/GrupoDeLinhaLtgPage'

describe('Criando e editando "Grupo de linha"', () => {

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