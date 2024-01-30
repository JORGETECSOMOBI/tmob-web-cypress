import icd from "../../../../pages/Atendimento/IcdPage"

describe('Testando ICD', () => {

    beforeEach(() => {
        icd.beforeIcd()
    })

    it('Criando um novo item "ICD"', () => {
        icd.criandoIcd()
    })

    it('Editando um item "ICD"(Chamado para correções aberto, TMOB 2781', () => {
        icd.editaIcd()
    })
})