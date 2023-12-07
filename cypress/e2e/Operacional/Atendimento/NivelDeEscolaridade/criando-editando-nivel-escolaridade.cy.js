import niveEscolaridade from '../../../../pages/Atendimento/NivelEscolaridadePage'

describe('Criando um novo nível de escolaridade', () => {

    beforeEach(() => {
        niveEscolaridade.beforeNivelEscolaridade()
    })

    it(' Criando um novo nível de escolaridade com sucesso', () => {
        niveEscolaridade.criandoUmNivelEscolaridade()
    })

    it(' Editando um novo nível de escolaridade com sucesso', () => {
        niveEscolaridade.editandoUmNivelEscolaridade()
    })
})

