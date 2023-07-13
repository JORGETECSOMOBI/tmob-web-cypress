import { faker } from '@faker-js/faker';
let nomeGerado = faker.person.fullName();
const nomeInicial = faker.person.firstName();
const emailGerado = faker.internet.email();
describe('Verificando se carrega a tela inicial do site', () => {
  describe('Site', () => {
    it('Deve carregar o site com os campos de Login e Senha', () => {
      cy.testscreenLogin()
    })
  })
});
