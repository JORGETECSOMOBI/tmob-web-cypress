import organizacao from '../../../../pages/Atendimento/Organizacao/OrganizacaoPge'

describe('Testando a tela "Usuário"', () => {

    beforeEach(() => {
        organizacao.beforeOrg()
    })

    it('Cria nova organização com sucesso', () => {
        organizacao.criaOrganização()
    })

    it('Tentativa de criar nova organização com cep inválido', () => {
        organizacao.TentativaDeCriarOrganizacaoCepInválido()
    })
})