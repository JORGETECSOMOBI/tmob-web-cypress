import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'
import mensagem from '../../fixtures/mensagens.json'
import faker from 'faker-br'

class ConsorcioPage {

    beforeConsorcio() {
        login.go()
            .signin()
        home.transporte()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('Consórcio')
        return this
    }

    criaConsorcio() {
        componente
        .clicaBotao('Consórcio')
        .clicaBotao('Novo')
        .escreveNomeId(faker.name.lastName())
        .selecionaStatus('Inativo')
        .clicaBotao('Salvar')
        .clicaBotaoModal('Sim')
        .validaMensagem(mensagem.cadastroConsorcioSucesso)
        return this
    }

    editaConsorcio() {
        componente
        .clicaBotao('Consórcio')
        .pesquisaId('53')
        .clicaBotao('Editar')
        .limpaNome()
        .escreveNomeId(faker.name.lastName())
        .clicaBotao('Salvar')
        .clicaBotaoModal('Sim')
        .validaMensagem(mensagem.editaConsorcioSucesso)
        return this
    }

    visualizaConsorcio() {
        componente
        .clicaBotao('Consórcio')
        .pesquisaId('53')
        .clicaBotao('Visualizar')
        .validaTexto('Detalhes')
        return this
    }
}
export default new ConsorcioPage