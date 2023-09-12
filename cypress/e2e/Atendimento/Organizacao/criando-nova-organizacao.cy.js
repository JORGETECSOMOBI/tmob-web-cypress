import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
import usuario from "../../../pages/Atendimento/Usuario/UsuarioHomePage"
import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import organizacao from '../../../pages/Atendimento/Organizacao/OrganizacaoPge'

describe('Testando a tela "Usuário"', () => {

    beforeEach(() => {
        login.go()
        login.signin()
        home.usuario()
        usuario.acessandoTelaPostosDeAtendimento()
        usuario.acessandoTelaOrganizaçao()
    })

    it('Criando nova organização', () => {
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
            .escreveCNPJ('09.443.830/0001-68')
        componente
            .clicaBotao('Proximo')
        organizacao
            .selecionaTipoDeTelefone0('Celular')
            .selecionaCanais0('SMS')
            .escreveNumeroTelefone0('11999999009')
            .adicionaNovoContato()
            .selecionaTipoDeTelefone1('Celular')
            // .escreveNumeroTelefone1('11990099009')
            // .selecionaCanais1('Telegram')
            
        // componente
        //     .clicaBotao('Proximo')
        // organizacao
        //     .escreveNumero('23')
        //     .selecionatipoEndereco('Residencial')
        //     .escreveCEP('12903000')   
        // componente
        //     .clicaBotao('Salvar')
        //     .clicaBotaoModal('Sim')
    })
})