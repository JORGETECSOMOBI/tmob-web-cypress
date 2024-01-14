import usuario from '../../../../pages/Atendimento/UsuarioPage'

describe('Testando "Cadastro simplificado"', () => {
    
    beforeEach(() => {
        usuario.beforeUsuario()
    })

    it('Cadastra com sucesso um novo usuário usando o cadastro simplificado', () => {
        usuario.simplificado()
    })
})