import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
import usuario from "../../../pages/Atendimento/Usuario/UsuarioHomePage"

describe('testando a tela "Usuário"', () => {

    beforeEach(() => {
        login.go()
        login.signin()
        home.usuario()
        usuario.acessandoTelaPostosDeAtendimento()
        usuario.acessandoTelaOrganizaçao()
    })

    it('Cenário: Criando nova organização', () => {
        cy.xpath('//a[contains(., "Novo")]//button').click();


    })
})