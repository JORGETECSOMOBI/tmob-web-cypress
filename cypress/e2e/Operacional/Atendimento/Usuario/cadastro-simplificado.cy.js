import usuario from '../../../../pages/Atendimento/Usuario/UsuarioPage'

describe('Acessando a página de criação de novo ususário e Testando todas as funcionalidades', () => {
    
    beforeEach(() => {
        usuario.beforeUsuario()
    })

    it('Cadastra com sucesso um novo usuário usando o cadastro simplificado', () => {
        usuario.simplificado()
    })
})