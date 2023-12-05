import usuario from '../../../../pages/Atendimento/Usuario/UsuarioPage'

describe('Acessando ususário e Testando Logs de alterações', () => {

    beforeEach(() => {
        usuario.beforeUsuario()
    })

    it('Visualizando "Logs de alterações"', () => {
        usuario.visualizandoLogsAlteracoes()
    })

    it.skip('validando a data da alteração', () => {
       usuario.validandoDataLogAlteracoes()
    })
})