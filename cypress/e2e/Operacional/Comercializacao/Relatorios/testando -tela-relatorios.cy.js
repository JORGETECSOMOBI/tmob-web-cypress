import relatorio from '../../../../pages/Comercializacao/RelatorioPage'

describe('Testando tela "Relatórios"', () => {

    beforeEach(() => {
        relatorio.beforeRelatorios()
    })

    it('Gerando um relatório do tipo Sangria XLS', () => {
        relatorio.gerandoRelatorioSangriaFiltroInicioXLSX()
    })

    it('Gerando um relatório do tipo Sangria CSV', () => {
        relatorio.gerandoRelatorioSangriaFiltroInicioCSV()
    })

    it('Gerando um relatório do tipo Sangria CSV', () => {
        relatorio.gerandoRelatorioTransacoesAnaliticasFiltroInicioCSV()
    })

    it('Gerando um relatório do tipo Sangria XLSX', () => {
        relatorio.gerandoRelatorioTransacoesAnaliticasFiltroInicioXLSX()
    })

    it('Exclui arquivos da pasta "Download', () => {
        cy.limparPastaDownloads()
    })
})
