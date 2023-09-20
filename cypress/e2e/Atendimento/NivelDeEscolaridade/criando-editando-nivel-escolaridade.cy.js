import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"
import usuario from '../../../pages/Atendimento/Usuario/UsuarioHomePage'
import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'



describe('Criando um novo nível de escolaridade', () => {

    beforeEach(() => {
        login
            .go()
            .signin()
        home
            .usuario()
        usuario
            .acessandoTelaNivelDeEscolaridade()
        componente
            .validaURL('https://web.test.tmob.com.br/user/userStudentLevels')
            .selecionaIdioma('PT')
    })

    it(' Criando um novo nível de escolaridade com sucesso', () => {
        componente
            .clicaBotao('Novo')
            .escreveDescricao('Novo nível escolaridade')
            .clicaBotao('Inativo')
            .clicaBotao('Salvar')
            .clicaBotaoModal('Salvar')
            .validaMensagem('Nível de escolaridade do usuário foi criado com sucesso!')
            .clicaBotao('Ver nível de escolaridade')
            .validaURL('https://web.test.tmob.com.br/user/userStudentLevels')
    })

    it(' Criando um novo nível de escolaridade com sucesso', () => {
        componente
            .escreveDescricao('Novo nível escolaridade')
            .clicaBotao('Editar')
            .limpaDescricao()
            .escreveDescricao('Nível editado')
            .clicaBotao('Salvar')
            .clicaBotaoModal('Salvar')
            .validaMensagem('Nível de escolaridade foi editado com sucesso!')
            .clicaBotao('Ver nível de escolaridade')
            .validaURL('https://web.test.tmob.com.br/user/userStudentLevels')
    })
    
})

