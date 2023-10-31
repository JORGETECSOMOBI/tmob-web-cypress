import midia from '../../../../pages/midia/MidiaHome'
import componentes from '../../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import mensagem from '../../../../fixtures/mensagens.json'

describe('Testando Cadastro de cartão', () => {

    beforeEach(() => {
        midia.beforeMidiaHome()
    })

    it('cadastrando um cartão novo', () => {
        componentes
            .clicaBotaoNovo()
        midia
            .selecionaEmissor()
            .selecionaUsuarioMidia()
            .selecionaTipoMidia()
        componentes
            .clicaBotaoSalvar()
            .clicaBotaoSim()
            .validaMensagem(mensagem.criaCartaoMidiaSucesso)
    })

    it.only('Editar um cartão ', () => {
        componentes
            .clicaBotaoEditar()
        midia
            .selecionaEmissor()
            .selecionaTipoMidia()
        componentes
            .selecionaIdioma('PT')
            .clicaBotaoSalvar()
            .clicaBotaoSim()
            .validaMensagem(mensagem.criaCartaoMidiaSucesso)
    })
})