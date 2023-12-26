import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'
import mensagem from '../../fixtures/mensagens.json'
import faker from 'faker-br'

class MotivosdeHotlistPage {

    beforeMotivosHotlist() {
        login.go()
            .signin()
        home.transporte()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('Motivos de hotlist')
        return this
    }

    criaUmMotivoDeHotlist() {
        componente
            .clicaBotao('Novo')
            .escreveDescricao(faker.address.city())
            .selecionaAcao('Bloquear')
            .selecionaStatus('Inativo')
            .clicaBotao('Salvar')
            .clicaBotaoModal('Sim')
            .validaMensagem(mensagem.cadastraMotivoHotlist)
        return this
    }

    editaUmMotivoDeHotlist() {
        componente
            .escreveDescricao('19')
            .clicaBotao('Editar')
            .limpaDescricao()
            .escreveDescricao(faker.address.city())
            .selecionaAcao('Bloquear')
            .selecionaStatus('Inativo')
            .clicaBotao('Salvar')
            .clicaBotaoModal('Sim')
            .validaMensagem(mensagem.editaMotivoHotlist)
        return this
    }

    filtroPorId() {
        componente
            .escreveDescricao('19')
            .validaId('19')
        return this
    }

    filtroPorNome() {
        componente
            .escreveDescricao('Elizangela do Sul')
            .validaNome('Elizangela do Sul')
        return this
    }

    filtroPorStatusInativo() {
        componente
            .selecionaStatus('Ativo')
            .validaStatusAtivo()
        return this
    }

    filtroPorStatusAtivo() {
        componente
            .selecionaStatus('Inativo')
            .validaStatusInativo()
        return this
    }

    visualizarAcaoBloqueado() {
        componente
            .escreveDescricao('22')
            .clicaBotao('Visualizar')
            .validaTexto('ID #22')
            .validaTexto('Bloqueado')
        return this
    }

    VisualizarAcaoDesbloqueado() {
        componente
            .escreveDescricao('02')
            .clicaBotao('Visualizar')
            .validaTexto('ID #2')
            .validaTexto('Desbloqueado')
        return this
    }
}
export default new MotivosdeHotlistPage