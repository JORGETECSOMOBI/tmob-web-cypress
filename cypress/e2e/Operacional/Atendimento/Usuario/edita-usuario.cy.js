import usuario from '../../../../pages/Atendimento/Usuario/UsuarioHomePage'
import componente from '../../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import edita from '../../../../pages/Atendimento/Usuario/cadastroPage'
import mensagem from '../../../../fixtures/mensagens.json'

describe('Acessando a página de criação de novo ususário e Testando todas as funcionalidades', () => {

    beforeEach(() => {
        usuario.beforeUsuario()
    })

    it.skip('Edita usuário', () => {
        componente
            .escreveNomeId()
            .clicaBotaoHomepesquisar()
            .clicaBotaoHomeEditar('Editar')
        edita
            .selecionaTipoEditar('Abt')
            .limpaNomeCompleto()
            .editaNomeCompleto()
        componente
            .clicaBotao('Salvar')
            .clicaBotaoModal('Salvar')
            .validaMensagem(mensagem.editaUsuarioSucesso)
    })
})