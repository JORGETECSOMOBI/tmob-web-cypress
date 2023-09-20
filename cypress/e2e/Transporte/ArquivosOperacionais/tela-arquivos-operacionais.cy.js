import login from '../../../pages/Login/LoginPage'
import home from '../../../pages/Home/HomePage'
import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import arquivoOperacional from '../../../pages/Transporte/ArquivoOperacionalPage'

describe('Testando "Arquivos Operacionais', () => {

    beforeEach(() => {
        login
            .go()
            .signin()
        home
            .transporte()
        componente
            .validaURL('https://web.test.tmob.com.br/transport')
            .selecionaIdioma('PT')
            .clicaBotao('Arquivos Operacionais')
    })

    it('testando filtro por id', () => {
        arquivoOperacional
            .pesquisaId('1339')
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
            .clicaBotaoModal('Sim')
            .validaMensagem('Estamos processando seu arquívo operacional.')
            .validaMensagem('Seu arquívo operácional foi gerado com sucesso.')
    })

    it('Alterando as tags ', () => {
        componente
            .pesquisaId('1356')
        arquivoOperacional
            .clicaBotaoTag()
            .SelecionaTag('Alt')
        componente
            .clicaBotao('Confirmar')
    })
})