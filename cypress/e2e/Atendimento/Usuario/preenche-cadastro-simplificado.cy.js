import login from '../../../pages/Login/LoginPage'
import home from '../../../pages/Home/HomePage'
import novoUsuario from '../../../pages/Atendimento/Usuario/NovoUsuarioPage'
import novoUsuarioDocs from '../../../pages/Atendimento/Usuario/NovousuarioDocumentosPage'

describe('Acessando a página de criação de novo ususário e Testando todas as funcionalidades', () => {

    beforeEach(() => {
        login.go()
        login.signin()
        home.usuario()
        novoUsuario.botaonovoUsuario()
    })

    it('Preenche cadastro simplificado com sucesso', () => {
        novoUsuario
            .selecionaDataNascimento('5')
            .preencheNomeCompleto('José da Silva')
            .preencheNomeSocial('nome Social')
            .selecionaGenero('Masculino')
            .emailnovoUsuario('jose@gmail.com')
            .filiacao1('Mãe')
            .filiacao2('Pai')
            .statusInativo0()
        novoUsuarioDocs
            .preencheDocumento0CPF('06421438890')

    })
})