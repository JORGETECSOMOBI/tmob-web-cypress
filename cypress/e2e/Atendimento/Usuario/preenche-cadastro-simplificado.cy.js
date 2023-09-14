import login from '../../../pages/Login/LoginPage'
import home from '../../../pages/Home/HomePage'
import novoUsuario from '../../../pages/Atendimento/Usuario/NovoUsuarioPage'
import novoUsuarioDocs from '../../../pages/Atendimento/Usuario/NovousuarioDocumentosPage'
import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'

describe('Acessando a página de criação de novo ususário e Testando todas as funcionalidades', () => {

    beforeEach(() => {
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


    })
})