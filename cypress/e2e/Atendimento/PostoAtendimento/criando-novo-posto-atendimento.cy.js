import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
import usuario from "../../../pages/Usuario/UsuarioHomePage"
import novoPostoAtendimento from "../../../pages/Usuario/NovoPostoAtendimentoPage"

describe('Acessando a home de usuário e validando o acesso de todos os itens do menu', () => {

    beforeEach(() => {
        login.go()
        login.signin()
        home.usuario()
    })

    it('Cenário: editando e salvando com sucesso a criação de um novo"Posto de atendimento"', () => {
        usuario.acessandoTelaPostosDeAtendimento()
        novoPostoAtendimento.novo()
                            .descricao()
                            .nome()
                            .cep()
                            .numero()
                            .complemento()
                            .salvar()
                            .cadastrarSim()
                            .validaMensagemDesucesso()
    })
})      