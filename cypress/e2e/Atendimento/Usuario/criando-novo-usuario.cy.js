import login from '../../../pages/Login/LoginPage'
import home from '../../../pages/Home/HomePage'
import novoUsuario from '../../../pages/Usuario/NovoUsuarioPage'

describe('Acessando a página de criação de novo ususário e testando todas as funcionalidades', () => {

    beforeEach(() => {
        login.go()
        login.signin()
        home.usuario()
        novoUsuario.botaonovoUsuario()
    })

   


    it('Cenario: preenche formuláio criação novo ususário', () => {
        novoUsuario.selecionaDataCriacaoUsuario()
                   .tirarFoto()
                   .selectTipoUsuario()
                   .selecionaNomeTipoUsuario('Empregado')
                   .preencheNomeCompleto()
                   .preencheNomeSocial()
                   .selecionaGeneroMasculino()
                   .emailnovoUsuario()
                   .filiacao1()
                   .filiacao2()
                   .statusAtivo()
                   .clicaBotaoProximo()
    })
})