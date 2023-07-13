describe('Efetuar login', () => {
  describe('Site', () => {
    it('Deve carregar o site com os campos de Login e Senha', () => {
      cy.userMain()
      cy.loginTmob()
    })
  })
});
