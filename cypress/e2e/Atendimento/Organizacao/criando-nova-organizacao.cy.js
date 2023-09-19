import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
import usuario from "../../../pages/Atendimento/Usuario/UsuarioHomePage"
import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import organizacao from '../../../pages/Atendimento/Organizacao/OrganizacaoPge'

describe('Testando a tela "Usuário"', () => {

    beforeEach(() => {
<<<<<<< HEAD
        login
            .go()
            .signin()
        home
            .usuario()
        usuario
            .acessandoTelaPostosDeAtendimento()
            .acessandoTelaOrganizaçao()
=======
        login.go()
        login.signin()
        home.usuario()
        usuario.acessandoTelaPostosDeAtendimento()
        usuario.acessandoTelaOrganizaçao()
>>>>>>> 8008ab4d4b57842f31632335a444713d0f355b2e
        componente
            .selecionaLinguagem('PT')
    })

    it('Tentativa de criar nova organização com cep inválido', () => {
        componente
            .clicaBotao('Novo')
        organizacao
            .escreveRazaosocial('nova organizaçao')
            .escreveNomefantazia('nova organizaçao')
            .escreveEmail('nova@gmail.com')
            .selecionaTipoOperadora('Empresa')
            .selecionaOperadora('METRO')
        componente
            .clicaBotao('Proximo')
        organizacao
<<<<<<< HEAD
            .escreveCNPJ0('09.443.830/0001-68')
            .escreveCNPJ1('09.443.830/0001-68')
=======
            .escreveCNPJ('09443830000168')
>>>>>>> 8008ab4d4b57842f31632335a444713d0f355b2e
        componente
            .clicaBotao('Proximo')
        organizacao
            .selecionaTipoDeTelefone0('Celular')
            .selecionaCanais0('SMS')
            .escreveNumeroTelefone0('11999999009')
        componente
            .clicaBotao('Proximo')
        organizacao
<<<<<<< HEAD
            .escreveNumero('23')
            .selecionatipoEndereco('Residencial')
            .escreveCEP('000')
        componente
            .clicaBotao('Salvar')
            .clicaBotaoModal('Sim')
            .validaMensagem('Campo obrigatório')
=======

            .escreveNumero('23')
            .selecionatipoEndereco('Residencial')
            .escreveCEP('12903000')
        componente
            .clicaBotao('Salvar')
            .clicaBotaoModal('Sim')
>>>>>>> 8008ab4d4b57842f31632335a444713d0f355b2e
    })
})