import icd from "../../../../pages/Atendimento/IcdPage"

describe('Testando ICD', () => {

    beforeEach(() => {
        icd.beforeIcd()
    })

    it('Criando um novo item "ICD"', () => {
        icd.criandoIcd()
    })

    it('Editando um item "ICD"', () => {
        icd.editaIcd()
    })
})