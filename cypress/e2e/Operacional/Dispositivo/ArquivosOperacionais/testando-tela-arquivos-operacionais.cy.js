import arquivosOperacionais from '../../../../pages/Dispositivo/ArquivosOperacionaisPage'

describe('Testando tela arquivos operacionais', () => {

    beforeEach(() => {
        arquivosOperacionais.beforeArquivosOperacionais()
    })

    it('Testando filtro por Id do arquivo', () => {
        arquivosOperacionais.filtrandoPorIdConfiguracao()
    })

    it('Testando filtro por nome do arquivo', () => {
        arquivosOperacionais.filtrandoPorNomeConfiguracao()
    })

    it('Testando filtro por "Tag Principal" ', () => {
        arquivosOperacionais.filtrandoPorTagPrincipal()
    })

    it('Testando filtro por "Tag Atual" ', () => {
        arquivosOperacionais.filtrandoPorTagAtual()
    })

    it('Testando filtro por "Tag Alt" ', () => {
        arquivosOperacionais.filtrandoPorTagAlt()
    })

    it('Testando botão "Visualizar" ', () => {
        arquivosOperacionais.botaoVisualizar()
    })

    it('Testando botão "Download" ', () => {
        arquivosOperacionais.download()
    })

    it.skip('Altera Tag para "Tag Principal" ', () => {
        arquivosOperacionais.alterandoParaTagPrincipal()
    })

    it.skip('Altera Tag para "Tag Alt" ', () => {
        arquivosOperacionais.alterandoParaTagAlt()
    })
})
