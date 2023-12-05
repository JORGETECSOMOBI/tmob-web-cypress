import tipoUsuario from '../../../../pages/Atendimento/TipoDeUsuario/TipoUsuarioPage'

describe('Testando "tipo de Usuário', () => {

    beforeEach(() => {
        tipoUsuario.beforeTipoDeUsuario()
    })

    it('Criando um novo Tipo de usuário', () => {
        tipoUsuario.criandoNovoTipoUsuario()
    })

    it('Tentativa de criar um novo Tipo de usuário com descrição já cadastrado no sistema', () => {
        tipoUsuario.tentativaDeCriarUsuáioComDescricaoInvalida()
    })

    it('Editando tipo de usuário com descrição já cadastrado no sistema ', () => {
        tipoUsuario.tentativaDeEditarNovoUsuarioDescricaoinvalida()
    })

    it('Editando tipo de usuário com sucesso ', () => {
        tipoUsuario.editandoTipoUsuario()
    })
})