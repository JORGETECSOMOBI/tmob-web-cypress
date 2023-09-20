import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
import usuario from "../../../pages/Atendimento/Usuario/UsuarioHomePage"
import novoPostoAtendimento from "../../../pages/Atendimento/PostoDeAtendimento/NovoPostoAtendimentoPage"
import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'

describe('Testando a tela "Usuário"', () => {

    beforeEach(() => {
        login
            .go()
            .signin()
        home
            .usuario()
        usuario
            .acessandoTelaPostosDeAtendimento()
        componente
            .validaURL('https://web.test.tmob.com.br/user/servicestations')
            .selecionaIdioma('PT')
    })

    it(' Criando e salvando com sucesso a criação de um novo"Posto de atendimento"', () => {
        componente
            .clicaBotao('Novo')
        novoPostoAtendimento
            .descricao('Teste Automático')
            .nome('Teste Automático')
            .cep(12903000)
            .numero(2000)
            .complemento('nãotem')
            .salvar()
            .cadastrarSim()
            .validaMensagemDesucesso('Posto de atendimento cadastrado com sucesso')
    })
})      