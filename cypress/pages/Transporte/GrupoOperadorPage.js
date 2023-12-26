import login from '../Login/LoginPage'
import home from '../Home/HomePage'
import componente from '../ComponentesPadrao/ComponentesPadraoPage'
import mensagem from '../../fixtures/mensagens.json'
import faker from 'faker-br'


class GrupoOperadorPage {

    beforeGrupoOperador() {
        login.go()
            .signin()
        home.transporte()
        componente
            .selecionaIdioma('PT')
            .clicaBotaoMenuPosicao(8)
        return this
    }

    criandoGrupoOperadorAdmin() {
        componente
            .clicaBotao('Novo')
            .escreveDescricao(faker.name.lastName())
            .selecionaStatus('Inativo')
        this
            .operadorAdmin()
            .selecionaFuncaoOperadorPorId('30')
            .selecionaTodasFuncoesIncluir()
            .incluiFuncao()
        componente
            .clicaBotao('Proximo')
            .selecionaOperadora('Operadora Autopass')
        this
            .selecionaFuncaoOperadorPorId('20')
            .selecionaTodasFuncoesIncluir()
            .incluiFuncao()
        componente
            .clicaBotao('Gravar')
            .clicaBotao('Proximo')
            .clicaBotao('+ Integrar Sistema')
        this
            .selecionaSistema('TOP-Mercury')
            .escreveIdExterno('12')
            .clicaBotao('Salvar')
        componente
            .clicaBotaoModal('Sim')
            .validaMensagem(mensagem.cadastraGrupoOperadorSucesso)
        return this
    }

    editandogrupoOperador() {
        componente
            .escreveDescricao('56')
            .clicaBotao('Editar')
            .limpaDescricao()
            .escreveDescricao(faker.name.lastName())
            .clicaBotao('Proximo')
            .clicaBotao('Proximo')
            .clicaBotao('Salvar')
            .clicaBotaoModal('Sim')
            .validaMensagem(mensagem.editaGrupoOperadorSucesso)
        return this
    }

    editandogrupoOperadorIncluindoFuncoesPorLote() {
        componente
            .escreveDescricao('56')
            .clicaBotao('Editar')
            .limpaDescricao()
            .escreveDescricao(faker.name.lastName())
        this
            .selecionaTodasFuncoesIncluir()
            .incluiFuncao()
        componente
            .clicaBotao('Proximo')
            .clicaBotao('Proximo')
            .clicaBotao('Salvar')
            .clicaBotaoModal('Sim')
            .validaMensagem(mensagem.editaGrupoOperadorSucesso)
        return this
    }

    editandogrupoOperadorExcluindoFuncoesPorLote() {
        componente
            .escreveDescricao('56')
            .clicaBotao('Editar')
            .limpaDescricao()
            .escreveDescricao(faker.name.lastName())
        this
            .selecionaTodasFuncoesExcluir()
            .excluiFuncao()
        componente
            .clicaBotao('Proximo')
            .clicaBotao('Proximo')
            .clicaBotao('Salvar')
            .clicaBotaoModal('Sim')
            .validaMensagem(mensagem.editaGrupoOperadorSucesso)
        return this
    }

    pesquisaPorId() {
        componente
            .escreveDescricao('12')
        this
            .ValidaIdgrupoOperador('12')
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
            .escreveDescricao('12')
            .clicaBotao('Visualizar')
            .validaTexto('Detalhes')
        return this
    }

    testandoEditar() {
        componente
            .escreveDescricao('12')
            .clicaBotao('Editar')
            .validaTexto('Editar')
        return this
    }

    operadorAdmin() {
        cy.get('#isAdmin > :nth-child(1) > .ant-radio > .ant-radio-input', { force: true }).click({ force: true })
        return this
    }

    operadorNaoAdmin() {
        cy.get('#isAdmin > :nth-child(1) > .ant-radio > .ant-radio-input').click({ force: true })
        return this
    }

    selecionaFuncaoOperadorPorId(id) {
        cy.get('input[placeholder="Procurar"]', { force: true }).eq(0).type(id, { force: true })
        return this
    }

    selecionaTodasFuncoesIncluir() {
        cy.get('.ant-checkbox-input', { force: true }).eq(1).click({ force: true })
        return this
    }

    selecionaTodasFuncoesExcluir() {
        cy.get('.ant-checkbox-input', { force: true }).eq(2).click({ force: true })
        return this
    }

    incluiFuncao() {
        cy.get(':nth-child(1) > .ant-btn-icon > .anticon > svg', { force: true }).click({ force: true })
        return this
    }

    excluiFuncao() {
        cy.get('.ant-transfer-operation > :nth-child(2)', { force: true }).click({ force: true })
        return this
    }

    selecionaSistema(sistema) {
        cy.get('#toSystem').click()
        cy.contains(sistema).click()
        return this
    }

    escreveIdExterno(id) {
        cy.get('#externalId').type(id)
        return this
    }

    clicaBotao(nome) {
        cy.get('.steps-action').contains(nome).click()
        return this
    }

    ValidaIdgrupoOperador(id) {
        cy.get('.ant-table-row > :nth-child(1)').contains(id).should('have.text', id)
        return this
    }
}
export default new GrupoOperadorPage