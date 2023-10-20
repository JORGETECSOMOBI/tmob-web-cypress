import midia from '../../pages/midia/MidiaHome'
import componentes from '../../pages/ComponentesPadrao/ComponentesPadraoPage'
import mensagem from '../../fixtures/mensagens.json'

describe('Testando Cadastro de cartão', () => {

    beforeEach(() => {
        midia.beforeMidiaHome()
    })

    it('cadastrando um cartão novo', () => {
        componentes
            .clicaBotaoNovo()
        midia
            .selecionaUsuarioMidia()
            .selecionaEmissor()
            .selecionaTipoMidia()
        componentes
            .clicaBotaoSalvar()
            .clicaBotaoSim()
            .validaMensagem(mensagem.criaCartaoMidiaSucesso)
    })

    it.skip('Editar um cartão ', () => {
        componentes
            .clicaBotaoEditar()
        midia
            .selecionaEmissor()
            .selecionaTipoMidia()
        componentes
            .clicaBotaoSalvar()
            .clicaBotaoSim()
            .validaMensagem(mensagem.criaCartaoMidiaSucesso)
    })
})