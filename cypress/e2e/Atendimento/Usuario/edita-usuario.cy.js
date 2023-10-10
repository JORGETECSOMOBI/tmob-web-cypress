import usuario from '../../../pages/Atendimento/Usuario/UsuarioHomePage'
import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import edita from '../../../pages/Atendimento/Usuario/cadastroPage'
import mensagem from '../../../fixtures/mensagens.json'
import faker from 'faker-br'

describe('Acessando a página de criação de novo ususário e Testando todas as funcionalidades', () => {

    beforeEach(() => {
        usuario.beforeUsuario()
    })

    it('Edita usuário', () => {
        componente
            .escreveNomeId('4054')
            .clicaBotaoHomepesquisar()
            .clicaBotaoHomeEditar('Editar')

        edita
            .selecionaTipoEditar('Abt')
            .limpaNomeCompleto()
            .editaNomeCompleto(faker.name.findName())
        componente
            .clicaBotao('Salvar')
            .clicaBotaoModal('Salvar')
            .validaMensagem(mensagem.editaUsuarioSucesso)

    })
})