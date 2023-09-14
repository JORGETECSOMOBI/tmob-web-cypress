import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
import usuario from "../../../pages/Atendimento/Usuario/UsuarioHomePage"
import novoTipoUsuario from "../../../pages/Atendimento/TipoDeUsuario/NovoTipoUsuarioPage"
import editaTipoUsuario from "../../../pages/Atendimento/TipoDeUsuario/EditaTipoUsuario"
import botao from "../../../pages/ComponentesPadrao/botoesPage"
import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'

describe('Editando "tipo de Usuário', () => {

    beforeEach(() => {
        login.go()
            .signin()
        home
            .usuario()
        usuario
            .acessandoTelaTiposDeUsuario()
        componente
            .selecionaLinguagem('PT')
    })

    it('Edita com sucesso Tipo de usuário', () => {

        editaTipoUsuario
            .pesquisaTipoUsuario('Usuário Automação')
            .editaTipoUsuario()
            .limpaDescricao()
        novoTipoUsuario
            .descricao('edição tipo de usuário')
        editaTipoUsuario
            .limpaIdadeMinima()
        novoTipoUsuario
            .idadeMinima('1')
        editaTipoUsuario
            .limpaIdadeMaxima()
        novoTipoUsuario
            .idadeMaxima('120')
        editaTipoUsuario
            .limpaComentario()
        botao
            .clicaBotao('Inativo')
        novoTipoUsuario
            .escreveComentario('Uia, Uia, Uia')
            .salvaNovoTipoDeUsuario()
        editaTipoUsuario
            .confirmaEdicaoTipoUsuario()
            .validaMensagemDeSucessoEdicaoTipousuario('Tipo de usuário foi editado com sucesso!')

    })

})
