import usuario from '../../../pages/Atendimento/Usuario/UsuarioHomePage'
import cadastrar from '../../../pages/Atendimento/Usuario/FormulariosPage'

describe('Acessando a página de criação de novo ususário e Testando todas as funcionalidades', () => {
    
    beforeEach(() => {
        usuario.beforeUsuario()
    })

    it.skip('Cadastra com sucesso um novo usuário "idoso" usando o cadastro avançado', () => {
        cadastrar.geral()
        cadastrar.documentacao()
        cadastrar.tipoDeUsuarioIdoso()
        cadastrar.contato()
    })
})

       