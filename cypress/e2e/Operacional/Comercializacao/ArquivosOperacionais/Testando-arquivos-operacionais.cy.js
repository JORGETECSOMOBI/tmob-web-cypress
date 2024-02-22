import arquivos from '../../../../pages/Comercializacao/ArquivosOperacionaisPage'

describe('Testando tela "Arquivos operacionais"', () => {

    beforeEach(() => {
        arquivos.beforeArquivosOperacionais()
    })

    it('Filtrando por "ID"', () => {
        arquivos.filtroPoId()
    })

    it('Filtrando por "Nome do arquivo"', () => {
        arquivos.filtroPoNomeArquivo()
    })

    it('Filtrando por tag "Atual"', () => {
        arquivos.filtroPoTagAtual()
    })

    it('Filtrando por tag "Principal"', () => {
        arquivos.filtroPoTagPrincipal()
    })

    it('Filtrando por tag "Alt"', () => {
        arquivos.filtroPoTagAlt()
    })

    it('Testando função "Forçar geração"', () => {
        arquivos.forcarGeracao()
    })

    it('Testando função "Limpar filtro"', () => {
        arquivos.limpaFiltro()
    })
})