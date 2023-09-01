import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
import usuario from "../../../pages/Atendimento/Usuario/UsuarioHomePage"
import novoPostoAtendimento from "../../../pages/Atendimento/PostoDeAtendimento/NovoPostoAtendimentoPage"

describe('Acessando a home de usuário e validando o acesso de todos os itens do menu', () => {

    beforeEach(() => {
        login.go()
        login.signin()
        home.usuario()
        usuario.acessandoTelaPostosDeAtendimento()
    })

    it('Cenário: editando e salvando com sucesso a criação de um novo"Posto de atendimento"', () => {
        novoPostoAtendimento.novo()
                            .limpaDescricao()
                            .descricao('Teste de edição')
                            .limpaNome()
                            .nome('Teste de edição')
                            .limpaCep()
                            .cep(12903443)
                            .numero(2000)
                            .complemento('nãotem')
                            .salvar()
                            .cadastrarSim()
                            .validaMensagemDesucesso('Posto de atendimento cadastrado com sucesso')
    })
}) 