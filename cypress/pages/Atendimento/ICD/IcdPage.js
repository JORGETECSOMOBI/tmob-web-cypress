import usuario from "../../../pages/Atendimento/Usuario/UsuarioHomePage"
import componente from "../../../pages/ComponentesPadrao/ComponentesPadraoPage"
import login from "../../../pages/Login/LoginPage"
import home from "../../../pages/Home/HomePage"

class IcdPage {

    beforeIcd() {
        login.go()
            .signin()
        home.usuario()
        usuario.acessandoTelaICD()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('ICD')
        return this
    }

    criandoIcd() {
        componente
            .clicaBotao('Novo')
            .escreveNomeId('novo ICD')
            .escreveDescricao('Novo ICD')
        this
            .escreveCodigo('1000')
            .validade('28')
            .confirmaAcompanhante('Não')
            .beneficioAprovado('Não')
        componente
            .escreveComentario('Blá, Blá, Blá, Blá, Blá, Blá, Blá, Blá, ')
            .selecionaStatus('Inativo')
            .clicaBotao('Salvar')
        this
            .clicaBotaoModal('Sim')
        componente
            .validaMensagem('ICD cadastrado com sucesso')
            .clicaBotao('Ver ICD')
        return this
    }

    editaIcd() {
        componente
            .escreveNomeId('novo ICD')
            .clicaBotao('Editar')
        this
            .clicaEmNome()
        componente
            .limpaNome()
        this
            .clicaEmDescricao()
        componente
            .limpaDescricao()
            .limpaCodigo()
            .escreveComentario('Blá, blá')
            .escreveDescricao('ICD editado')
        this
            .escreveCodigo('01')
        componente
            .escreveNomeId('ICD editado')
            .clicaBotao('Salvar')
            .clicaBotaoModal('Sim')
            .validaMensagem('ICD editado com sucesso')
        return this
    }

    escreveCodigo(codigo) {
        cy.get('#code').type(codigo)
        return this
    }

    validade(dias) {
        cy.get('#validity').type(dias)
        return this
    }

    confirmaAcompanhante(confirmacao) {
        cy.get('#allowAttendant').contains(confirmacao).click()
        return this
    }

    beneficioAprovado(status) {
        cy.get('#isApproved').contains(status).click()
        return this
    }

    clicaBotaoModal(confirmacao) {
        cy.get('.ant-modal-confirm-btns').contains(confirmacao).click()
        return this
    }

    clicaEmNome() {
        cy.get('#name').click()
        return this
    }

    clicaEmDescricao() {
        cy.get('#description').click()
        return this
    }

}
export default new IcdPage