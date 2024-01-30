import arquivosOperacionais from '../../../../pages/midia/ArquivosOperacionaisPage'

describe('Testando tela Arquivos Operacionais', () => {
    beforeEach(() => {
        arquivosOperacionais.beforeArquivosOperacionais()
    })

    it('Pesquisando por ID', () => {
        arquivosOperacionais.filtrandoPorId()
    })

    it('Pesquisando por Tag Atual', () => {
        arquivosOperacionais.filtrandoPorTagAtual()
    })

    it('Pesquisando por Tag Principal', () => {
        arquivosOperacionais.filtrandoPorTagPricipal()
    })

    it('Pesquisando por Tag Alt', () => {
        arquivosOperacionais.filtrandoPorTagAlt()
    })

    it.skip('Força geração de arquivo operacional já anteriormente atualizado, (Chamado para correções aberto, TMOB-2798, status 30/01/2024:wating-DEV)', () => {
        arquivosOperacionais.gerandoUmArquivoJaAtualizado()
    })

    it('Força geração de arquivo operacional com nova atualização de grupo de tempo', () => {
        arquivosOperacionais.gerandoUmArquivoNovaAtualizacaoGrupoDeTempo()
    })

    it('Força geração de arquivo operacional com nova atualização de Limite de uso', () => {
        arquivosOperacionais.gerandoUmArquivoNovaAtualizacaoLimiteDeUso()
    })

    it('Força geração de arquivo operacional com nova atualização de Produto de transporte', () => {
        arquivosOperacionais.gerandoUmArquivoNovaAtualizacaoProdutoDeTransporte()
    })

    it('Força geração de arquivo operacional com nova atualização de Produto externo', () => {
        arquivosOperacionais.gerandoUmArquivoNovaAtualizacaoProdutoExterno()
    })

    it('Força geração de arquivo operacional com nova atualização de Cotas', () => {
        arquivosOperacionais.gerandoUmArquivoNovaAtualizacaoCotas()
    })
})