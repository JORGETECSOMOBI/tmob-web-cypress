import login from '../../../pages/Login/LoginPage'
import home from '../../../pages/Home/HomePage'
import novoUsuario from '../../../pages/Usuario/novoUsuarioPage'

describe('Editando e criando um novo usuário com sucesso', () => {

    beforeEach(() => {
        login.go()
        login.signin()
        home.usuario()
    })

    it('Editando a página "Geral" e direcionando para a página "Documentos"', () => {
        novoUsuario.botaonovoUsuario()
                   .selecionaDataCriacaoUsuario()
        novoUsuario.selectTipoUsuario()
    })
})
