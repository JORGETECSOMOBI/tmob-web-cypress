import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
import usuario from "../../../pages/Atendimento/Usuario/UsuarioHomePage"
import icd from "../../../pages/Atendimento/ICD/IcdPage"

describe('testando a tela "Usuário"', () => {

    beforeEach(() => {
        login.go()
        login.signin()
        home.usuario()
        usuario.acessandoTelaPostosDeAtendimento()
        usuario.acessandoTelaICD()
    })

    it('Criando um novo item "ICD"', () => {
        icd.clicaBotaoNovo()
           .escreveNome('Icd teste')
           .escreveDescricao('ICD teste')
           .escreveCodigo('5000')
           .validade('15')
           .escreveComentario('BLá, BLá, BLá, BLá, BLá, BLá, BLá, BLá, BLá, BLá, BLá, BLá, ')
           .salvar()
           .confirmaCadastro()
           .ValidaMensagemDeSucesso('ICD cadastrado com sucesso')
    })
})