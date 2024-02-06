import voucher from '../../../../pages/Comercializacao/SolicitarVoucherPage'

describe('Pesquisando voucher', () => {

    beforeEach(() => {
        voucher.beforeSolicitarVoucher()
    })

    it('Pesquisando voucher tipo "Mídia"', () => {
        voucher.pesquisandoVoucherTipoMidia()
    })

    it('Pesquisando voucher tipo "Mídia externa"', () => {
        voucher.pesquisandoVoucherTipoMidiaExterna()
    })

    it('Pesquisando voucher tipo "QR code"', () => {
        voucher.pesquisandoVoucherTipoQRcode()
    })

    it('Pesquisando voucher "Número de mídia"', () => {
        voucher.pesquisandoVoucherNumeroMidia()
    })
})