import usuario from '../../../../pages/Atendimento/Usuario/UsuarioHomePage'
import cadastrar from '../../../../pages/Atendimento/Usuario/cadastroPage'

describe('Acessando a página de criação de novo ususário e Testando todas as funcionalidades', () => {

    beforeEach(() => {
        usuario.beforeUsuario()
    })

    it('Cadastra com sucesso um novo usuário "idoso" usando o cadastro avançado', () => {
        cadastrar.cadastroIdoso()
    })

    it('Cadastra com sucesso um novo usuário "Estudante" usando o cadastro avançado', () => {
        cadastrar.cadastroEstudante()
    })

    it('Cadastra com sucesso um novo usuário "Operador" usando o cadastro avançado', () => {
        cadastrar.cadastroOperador()
    })

    it('Cadastra com sucesso um novo usuário "Especial" usando o cadastro avançado', () => {
        cadastrar.cadastroEspecial()
    })

    it('Cadastra com sucesso um novo usuário "Funcionário" usando o cadastro avançado', () => {
        cadastrar.cadastroFuncionario()
    })

    it.skip('Cadastra com sucesso um novo usuário "Funcionário, Especial e Idoso" usando o cadastro avançado', () => {
        cadastrar.cadastroFuncionarioEspecialIdoso()
    })

    it.skip('Cadastra com sucesso um novo usuário "Idoso, Estudante, Especial" usando o cadastro avançado', () => {
        cadastrar.cadastroIdosoEstudanteEspecial()
    })

    it.skip('Cadastra com sucesso um novo usuário "Funcionário, Operador, Estudante" usando o cadastro avançado', () => {
        cadastrar.cadastroFuncionarioOperadorEstudante()
    })
})

