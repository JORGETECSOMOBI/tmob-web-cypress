import usuario from "../../../pages/Atendimento/Usuario/UsuarioHomePage"
import novoTipoUsuario from "../../../pages/Atendimento/TipoDeUsuario/NovoTipoUsuarioPage"
import componente from "../../../pages/ComponentesPadrao/ComponentesPadraoPage"
import faker from 'faker-br'

describe('Testando "tipo de Usuário', () => {

    beforeEach(() => {
        usuario.beforeTipoDeUsuario()
    })

    it('Criando um novo Tipo de usuário', () => {
        componente
            .clicaBotao('Novo')
        novoTipoUsuario
            .escreveDescricaoTipoUsuario()
            .idadeMinima('1')
            .idadeMaxima('120')
        componente
            .selecionaTipo('Funcionário')
            .clicaBotao('Salvar')
            .clicaBotaoModal('Salvar')
            .validaMensagem('Tipo de usuário foi criado com sucesso!')
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
            .limpaIdadeMaxima()
            .idadeMaxima('120')
        componente
            .limpaDescricao()
            .escreveDescricao('Novo nome1')
            .selecionaStatus('Inativo')
            .clicaBotao('Salvar')
            .clicaBotaoModal('Salvar')
            .validaMensagem('A descrição inserida já existe em Tipo de usuário.')
    })

    it('Editando tipo de usuário com sucesso ', () => {
        componente
            .pesquisa('Geraldo')
            .clicaBotao('Editar')
        novoTipoUsuario
            .limpaIdadeMinima()
            .idadeMinima('1')
            .limpaIdadeMaxima()
            .idadeMaxima('120')
        componente
            .limpaDescricao()
            .escreveDescricao(faker.name.findName())
            .selecionaStatus('Inativo')
            .clicaBotao('Salvar')
            .clicaBotaoModal('Salvar')
            .validaMensagem('Tipo de usuário foi editado com sucesso!')
    })
})