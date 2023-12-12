import login from '../../pages/Login/LoginPage'
import home from '../../pages/Home/HomePage'
import componente from '../../pages/ComponentesPadrao/ComponentesPadraoPage'

class ArquivoOperacionalPage {

  beforeOpe() {
    login
      .go()
      .signin()
    home
      .transporte()
    componente
      .selecionaIdioma('PT')
      .clicaBotao('Arquivos Operacionais')
    return this
  }

  pesquisaId() {
    cy.get('#id').type('1339')
    cy.get('.ant-table-row > :nth-child(1)').contains('1339').should('have.text', '1339')
    return this
  }

  pesquisaNomeArquivo() {
    cy.get('#id').type('1695295649246_op.enc')
    cy.get('[title="1695295649246_op.enc"]').contains('1695295649246_op.enc').should('have.text', '1695295649246_op.enc')
    return this
  }

  forcandoGeraçãoArquivoAtualizado() {
    componente
      .clicaBotao('Forçar geração')
      .clicaBotaoModal('Sim')
      .validaMensagem('Estamos processando seu arquívo operacional.')
      .validaMensagem('O arquívo operacional já está atualizado.')
    return this
  }

  forcandoGeraçãoNovaAtualização() {
    componente
      .clicaBotao('Grupo de operadora')
      .pesquisa('16')
      .clicaBotao('Editar')
      .limpaDescricao()
      .escreveDescricao('trilhos')
      .clicaBotao('Salvar')
      .clicaBotaoModal('Sim')
      .clicaBotao('Arquivos Operacionais')
      .clicaBotao('Forçar geração')
      .clicaBotao('Sim')
      .clicaBotao('Sim')
      .validaMensagem('Estamos processando seu arquívo operacional.')
      .validaMensagem('Seu arquívo operácional foi gerado com sucesso.')
    return this
  }

  alterandoTagParaAlt() {
    componente
      .pesquisaId('1356')
    this
      .clicaBotaoTag()
      .SelecionaTag('Alt')
    componente
      .clicaBotao('Confirmar')
    this
      .validaTagAlt('1356')
    return this
  }

  alterandoTagParaPrincipal() {
    componente
      .pesquisaId('1356')
    this
      .clicaBotaoTag()
      .SelecionaTag('Principal')
    componente
      .clicaBotao('Confirmar')
    this
      .validaTagPrincipal('1356')
    return this
  }

  desvinculandoTag() {
    componente
      .pesquisaId('1356')
    this
      .clicaBotaoTag()
      .SelecionaTag('Nenhuma')
    componente
      .clicaBotao('Confirmar')
    this
      .ValidaTagPrincipalInativa('Nenhum OP utilizando esta tag')
      .validaTagAltInativa('Nenhum OP utilizando esta tag')
    return this
  }

  testandoBotaovisualizar() {
    componente
            .pesquisaId('1356')
            .clicaBotao('Visualizar')
            .validaMensagem('Selecionar arquivo para comparar')
    return this
  }

  fazendoDownloadArquivo() {
    componente
    .pesquisaId('1356')
    .clicaBotao('Download')
    return this
  }

  pesquisaTag() {
    cy.get('#status').click({ force: true })
    cy.contains('Principal').click({ force: true })
    return this
  }

  clicaBotaoTag() {
    cy.get(':nth-child(3) > .ant-btn > :nth-child(2)').click({ force: true })
    return this
  }
  SelecionaTag(tag) {
    cy.get('.ant-space > :nth-child(2) > .ant-select > .ant-select-selector')
      .should('be.visible')
      .click()
    cy.get('.ant-select-dropdown')
      .should('be.visible')
    cy.contains('.ant-select-dropdown .ant-select-item', tag)
      .should('be.visible')
      .click()
    return this
  }

  validaTagAlt(id) {
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > :nth-child(1) > strong').should('have.text', id)
    return this
  }

  validaTagPrincipal(id) {
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > :nth-child(1) > strong').should('have.text', id)
    return this
  }

  validaTagAltInativa(texto) {
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > :nth-child(2)').should('have.text', texto)
    return this
  }

  ValidaTagPrincipalInativa(texto) {
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > :nth-child(2)').eq(2).should('have.text', texto)
    return this
  }
}
export default new ArquivoOperacionalPage