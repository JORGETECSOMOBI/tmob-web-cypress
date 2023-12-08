import login from '../Login/LoginPage'
import home from '../Home/HomePage'
import componente from '../ComponentesPadrao/ComponentesPadraoPage'
import grupoDetempo from '../midia/GrupoDetempoPage'
import limiteDeUso from '../midia/LimiteDeUso'
import produtoDeTransporte from '../midia/ProdutoDeTransportePage'
import produtoExterno from '../midia/ProdutoExternoPage'
import cotas from '../midia/CotasPage'
import url from '../../fixtures/url.json'

class ArquivosOperacionaisPage {
    beforeArquivosOperacionais() {
        login.go()
        login.signin()
        home.tiposDeUso()
        home.midia()
        componente
            .validaURL(url.midia)
            .selecionaIdioma('PT')
            .clicaBotao('Arquivos Operacionais')
        return this
    }

    //Testes

    filtrandoPorId() {
        componente.pesquisaId('1071')
            .validaDescricaoAntTableRow('1071')
        return this
    }

    filtrandoPorTagAtual() {
        this.filtroPorStatus('Atual')
        return this
    }

    filtrandoPorTagPricipal() {
        this.filtroPorStatus('Principal')
        return this
    }

    filtrandoPorTagAlt() {
        this.filtroPorStatus('Alt')
        return this
    }

    gerandoUmArquivoNovaAtualizacaoGrupoDeTempo() {
        this
            .editaUmArquivoAtualizadoGrupoDeTempo()
        return this
    }

    gerandoUmArquivoNovaAtualizacaoLimiteDeUso() {
        this
            .editaUmArquivoAtualizadoLimiteDeUso()
        return this
    }

    gerandoUmArquivoNovaAtualizacaoProdutoDeTransporte() {
        this
            .editaUmArquivoAtualizadoProdutoDeTransporte()
        return this
    }

    gerandoUmArquivoNovaAtualizacaoProdutoExterno() {
        this
            .editaUmArquivoAtualizadoProdutoExterno()
        return this
    }

    gerandoUmArquivoNovaAtualizacaoCotas() {
        this
            .editaUmArquivoAtualizadoCotas()
        return this
    }

    gerandoUmArquivoJaAtualizado() {
        this.botaoForcarGeração()
        componente
            .validatexto('Estamos processando seu arquívo operacional.')
            .validatexto('O arquívo operacional já está atualizado.')
        return this
    }

    //Funções

    filtroPorStatus(tag) {
        cy.get('#status').click({ force: true })
        cy.get('[title]').contains(tag).click({ force: true })
        return this
    }

    botaoForcarGeração() {
        componente
            .clicaBotao('Forçar geração')
            .clicaBotaoSim()
        return this
    }

    editaUmArquivoAtualizadoGrupoDeTempo() {
        componente
            .clicaBotao('Grupo de tempo')
        grupoDetempo
            .criaNovoGrupoDetempo()
            .editaUmGrupoDeTempo()
        componente
            .clicaBotao('Arquivos Operacionais')
        this
            .botaoForcarGeração()
        componente
            .validatexto('Estamos processando seu arquívo operacional.')
            .validatexto('Seu arquívo operácional foi gerado com sucesso.')
        return this

    }

    editaUmArquivoAtualizadoLimiteDeUso() {
        componente
            .clicaBotao('Limite de uso')
        limiteDeUso
            .cadastraLimiteDeUso()
            .editaLimiteDeUso()
        componente
            .clicaBotao('Arquivos Operacionais')
        this
            .botaoForcarGeração()
        componente
            .validatexto('Estamos processando seu arquívo operacional.')
            .validatexto('Seu arquívo operácional foi gerado com sucesso.')
        return this

    }

    editaUmArquivoAtualizadoProdutoDeTransporte() {
        componente
            .clicaBotao('Produto de transporte')
        produtoDeTransporte
            .editandoUmGrupoDeTransporte()
            //.editandoUmGrupoDeTransporteEditado()
        componente
            .clicaBotao('Arquivos Operacionais')
        this
            .botaoForcarGeração()
        componente
            .validatexto('Estamos processando seu arquívo operacional.')
            .validatexto('Seu arquívo operácional foi gerado com sucesso.')
        return this
    }

    editaUmArquivoAtualizadoProdutoExterno() {
        componente
            .clicaBotao('Produto externo')
        produtoExterno
            .editaProdutoexterno()
        componente
            .clicaBotao('Arquivos Operacionais')
        this
            .botaoForcarGeração()
        componente
            .validatexto('Estamos processando seu arquívo operacional.')
            .validatexto('Seu arquívo operácional foi gerado com sucesso.')
        return this

    }

    editaUmArquivoAtualizadoCotas() {
        componente
            .clicaBotao('Cotas')
        cotas
            .criandoNovaCota()
            .editandoCota()
        componente
            .clicaBotao('Arquivos Operacionais')
        this
            .botaoForcarGeração()
        componente
            .validatexto('Estamos processando seu arquívo operacional.')
            .validatexto('Seu arquívo operácional foi gerado com sucesso.')
        return this

    }
}
export default new ArquivosOperacionaisPage