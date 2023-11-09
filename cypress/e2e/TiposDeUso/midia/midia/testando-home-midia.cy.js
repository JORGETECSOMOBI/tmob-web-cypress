import midia from '../../../../pages/midia/MidiaHome'

describe('Testando home "Midia"', () => {

    beforeEach(() => {
        midia.beforeMidiaHome()
    })

    it('testando filtro por nome', () => {
        midia.pesquisarMidiaNome()
    })

    it('testando filtro por Status "Processado"', () => {
        midia.pesquisaFiltroStatusProcessado()
    })

    it('testando filtro por Status "Inativo"', () => {
        midia.pesquisaFiltroStatusInativo()
    })

    it('testando filtro por Status "Pendente"', () => {
        midia.pesquisaFiltroStatusPendente()
    })

    it('testando filtro por Status "Hotlist"', () => {
        midia.pesquisaFiltroStatusHotlist()
    })

    it('testando filtro por tipo de cartão', () => {
        midia.pesquisaPorTipoDeCartao()
    })

    it('testando funcionalidade "novo"', () => {
        midia.funcionalidadeNovo()
    })

    it('testando funcionalidade "Visualizar"', () => {
        midia.funcionalidadeVisualizar()
    })

    it('testando funcionalidade "Editar"', () => {
        midia.funcionalidadeEditar()
    })
})