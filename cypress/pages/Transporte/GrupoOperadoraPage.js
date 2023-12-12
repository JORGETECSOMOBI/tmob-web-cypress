import login from '../Login/LoginPage'
import home from '../Home/HomePage'
import componente from '../ComponentesPadrao/ComponentesPadraoPage'
import mensagem from '../../fixtures/mensagens.json'
import faker from 'faker-br'

class GrupoOperadoraPage {

    beforeGrupoOperadora() {
        login.go()
            .signin()
        home.transporte()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('Grupo de operadora')
        return this
    }

    criandoUmGrupodeoperadora() {
        componente
            .clicaBotao('Novo')
            .escreveDescricao(faker.name.lastName())
            .clicaBotao('Salvar')
            .clicaBotao('Sim')
            .validaMensagem(mensagem.cadastraGrupoOperadoraSucesso)
        return this
    }

    editandoUmGrupodeoperadora() {
        componente
            .clicaBotao('Editar')
            .limpaDescricao()
            .escreveDescricao(faker.name.lastName())
        this
            .alteraStatus()
            .interoperabilidade()
        componente
            .clicaBotao('Salvar')
            .clicaBotao('Sim')
            .validaMensagem(mensagem.editaGrupoOperadoraSucesso)
        return this
    }

    pesquisaPorId() {
        componente
            .escreveDescricao('22')
            .validaId('22')
        return this
    }

    pesquisaPorNome() {
        componente
            .escreveDescricao('Nogueira')
            .validaDescricao('Nogueira')
        return this
    }

    pesquisaPorStatusAtivo() {
        componente
            .selecionaStatus('Ativo')
            .validaStatusAtivo()
        return this
    }

    pesquisaPorStatusInativo() {
        componente
            .selecionaStatus('Inativo')
            .validaStatusInativo()
        return this
    }

    testandoVisualizar() {
        componente
            .escreveDescricao('22')
            .clicaBotao('Visualizar')
            .validatexto('ID #22')
        return this
    }

    testandoEditar() {
        componente
            .escreveDescricao('22')
            .clicaBotao('Editar')
            .validatexto('ID #22')
        return this
    }


    alteraStatus() {
        cy.get('#isActive > .ant-switch-handle').click()
        return this
    }

    interoperabilidade() {
        cy.get('#isInteroperable > .ant-switch-inner').click()
        return this
    }
}
export default new GrupoOperadoraPage