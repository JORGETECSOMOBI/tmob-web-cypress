import componente from '../../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import arquivoOperacional from '../../../../pages/Transporte/ArquivoOperacionalPage'

describe('Testando "Arquivos Operacionais', () => {

    beforeEach(() => {
        arquivoOperacional.beforeOpe()
    })

    it('testando filtro por id', () => {
        arquivoOperacional
            .pesquisaId('1339')
    })

    it('testando filtro por nome do arquivo', () => {
        arquivoOperacional
            .pesquisaNomeArquivo('1695295649246_op.enc')
    })



    it('testando filtro por Tag', () => {
        arquivoOperacional
            .pesquisaTag('Principal')
    })

    it('Forçando geração de arquivo já anteriormente atualizado', () => {
        componente
            .clicaBotao('Forçar geração')
            .clicaBotaoModal('Sim')
            .validaMensagem('Estamos processando seu arquívo operacional.')
            .validaMensagem('O arquívo operacional já está atualizado.')
    })

    it('forçando a geração de um novo arquivo operacional', () => {
        componente
            .clicaBotao('Grupo de operadora')
            .pesquisa('16')
            .clicaBotao('Editar')
            .limpaDescricao()
            .escreveDescricao('trilhos')
            .clicaBotao('Salvar')
            .clicaBotaoModal('Sim')
            .clicaBotao('Arquivos Operacionais')
            .clicaBotao('Forçar geração')
            .clicaBotao('Sim')
            .clicaBotao('Sim')
            .validaMensagem('Estamos processando seu arquívo operacional.')
            .validaMensagem('Seu arquívo operácional foi gerado com sucesso.')
    })

    it('Alterando a tag para alt ', () => {
        componente
            .pesquisaId('1356')
        arquivoOperacional
            .clicaBotaoTag()
            .SelecionaTag('Alt')
        componente
            .clicaBotao('Confirmar')
        arquivoOperacional
            .validaTagAlt('1356')

    })

    it('Alterando a tag para principal ', () => {
        componente
            .pesquisaId('1356')
        arquivoOperacional
            .clicaBotaoTag()
            .SelecionaTag('Principal')
        componente
            .clicaBotao('Confirmar')
        arquivoOperacional
            .validaTagPrincipal('1356')
    })

    it('Desvinculando a tag do arquivo ', () => {
        componente
            .pesquisaId('1356')
        arquivoOperacional
            .clicaBotaoTag()
            .SelecionaTag('Nenhuma')
        componente
            .clicaBotao('Confirmar')
        arquivoOperacional
            .ValidaTagPrincipalInativa('Nenhum OP utilizando esta tag')
            .validaTagAltInativa('Nenhum OP utilizando esta tag')
    })

    it('Clicando no botão "Visualizar', () => {
        componente
            .pesquisaId('1356')
            .clicaBotao('Visualizar')
            .validaURL('https://web.test.tmob.com.br/transport/operationalFile/1356')
            .validaMensagem('Selecionar arquivo para comparar')
    })

    it('Fazendo Dowmload do arquivo', () => {
        componente
            .pesquisaId('1356')
            .clicaBotao('Download')
    })
})