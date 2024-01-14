import regras from '../../../../pages/Tarifario/RegrasPage'

describe('Testando tela de "Regras"', () => {

    beforeEach(() => {
        regras.beforeRegras()
    })

    it('Testando filtro por "ID"', () => {
        regras.filtroPorId()
    })

    it('Testando filtro por "Descrição"', () => {
        regras.filtroPorDescricao()
    })

    it('Testando filtro por "Modelo de tarifa flatFare"', () => {
        regras.filtroPorModeloTarifaFlatFare()
    })

    it('Testando filtro por "Modelo de tarifa Section"', () => {
        regras.filtroPorModeloTarifaSection()
    })

    it('Testando filtro por "Modelo de tarifa CheckinCkeckout")', () => {
        regras.filtroPorModeloTarifaCheckinCheckout()
    })

    it('Testando filtro por "Tipo de tarifa Integração"', () => {
        regras.filtroPorTipoTarifaIntegracao()
    })

    it('Testando filtro por "Tipo de tarifa Linha"', () => {
        regras.filtroPorTipoTarifaLinha()
    })

    it('Testando filtro por "Status Ativo"', () => {
        regras.filtroPorStatusAtivo()
    })

    it('Testando filtro por "Status Inativo"', () => {
        regras.filtroPorStatusInativo()
    })

    it('Testando filtro por "Padrão Sim"', () => {
        regras.filtroPorPadraoSim()
    })

    it('Testando filtro por "Padrão Não"', () => {
        regras.filtroPorPadraoNao()
    })

    it('Testando botão "Visualizar"', () => {
        regras.botaoVisualizar()
    })

    it('Testando Botão "Editar"', () => {
        regras.botaoEditar()
    })

    it('Testando filtro por "Novo"', () => {
        regras.botaoNovo()
    })

    it('Testando filtro por "Limpa Filtro"', () => {
        regras.botaoLimpaFiltro()
    })
})