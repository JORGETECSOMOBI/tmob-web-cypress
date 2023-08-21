import login from '../../../pages/Login/LoginPage'
import home from '../../../pages/Home/HomePage'
import novoUsuario from '../../../pages/Usuario/NovoUsuarioPage'
import novoUsuarioDocs from '../../../pages/Usuario/NovousuarioDocumentosPage'

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
     novoUsuarioDocs.documentoOpcionalDoc1('123456789')
                    .carteirinha('45454554554')
                    .complemento('001')                
                    .dataExpedicao()
                    .dataValidade()
                    .carteiraDeTrabalho(151561612666)
                    .upload()
         novoUsuario.clicaBotaoProximo()
    })
})