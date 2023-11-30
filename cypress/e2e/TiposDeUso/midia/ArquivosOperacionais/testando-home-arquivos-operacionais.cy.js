import arquivosOperacionais from '../../../../pages/midia/ArquivosOperacionaisPage'

describe('Testando todas as funcionalidades de Arquivos Operacionais', () => {
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
})