import componente from '../../../pages/ComponentesPadrao/ComponentesPadraoPage'
import home from '../../../pages/Home/HomePage'
import login from '../../../pages/Login/LoginPage'

class NivelEscolaridadePage {

    beforeNivelEscolaridade() {
        login.go()
            .signin()
        home.usuario()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('Nível de escolaridade')
        return this
    }

    criandoUmNivelEscolaridade() {
        componente
        .clicaBotao('Novo')
        .escreveDescricao('Novo nível escolaridade')
        .clicaBotao('Inativo')
        .clicaBotao('Salvar')
        .clicaBotaoModal('Salvar')
        .validaMensagem('Nível de escolaridade do usuário foi criado com sucesso!')
        .clicaBotao('Ver nível de escolaridade')
        return this
    }

    editandoUmNivelEscolaridade() {
        componente
            .escreveDescricao('Novo nível escolaridade')
            .clicaBotao('Editar')
            .limpaDescricao()
            .escreveDescricao('Nível editado')
            .clicaBotao('Salvar')
            .clicaBotaoModal('Salvar')
            .validaMensagem('Nível de escolaridade foi editado com sucesso!')
            .clicaBotao('Ver nível de escolaridade')
        return this
    }
}
export default new NivelEscolaridadePage