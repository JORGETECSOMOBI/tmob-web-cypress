import arquivosOperacionais from '../../../../pages/Dispositivo/ArquivosOperacionaisPage'

describe('Testando tela arquivos de configuração operacionail', () => {

    beforeEach(() => {
        arquivosOperacionais.beforeArquivosOperacionais()
    })
    it('Testando filtro por "ID" ', () => {
        arquivosOperacionais.filtrandoPorIdConfiguracao()
    })

    it('Testando filtro por "Nome" ', () => {
        arquivosOperacionais.filtrandoPorNomeConfiguracao()
    })

    it('Testando filtro por "Ativo" ', () => {
        arquivosOperacionais.filtrandoStatusAtivo()
    })

    it('Testando filtro por "Descontinuado" ', () => {
        arquivosOperacionais.filtrandoStatusdescontinuado()
    })
})