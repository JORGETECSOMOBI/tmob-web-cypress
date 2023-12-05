import par from '../../../../pages/Emv/ParPage'

describe('acessando emv e Testando a página Par', () => {
    beforeEach(() => {
        par.beforePar()
    })

    it(' pesquisando usando como filtro o número do "Par', () => {
        par.pesquisaNumeroPar()
    })
})