
import arquivoOperacional from '../../../../pages/Transporte/ArquivoOperacionalPage'

describe('Testando "Arquivos Operacionais', () => {

    beforeEach(() => {
        arquivoOperacional.beforeOpe()
    })

    it('testando filtro por id', () => {
        arquivoOperacional.pesquisaId()
    })

    it('testando filtro por nome do arquivo', () => {
        arquivoOperacional.pesquisaNomeArquivo()
    })

    it('testando filtro por Tag', () => {
        arquivoOperacional.pesquisaTag()
    })

    it('Forçando geração de arquivo já anteriormente atualizado', () => {
       arquivoOperacional.forcandoGeraçãoArquivoAtualizado()
    })

    it('forçando a geração de um arquivo operacional com nova atualização', () => {
        arquivoOperacional.forcandoGeraçãoNovaAtualização()
    })

    it('Alterando a tag para alt ', () => {
       arquivoOperacional.alterandoTagParaAlt()
    })

    it('Alterando a tag para principal ', () => {
      arquivoOperacional.alterandoTagParaPrincipal()
    })

    it('Desvinculando a tag do arquivo ', () => {
       arquivoOperacional.desvinculandoTag()
    })

    it('Clicando no botão "Visualizar', () => {
       arquivoOperacional.testandoBotaovisualizar()
    })

    it('Fazendo Dowmload do arquivo', () => {
        arquivoOperacional.fazendoDownloadArquivo()
    })
})