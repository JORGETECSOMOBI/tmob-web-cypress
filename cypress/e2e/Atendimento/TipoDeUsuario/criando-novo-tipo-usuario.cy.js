import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
import usuario from "../../../pages/Atendimento/Usuario/UsuarioHomePage"
import novoTipoUsuario from "../../../pages/Atendimento/TipoDeUsuario/NovoTipoUsuarioPage"

describe('Testando "tipo de Usuário', () => {

    beforeEach(() => {
        login.go()
        login.signin()
        home.usuario()
        usuario.acessandoTelaTiposDeUsuario()
        novoTipoUsuario.botaoNovoTipousuario()      
    })

    it('Criando com sucesso um novo Tipo de usuário', () => {
        novoTipoUsuario.descricao('novo tipo de usuário')
                       .idadeMinima('1')
                       .idadeMaxima('1000')
                       .tipo()
                       .escolheTipoUsuario('Operador')
                       .escreveComentario('Blá, Blá, Blá')
                       .salvaNovoTipoDeUsuario()
                       .confirmaCriacaoNovoTipoUsuario()
                       .validaMensagemDeSucessoCriacaoTipousuario('Tipo de usuário foi criado com sucesso!')                     
    })

})
