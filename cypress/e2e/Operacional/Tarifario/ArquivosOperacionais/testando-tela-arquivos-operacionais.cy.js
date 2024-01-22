import arquivosoperacionais from '../../../../pages/Tarifario/ArquivosOperacionaisPage'

describe('Testando tela "Arquivos Operacionais"', () => {

    beforeEach(() => {
        arquivosoperacionais.beforeArquivosOperacionais()
    })

    it('Testando filtro por "ID"', () => {
        arquivosoperacionais.filtroPorId()
    })

    it('Testando filtro por "Nome de arquivo"', () => {
        arquivosoperacionais.filtroPorNomeDoarquivo()
    })

    it('Testando filtro por Tag "Atual"', () => {
        arquivosoperacionais.filtrandoPorTagAtual()
    })

    it('Testando filtro por Tag "Principal"', () => {
        arquivosoperacionais.filtrandoPorTagPrincipal()
    })

    it('Alternando tag para "Alt"', () => {
        arquivosoperacionais.alternandoTagAlt() 
    })
        
    it('Alternando tag para "Pricipal"', () => {
        arquivosoperacionais.alternandoTagPrincipal()
    })

    it('Testando botão "Visualizar"', () => {
        arquivosoperacionais.botaoVisualizar()
    })

    it('Testando botão "Download"', () => {
        arquivosoperacionais.download()
    })
})