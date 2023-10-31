import usuario from "../../../../pages/Atendimento/Usuario/UsuarioHomePage"
import novoPostoAtendimento from "../../../../pages/Atendimento/PostoDeAtendimento/NovoPostoAtendimentoPage"
import componente from '../../../../pages/ComponentesPadrao/ComponentesPadraoPage'

describe('Acessando a home de usuário e Validando o acesso de todos os itens do menu', () => {

    beforeEach(() => {
       usuario.beforePostosAtendimento()
    })

    it('Editando e salvando com sucesso a criação de um novo"Posto de atendimento"', () => {
        componente
            .clicaBotao('Novo')
            .selecionaStatus('Inativo')
        novoPostoAtendimento
            .limpaDescricao()
            .descricao('Teste de inativo')
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