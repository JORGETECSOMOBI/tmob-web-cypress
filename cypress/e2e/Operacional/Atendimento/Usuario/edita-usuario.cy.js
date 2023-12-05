import usuario from '../../../../pages/Atendimento/Usuario/UsuarioPage'

describe('Acessando a página de criação de novo ususário e Testando todas as funcionalidades', () => {

    beforeEach(() => {
        usuario.beforeUsuario()
    })

    it.skip('Edita usuário', () => {
        usuario.editandoUsuario()
    })
})