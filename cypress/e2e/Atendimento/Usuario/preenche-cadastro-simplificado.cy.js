import login from '../../../pages/Login/LoginPage'
import home from '../../../pages/Home/HomePage'
import novoUsuario from '../../../pages/Atendimento/Usuario/NovoUsuarioPage'
<<<<<<< HEAD
=======
import novoUsuarioDocs from '../../../pages/Atendimento/Usuario/NovousuarioDocumentosPage'
>>>>>>> 8008ab4d4b57842f31632335a444713d0f355b2e
import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'

describe('Acessando a página de criação de novo ususário e Testando todas as funcionalidades', () => {

    beforeEach(() => {
<<<<<<< HEAD
        login.
            go()
            .signin()
        home
            .usuario()
        componente
            .clicaBotao('Novo usuário')
            .selecionaLinguagem('PT')
    })

    it('Preenche "Cadastro avançado" com sucesso para "tipo Usuário", "Idoso", documento obrigatório', () => {
        componente
            .clicaBotao('Cadastro avançado')
            .selecionadata('10/12/1958', '10')
        //.selecionaTipo('Automação Idoso')
=======
        login
            .go()
            .signin()
        home
            .usuario()
        novoUsuario
            .botaonovoUsuario()
        componente
            .selecionaLinguagem('PT')
    })

    it('Preenche cadastro simplificado com sucesso', () => {
        novoUsuarioDocs
            .preencheDocumento0CPF('06421438890')
        novoUsuario
            .selecionaDataNascimento('5')
            .preencheNomeCompleto('José da Silva')
            .preencheNomeSocial('nome Social')
            .selecionaGenero('Masculino')
            .emailnovoUsuario('jose@gmail.com')
            .filiacao1('Mãe')
            .filiacao2('Pai')
            .statusInativo0()


>>>>>>> 8008ab4d4b57842f31632335a444713d0f355b2e
    })
})