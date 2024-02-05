import arquivosMidia from '../../../../pages/midia/ArquivosDeMidiaPage'

describe('Testando tela de Arquivos de mídia', () => {
    beforeEach(() => {
        arquivosMidia.beforeArquivoDeMidia()
    })

    it('Filtrando por Id', () => {
        arquivosMidia.filtrandoPorId()
    })

    it('Filtrando por nome', () => {
        arquivosMidia.filtrandoPorNome()
    })

    it('Botão Hotlist', () => {
        arquivosMidia.botaoHotlist()
    })

    it('Botão Produtos em Hotlist', () => {
        arquivosMidia.botaoProdutosEmHotlist()
    })

    it('Botão Hotlist Permanente', () => {
        arquivosMidia.botaoHotlistPermanente()
    })

    it('Botão Recargas', () => {
        arquivosMidia.botaoRegargas()
    })

    it('Botão Forçar geração', () => {
        arquivosMidia.botaoForcarGeracao()
    })

    it.skip('Botão Download (Chamado aberto para correções: TMOB-2910', () => {
        arquivosMidia.botaoDownload()
    })

})