import login from '../Login/LoginPage'
import home from '../Home/HomePage'
import componente from '../ComponentesPadrao/ComponentesPadraoPage'

class MensagemDisplayPage {

    beforeMensagemDisplay() {
        login.go()
        login.signin()
        home.dispositivos()
        componente
            .selecionaIdioma('PT')
            .clicaBotao('Mensagens display')
    }

    pesquisaPorCodigo() {
        componente
        .escreveDescricao('91')
        .validaTexto('91')
        
        return this
    }

    pesquisaPordescricao() {
        componente.escreveDescricao('QRCODE')
        .validaTexto('QRCODE')
        return this
    }

    pesquisaPorStatusAtivo() {
        this.selecionaStatus('Ativo')
        return this
    }

    pesquisaPorStatusInativo() {
        this.selecionaStatus('Inativo')
        return this
    }

    botaoVisualizar() {
        componente.clicaBotaoHomeVisualizar()
        return this
    }

    botaoEditar() {
        componente.clicaBotaoEditar()
        return this
    }

    selecionaStatus(status) {
        cy.get('.ant-select-selection-search > #description').click()
        cy.get('.ant-select-item-option-content').contains(status)
        return this
    }
}
export default new MensagemDisplayPage