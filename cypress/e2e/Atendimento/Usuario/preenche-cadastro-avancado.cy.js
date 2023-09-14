import login from '../../../pages/Login/LoginPage'
import home from '../../../pages/Home/HomePage'
import novoUsuario from '../../../pages/Atendimento/Usuario/NovoUsuarioPage'
import documentos from '../../../pages/Atendimento/Usuario/NovousuarioDocumentosPage'
import cadastroOpreador from '../../../pages/Atendimento/Usuario/CadastroOperadorPage'
import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'


describe('Preenche cadastro avançado com sucesso', () => {

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

    it('Criando usuário com documentação não obrigatória', () => {
        novoUsuario
            .clicaBotaoCadastroAvancado()
            .selecionaDataNascimento('1')
            .selecionaTipoUsuario('novo tipo de usuário')
            .preencheNomeCompleto('José da Silva Teste')
            .preencheNomeSocial('nome social')
            .selecionaGenero('Feminino')
            .emailnovoUsuario('jose@gmail.com')
            .filiacao1('Maria da Silva')
            .filiacao2('João da Silva')
            .statusInativo0()
            .statusAtivo()
            .clicaBotaoProximo()
        documentos
            .preencheDocumento0CPF('948.914.160-76')
            .preencheDocumento1('18.287.762-0')
            .complemento1('123456')
            .dataExpedicao1('Hoje')
        novoUsuario
            .clicaBotaoProximo()
        cadastroOpreador
            .matricula('123456789')
            .dataDeAdmissao('Hoje')
    })
})
