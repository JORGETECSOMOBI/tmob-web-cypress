import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
import usuario from "../../../pages/Atendimento/Usuario/UsuarioHomePage"
import novoTipoUsuario from "../../../pages/Atendimento/TipoDeUsuario/NovoTipoUsuarioPage"
import componente from "../../../pages/ComponentesPadrao/ComponentesPadraoPage"

describe('Testando "tipo de Usuário', () => {

    beforeEach(() => {
        login
            .go()
            .signin()
        home
            .usuario()
        usuario
            .acessandoTelaTiposDeUsuario()
        componente
            .selecionaIdioma('PT')
    })

    it('Tentativa de criar um novo Tipo de usuário com descrição já cadastrado no sistema', () => {
        componente
            .clicaBotao('Novo')
        novoTipoUsuario
            .idadeMinima('1')
            .idadeMaxima('120')
        componente
            .escreveDescricao('tipousuárioautomaçãoteste')
            .selecionaTipo('Funcionário')
            .clicaBotao('Salvar')
            .clicaBotaoModal('Salvar')
            .validaMensagem('A descrição inserida já existe em Tipo de usuário.')
    })

    it('Editando tipo de usuário com descrição já cadastrado no sistema ', () => {
        componente
            .pesquisa('tipousuárioautomaçãoteste')
            .clicaBotao('Editar')
        novoTipoUsuario
            .idadeMinima('1')
            .idadeMaxima('120')
        componente
            .limpaDescricao()
            .escreveDescricao('Novo nome1')
            .selecionaStatus('Inativo')
            .clicaBotao('Salvar')
            .clicaBotaoModal('Salvar')
            .validaMensagem('A descrição inserida já existe em Tipo de usuário.')
    })
})

