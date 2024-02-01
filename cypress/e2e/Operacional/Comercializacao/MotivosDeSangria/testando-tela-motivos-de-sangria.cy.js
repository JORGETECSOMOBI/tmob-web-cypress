import motivo from '../../../../pages/Comercializacao/MotivosDeSangriaPage'

describe('Testando tela "Motivos de sangria"', () => {

    beforeEach(() => {
        motivo.beforeMotivosDeSangria()
    })

    it.skip('Testando filtro por "ID"(Chamado aberto para correções: TMOB-2883)', () => {
        motivo.filtroPorId()
    })

    it('Testando filtro por tipo "Crédito"', () => {
        motivo.filtroPorTipoCredito()
    })

    it('Testando filtro por tipo "Débito"', () => {
        motivo.filtroPorTipoDebito()
    })

    it('Testando filtro por "Status Ativo"', () => {
        motivo.filtroPorStatusAtivo()
    })

    it('Testando filtro por "Status Inativo"', () => {
        motivo.filtroPorStatusInativo()
    })

    it('Testando botão "Visualizar"', () => {
        motivo.botaoVisualizar()
    })

    it('Testando Botão "Editar"', () => {
        motivo.botaoEditar()
    })

    it('Testando Botão "Novo"', () => {
        motivo.botaoNovo()
    })

    it('Testando Botão "Limpa Filtro"', () => {
        motivo.botaoLimpaFiltro()
    })
})