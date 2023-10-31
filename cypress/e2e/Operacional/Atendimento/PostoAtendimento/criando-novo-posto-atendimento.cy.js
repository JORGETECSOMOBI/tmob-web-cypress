import usuario from "../../../../pages/Atendimento/Usuario/UsuarioHomePage"
import novoPostoAtendimento from "../../../../pages/Atendimento/PostoDeAtendimento/NovoPostoAtendimentoPage"
import componente from '../../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import faker from 'faker-br'
describe('Testando a tela "Usuário"', () => {


    beforeEach(() => {
        usuario.beforePostosAtendimento()
    })

    it(' Criando e salvando com sucesso a criação de um novo"Posto de atendimento"', () => {
        const descricao = faker.name.firstName()
        const nome = 'AAAAAA AUTOMAÇÂO'
        const posto = `${nome} ${descricao}`
        componente
            .clicaBotao('Novo')
        novoPostoAtendimento
            .descricao(posto)
            .nome('AAAAAA AUTOMAÇÂO')
            .cep(12903000)
            .numero(2000)
            .complemento('nãotem')
            .salvar()
            .cadastrarSim()
            .validaMensagemDesucesso('Posto de atendimento cadastrado com sucesso')
    })

})      