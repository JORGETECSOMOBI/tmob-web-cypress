import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
import usuario from "../../../pages/Atendimento/Usuario/UsuarioHomePage"
import novoTipoUsuario from "../../../pages/Atendimento/TipoDeUsuario/NovoTipoUsuarioPage"
import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'

describe('Testando "tipo de Usuário', () => {

    beforeEach(() => {
        login
            .go()
            .signin()
        home
            .usuario()
        usuario
            .acessandoTelaTiposDeUsuario()
        novoTipoUsuario
            .botaoNovoTipousuario()
        componente
            .selecionaLinguagem('PT')
    })

    it('Criando com sucesso um novo Tipo de usuário', () => {
        novoTipoUsuario
            .descricao('Usuário Automação')
            .idadeMinima('1')
            .idadeMaxima('120')
            .abreSelectTipo()
            .escolheTipoUsuario('Operador')
            .escreveComentario('Blá, Blá, Blá')
            .salvaNovoTipoDeUsuario()
            .confirmaCriacaoNovoTipoUsuario()
            .validaMensagemDeSucessoCriacaoTipousuario('Tipo de usuário foi criado com sucesso!')
    })
})
