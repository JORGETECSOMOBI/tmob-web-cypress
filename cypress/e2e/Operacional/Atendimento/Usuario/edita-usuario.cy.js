import usuario from '../../../../pages/Atendimento/UsuarioPage'

describe('Acessando a página de criação de novo ususário e Testando todas as funcionalidades', () => {

    beforeEach(() => {
        usuario.beforeUsuario()
    })

    it('Edita usuário Idoso', () => {
        usuario.editandoUsuarioIdoso()
    })

    it('Edita usuário Estudante', () => {
        usuario.editandoUsuarioEstudante()
    })

    it('Edita usuário Funcionário', () => {
        usuario.editandoUsuarioFuncionario()
    })

    it('Edita usuário Especial com acompanhante', () => {
        usuario.editandoUsuarioEspecialComAcompanhante()
    })

    it('Edita usuário Especial sem acompanhante', () => {
        usuario.editandoUsuarioEspecialSemAcompanhante()
    })

    it('Edita usuário Operador', () => {
        usuario.editandoUsuarioOperador()
    })
})