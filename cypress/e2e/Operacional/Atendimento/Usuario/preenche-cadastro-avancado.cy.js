import usuario from '../../../../pages/Atendimento/UsuarioPage'

describe('Acessando a página de criação de novo ususário e Testando todas as funcionalidades', () => {

    beforeEach(() => {
        usuario.beforeUsuario()
    })

    it('Cadastra com sucesso um novo usuário "idoso" usando o cadastro avançado', () => {
        usuario.cadastroIdoso()
    })

    it('Cadastra com sucesso um novo usuário "Estudante" usando o cadastro avançado', () => {
        usuario.cadastroEstudante()
    })

    it('Cadastra com sucesso um novo usuário "Operador" usando o cadastro avançado', () => {
        usuario.cadastroOperador()
    })

    it.skip('Cadastra com sucesso um novo usuário "Especial" com acompanhante usando o cadastro avançado', () => {
        usuario.cadastroEspecialComAcompanhante()
    })

    it('Cadastra com sucesso um novo usuário "Especial" sem acompanhante usando o cadastro avançado', () => {
        usuario.cadastroEspecialSemAcompanhante()
    })

    it('Cadastra com sucesso um novo usuário "Funcionário" usando o cadastro avançado', () => {
        usuario.cadastroFuncionario()
    })

    it.skip('Cadastra com sucesso um novo usuário "Funcionário, Especial e Idoso" usando o cadastro avançado', () => {
        usuario.cadastroFuncionarioEspecialIdoso()
    })

    it.skip('Cadastra com sucesso um novo usuário "Idoso, Estudante, Especial" usando o cadastro avançado', () => {
        usuario.cadastroIdosoEstudanteEspecial()
    })

    it.skip('Cadastra com sucesso um novo usuário "Funcionário, Operador, Estudante" usando o cadastro avançado', () => {
        usuario.cadastroFuncionarioOperadorEstudante()
    })
})

