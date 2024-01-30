
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

    it.skip('Forçando geração de arquivo já anteriormente atualizado, (Chamado aberto para correções, TMOB 2783, status 30/01/2024: Waiting-DEV)', () => {
       arquivoOperacional.forcandoGeraçãoArquivoAtualizado()
    })

    it.skip('forçando a geração de um arquivo operacional com nova atualização, (Chamado aberto para correções, TMOB 2783, status 30/01/2024: Waiting-DEV)', () => {
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