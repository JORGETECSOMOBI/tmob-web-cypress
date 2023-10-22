import midia from '../../../pages/midia/MidiaHome'
import componentes from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import mensagem from '../../../fixtures/mensagens.json'

describe('Testando limite de uso', () => {

    beforeEach(() => {
        midia.beforeMidiaHome()
    })

    it('cadastrando um novo limite de uso "Classic"', () => {
        midia
            .acessalimiteDeUso()
        componentes
            .clicaBotaoNovo()
        midia
            .escreveDescricao()
            .selecionaTipoClassic()
            .selecionaTipoTempo()
            .selecionaLimiteTempo()
        componentes
            .selecionaStatus('Inativo')
            .clicaBotaoSalvar()
            .clicaBotaoSim()
            .validaMensagem(mensagem.concluido)
    })

    it('cadastrando um novo limite de uso "SL3"', () => {
        midia
            .acessalimiteDeUso()
        componentes
            .clicaBotaoNovo()
        midia
            .escreveDescricao()
            .selecionaTipoSL3()
            .limeiteHorario()
            .limiteDia()
        componentes
            .selecionaStatus('Inativo')
            .clicaBotaoSalvar()
            .clicaBotaoSim()
            .validaMensagem(mensagem.concluido)
    })
})