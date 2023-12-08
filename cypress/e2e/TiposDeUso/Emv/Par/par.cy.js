import par from '../../../../pages/Emv/ParPage'

describe('acessando emv e Testando a página Par', () => {
    beforeEach(() => {
        par.beforePar()
    })

    it(' Pesquisando usando como filtro o número do "Par"', () => {
        par.pesquisaNumeroPar()
    })

    it(' Pesquisando usando como filtro o período', () => {
        par.filtroPorPeriodo()
    })

    it(' Pesquisando usando como filtro o status do Hotlist', () => {
        par.filtroPorHotlistBloqueado()
    })

    it(' Pesquisando usando como filtro o status do Hotlist', () => {
        par.filtroPorHotlistDesbloqueado()
    })

    it(' Pesquisando usando o filtro status Ativo', () => {
        par.filtroPorStatusAtivo()
    })

    it(' Pesquisando usando o filtro status Inativo', () => {
        par.filtroPorStatusInativo()
    })

    it(' Testando botão visualizar', () => {
        par.botaoVisualizar()
    })
})