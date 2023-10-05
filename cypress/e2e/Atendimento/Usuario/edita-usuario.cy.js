import usuario from '../../../pages/Atendimento/Usuario/UsuarioHomePage'
import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'

describe('Acessando a página de criação de novo ususário e Testando todas as funcionalidades', () => {
    
    beforeEach(() => {
        usuario.beforeUsuario()
    })

    it('Edita usuário', () => {
        componente.clicaBotaoHomeEditar('Editar')
    })
})