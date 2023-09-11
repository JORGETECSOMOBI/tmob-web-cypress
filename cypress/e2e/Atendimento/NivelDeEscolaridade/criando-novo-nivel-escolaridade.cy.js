import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
import usuario from '../../../pages/Atendimento/Usuario/UsuarioHomePage'
import nivelEscolaridade from '../../../pages/Atendimento/NivelEscolaridade/NovoNivelEscolaridadePage'


describe('Criando um novo nível de escolaridade', () => {

    beforeEach(() => {
        login.go()
        login.signin()
        home.usuario()
        usuario.acessandoTelaNivelDeEscolaridade()
    })

    it(' Criando um novo nível de escolaridade com sucesso', () => {
        nivelEscolaridade
            .clicaBotaoNovo({ force: true })
            .escreveNovoNivelEscolaridade('escolaridadeautomatico')
            .clicaBotaoSalvar()
            .clicaBotaoSalvarModal()
            .ValidaMensagemDeSucesso('Nível de escolaridade do usuário foi criado com sucesso!')
    })
})