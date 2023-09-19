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
            .selecionaLinguagem('PT')
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

    it('Forçando geração de arquivo já atualizado', () => {
        componente
            .clicaBotao('Forçar geração')
            .clicaBotaoModal('Sim')
            .validaMensagem('Estamos processando seu arquívo operacional.')
            .validaMensagem('O arquívo operacional já está atualizado.')
    })
})