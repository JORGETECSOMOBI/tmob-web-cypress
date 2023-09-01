import login from '../../../pages/Login/LoginPage'
import home from '../../../pages/Home/HomePage'
import novoUsuario from '../../../pages/Atendimento/NovoUsuarioPage'

describe('Editando e criando um novo usuário com sucesso', () => {

    beforeEach(() => {
        login.go()
        login.signin()
        home.usuario()
        novoUsuario.botaonovoUsuario()
    })

    it('Editando a página "Geral" e direcionando para a página "Documentos"', () => {     
        novoUsuario.selecionaDataCriacaoUsuario()
                   .selectTipoUsuario()
    })
})
