import voucher from '../../../../pages/Comercializacao/SolicitarVoucherPage'

describe('Solicitando voucher', () => {

    beforeEach(() => {
        voucher.beforeSolicitarVoucher()
    })

    it('Solicitando voucher tipo "Mídia"', () => {
        voucher.solicitandoVoucherMidia()
    })

    it('Solicitando voucher tipo "Mídia externa"', () => {
        voucher.solicitandoVoucherMidiaExterna()
    })

    it('Solicitando voucher tipo "QR code"', () => {
        voucher.solicitandoVoucherQRcode()
    })

    it.skip('Solicitando voucher tipo sem valor financeiro(Chamado para correções aberto: TMOB-2932)', () => {
        voucher()
    })

    it.skip('Solicitando voucher sem data de expiração(Chamado para correções aberto: TMOB-2933)', () => {
        voucher()
    })
})