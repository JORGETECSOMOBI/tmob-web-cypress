import usuario from '../../../pages/Atendimento/Usuario/UsuarioHomePage'
import cadastrar from '../../../pages/Atendimento/Usuario/FormulariosPage'

describe('Acessando a página de criação de novo ususário e Testando todas as funcionalidades', () => {

    beforeEach(() => {
        usuario.beforeUsuario()
    })

    it('Cadastra com sucesso um novo usuário "idoso" usando o cadastro avançado', () => {
        cadastrar.geralIdoso()
        cadastrar.documentacao()
        cadastrar.tipoDeUsuarioIdoso()
        cadastrar.contato()
    })

    it('Cadastra com sucesso um novo usuário "Estudante" usando o cadastro avançado', () => {
        cadastrar.geralEstudante()
        cadastrar.documentacao()
        cadastrar.tipoDeUsuarioEstudante()
        cadastrar.contato()
    })

    it('Cadastra com sucesso um novo usuário "Operador" usando o cadastro avançado', () => {
        cadastrar.geralOperador()
        cadastrar.documentacao()
        cadastrar.tipoDeUsuarioOperador()
        cadastrar.contato()
    })

    it('Cadastra com sucesso um novo usuário "Especial" usando o cadastro avançado', () => {
        cadastrar.geralEspecial()
        cadastrar.documentacao()
        cadastrar.tipoDeUsuarioEspecial()
        cadastrar.contato()
    })

    it('Cadastra com sucesso um novo usuário "Funcionário" usando o cadastro avançado', () => {
        cadastrar.geralFuncionario()
        cadastrar.documentacao()
        cadastrar.tipoDeUsuarioFuncionario()
        cadastrar.contato()
    })
})

