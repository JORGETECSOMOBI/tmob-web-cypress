import usuario from '../../../pages/Atendimento/Usuario/UsuarioHomePage'
import cadastrar from '../../../pages/Atendimento/Usuario/FormulariosPage'

describe('Acessando a página de criação de novo ususário e Testando todas as funcionalidades', () => {
    
    beforeEach(() => {
        usuario.beforeUsuario()
    })

    it('Cadastra com sucesso um novo usuário usando o cadastro simplificado', () => {
        cadastrar.simplificado()
    })
})