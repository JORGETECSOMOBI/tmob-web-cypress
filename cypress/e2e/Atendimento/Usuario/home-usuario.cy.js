import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
import usuario from "../../../pages/Usuario/UsuarioHomePage"

describe('Acessando a home de usuário e validando o acesso de todos os itens do menu', () => {

    beforeEach(() => {
        login.go()
        login.signin()
        home.usuario()
    })

    it('Cenário: validando o acesso default a tela "Usuários"', () => {
        usuario.validandoAcessoTelaUsuario()
    })

    it('Cenário: acessando e validando a tela "Organização', () => {
        usuario.acessandoTelaOrganizaçao()

    })

    it('Cenário: acessando e validando a tela "postos de atendimento', () => {
        usuario.acessandoTelaPostosDeAtendimento()
    })

    it('Cenário: acessando e validando a tela "Tipo de Usuário"', () => {
        usuario.acessandoTelaTiposDeUsuario()
    })

    it('Cenário: acessando e validando a tela "Equipamento PcD"', () => {
        usuario.acessandoTelaEquipamentoPcD()
    })

    it('Cenário: acessando e validando a tela "Período estudantil"', () => {
        usuario.acessandoTelaPeriodoEstudantil()
    })

    it('Cenário: acessando e validando a tela "Tipo de estudante"', () => {
        usuario.acessandoTelaTipoDeEstudante()
    })

    it('Cenário: acessando e validando a tela "Nível de escolaridade"', () => {
        usuario.acessandoTelaNivelDeEscolaridade()
    })

    it('Cenário: acessando e validando a tela "Tipos de Documentos"', () => {
        usuario.acessandoTelaTipoDeDocumentos()
    })

    it('Cenário: acessando e validando a tela "ICD"', () => {
        usuario.acessandoTelaICD()
    })

})