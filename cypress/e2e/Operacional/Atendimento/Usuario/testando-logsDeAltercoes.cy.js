import usuario from '../../../../pages/Atendimento/UsuarioPage'

describe('Testando Logs de alterações', () => {

    beforeEach(() => {
        usuario.beforeUsuario()
    })

    it('Visualizando "Logs de alterações"', () => {
        usuario.visualizandoLogsAlteracoes()
    })

    it('validando a data da alteração', () => {
       usuario.validandoDataLogAlteracoes()
    })
})