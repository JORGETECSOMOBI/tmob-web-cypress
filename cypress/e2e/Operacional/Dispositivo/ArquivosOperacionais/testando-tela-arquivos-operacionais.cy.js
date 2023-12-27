import arquivosOperacionais from '../../../../pages/Dispositivo/ArquivosOperacionaisPage'

describe('Testando tela "Arquivos operacionais"', () => {

    beforeEach(() => {
        arquivosOperacionais.beforeArquivosOperacionais()
    })

    it('Testando filtro por Id do arquivo', () => {
        arquivosOperacionais.filtrandoPorId()
    })

    it('Testando filtro por nome do arquivo', () => {
        arquivosOperacionais.filtrandoPorNome()
    })

    it('Altera Tag para "Tag Principal" ', () => {
        arquivosOperacionais.alterandoParaTagPrincipal()
    })

    it('Testando filtro por "Tag Principal" ', () => {
        arquivosOperacionais.filtrandoPorTagPrincipal()
    })

    it('Testando filtro por "Tag Atual" ', () => {
        arquivosOperacionais.filtrandoPorTagAtual()
    })

    it('Altera Tag para "Tag Alt" ', () => {
        arquivosOperacionais.alterandoParaTagAlt()
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

    it('Forçando a geração "arquivo atualizado"', () => {
        arquivosOperacionais.forcarGeracaoAtualizada()
    })

    it('Forçando a geração arquivo nova atualização "feriado"', () => {
        arquivosOperacionais.forcarGeracaoNovaAtualizacaoFeriado()
    })
})
