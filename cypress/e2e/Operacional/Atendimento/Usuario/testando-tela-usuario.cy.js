import usuario from '../../../../pages/Atendimento/UsuarioPage'


describe('Testando tela "Usuário"', () => {

    beforeEach(() => {
        usuario.beforeUsuario()
    })

    it('Edita usuário', () => {
      usuario.editaUsuario()
    })

    it('Visualizar usuário', () => {
    usuario.visualizaUsuario()
    })

    it('Filtro inativo', () => {
        usuario.filtroInativo()
    })

    it('Filtro ativo', () => {
       usuario.filtroAtivo()
    })

    it('Filtro por nome', () => {
       usuario.filtroNome
    })

    it('Limpar filtro por nome', () => {
        usuario.limpaFiltroNome()
    })
})