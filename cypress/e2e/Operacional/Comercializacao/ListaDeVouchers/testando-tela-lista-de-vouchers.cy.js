import vouchers from '../../../../pages/Comercializacao/ListaDeVouchersPage'

describe('Testando tela lista de Vouchers', () => {

    beforeEach(() => {
        vouchers.beforeListaDeVouchers()
    })

    it('Testando filtro por "Número do voucher"', () => {
        vouchers.filtroNumeroVoucher()
    })

    it('Testando filtro por "Período"', () => {
        vouchers.filtroPeriodo()
    })

    it('Testando filtro por "Data de expiração"', () => {
        vouchers.filtroDataDeExpiracao()
    })

    it('Testando filtro por "Terminal"', () => {
        vouchers.filtroTerminal()
    })

    it('Testando filtro por modo de geração "Manual"', () => {
        vouchers.filtroMododeGeracaoManual()
    })

    it('Testando filtro por modo de geração "Automático"', () => {
        vouchers.filtroMododeGeracaoAuto()
    })

    it.skip('Testando filtro por status "Expirado"(Chamado aberto para correções: TMOB-2920', () => {
        vouchers.filtroStatusExpirado()
    })

    it('Testando filtro por status "Usado"', () => {
        vouchers.filtroStatusUsado()
    })

    it.skip('Testando filtro por status "Bloqueado"(Chamado aberto para correções: TMOB-2920', () => {
        vouchers.filtroStatusBloqueado()
    })

    it.skip('Testando filtro por status "Sem uso"(Chamado aberto para correções: TMOB-2920', () => {
        vouchers.filtroStatusSemUso()
    })

    it('Testando botão "Visualizar geração auto"', () => {
        vouchers.botaoVisualizarGeracaoAuto()
    })

    it.skip('Testando botão "Visualizar geração manual"(Chamado aberto para correções: TMOB-2919)', () => {
        vouchers.botaoVisualizarGeracaoManual()
    })

    it('Testando função "Limpar filtro"', () => {
        vouchers.botaoLimpaFiltro()
    })
})

