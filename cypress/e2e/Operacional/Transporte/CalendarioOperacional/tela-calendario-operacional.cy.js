import calendarioOperacional from '../../../../pages/Transporte/CalendarioOperacionaPage'

describe('Testando "Arquivos Operacionais', () => {

    beforeEach(() => {
      calendarioOperacional.beforeCalendarioOperacional()
    })

    it('testando filtro por id', () => {
       calendarioOperacional.testandoFiltroId()
    })

    it('testando filtro por status', () => {
       calendarioOperacional.testandoFiltroStatus()
    })

    it('testando botão "Visualizar"', () => {
       calendarioOperacional.testandoBotaoVisualizar()
    })

    it('testando botão "Editar"', () => {
      calendarioOperacional.testandoBotaoEditar()
    })

    it('testando botão "Limpar filtro"', () => {
       calendarioOperacional.testandoBotaoLimparFiltros()
    })
})