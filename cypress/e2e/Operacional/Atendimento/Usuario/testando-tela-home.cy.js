import usuario from '../../../../pages/Atendimento/Usuario/UsuarioPage'


describe('Acessando a página de criação de novo ususário e Testando todas as funcionalidades', () => {

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